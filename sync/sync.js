import { Octokit } from "octokit";
import fs from "fs";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const org = "IMASIO-ONOKO";

const labels = JSON.parse(fs.readFileSync("./sync/labels.json"));
const milestones = JSON.parse(fs.readFileSync("./sync/milestones.json"));

const targetRepo = process.argv[2];

async function syncRepo(repo) {
  for (const label of labels) {
    try {
      await octokit.rest.issues.getLabel({
        owner: org,
        repo,
        name: label.name,
      });
      await octokit.rest.issues.updateLabel({
        owner: org,
        repo,
        name: label.name,
        color: label.color,
        description: label.description,
      });
      console.log(`✅ Label mis à jour: ${label.name}`);
    } catch {
      await octokit.rest.issues.createLabel({ owner: org, repo, ...label });
      console.log(`➕ Label créé: ${label.name}`);
    }
  }

  for (const ms of milestones) {
    try {
      const { data: existing } = await octokit.rest.issues.listMilestones({
        owner: org,
        repo,
      });
      const found = existing.find(
        (m) => m.title.includes(ms.title) || ms.title.includes(m.title),
      );
      if (!found) {
        await octokit.rest.issues.createMilestone({
          owner: org,
          repo,
          title: ms.title,
          description: ms.description,
          due_on: ms.due_on,
        });
        console.log(`➕ Milestone créée: ${ms.title}`);
      } else {
        console.log(`✅ Milestone existante: ${ms.title}`);
      }
    } catch (err) {
      console.error(
        `❌ Erreur milestone ${ms.title} sur ${repo}:`,
        err.message,
      );
    }
  }
}

async function main() {
  if (targetRepo) {
    await syncRepo(targetRepo);
  } else {
    const { data: repos } = await octokit.rest.repos.listForOrg({ org });
    for (const repo of repos) {
      if (!repo.archived) await syncRepo(repo.name);
    }
  }
}

main().catch((err) => console.error(err));
