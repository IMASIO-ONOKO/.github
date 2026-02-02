# Player Interactif

## 📖 Description

Plateforme interactive composée d’un **player embarqué**, d’un **outil de configuration client**, d’un **espace R&D soft/hard** et d’un **référentiel administratif**.  
L’architecture multi-repository couvre l’exécution temps réel, la création d’expériences interactives, les tests hardware/software et la gouvernance du projet.  
Stack technique principale : **Electron, Vite, React, TypeScript**.

---

## 📂 Repositories

| Repository | Description |
|------------|-------------|
| `player-runtime` | Logiciel embarqué du player. Gère la lecture média, les interactions et la logique événementielle sur Linux embarqué. |
| `player-studio` | Application de configuration client pour créer, paramétrer et déployer des expériences interactives. |
| `player-labs` | R&D logiciel et matériel : tests de périphériques, déclenchement d’événements, prototypes et POC. |
| `player-ops` | Administration, conformité, pilotage et documentation du projet. |
| `player-template` | Template de démarrage Electron + Vite + React + TS pour tous les développements applicatifs. |

---

## 🎯 Objectifs

1. **Cadrage & spécifications** – cahier des charges, étude de marché, architecture, workflow.  
2. **MVP technique** – player et studio fonctionnels, template prêt à l’emploi.  
3. **Prototype client / pilote** – tests internes et premiers retours utilisateurs.  
4. **Structure & financement** – création de société, subventions, prêt bancaire, process interne.  
5. **Design system & UX/UI** – uniformisation visuelle et validation UX.  
6. **Version beta** – livraison complète et testée prête pour industrialisation.  
7. **Lancement officiel** – mise sur le marché, support client et suivi administratif.  

---

## ⚙️ Organisation et workflow

- **Multi-repositories** pour séparer responsabilités et faciliter la montée en charge.  
- **GitFlow simplifié** : `prod` pour production, `main` pour développement intégré, feature branches pour chaque tâche.  
- **CI/CD** : automatisation des builds et tests sur les repos techniques.  
- **Documentation centralisée** dans `player-ops`.  
