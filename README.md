
# 🧩 Architecture Microservices – API Gateway, Auth & Payment

Ce projet met en place une architecture de microservices en Node.js avec une **API Gateway** centrale qui redirige les requêtes vers les services **Auth** (authentification) et **Payment** (paiement).

---

## 📦 Structure

- **API Gateway**  
  Gère l’entrée des requêtes HTTP et les redirige vers les services appropriés.

- **Auth**  
  Gère l’inscription et la connexion des utilisateurs.

- **Payment**  
  Gère la création et la vérification des paiements.

---

## 🛠️ Installation & Lancement

Pour chaque service (et donc chaque dossier), exécuter les commandes suivantes:

```bash
npm install
node server
```

### Exemple :

```bash
cd Auth
npm install
node server
```

Faire de même pour les dossiers `API Gateway` et `Payment`.

---

## 🌐 Accès aux services

Toutes les requêtes passent par le **Gateway** (`http://localhost:3000`) et sont redirigées vers les bons services via les routes suivantes :

### 🔐 Authentification

- `POST` [`/api/auth/login`](http://localhost:3000/api/auth/login)  
  Authentifie un utilisateur.

- `POST` [`/api/auth/register`](http://localhost:3000/api/auth/register)  
  Crée un nouvel utilisateur.

### 💳 Paiement

- `POST` [`/api/paiement/creer`](http://localhost:3000/api/paiement/creer)  
  Crée un nouveau paiement.

- `GET` [`/api/paiement/verifier`](http://localhost:3000/api/paiement/verifier)  
  Vérifie le statut d’un paiement.
