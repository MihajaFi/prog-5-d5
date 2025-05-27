# Diagrammes pour mieux comprendre la Machine à Café Magique

---

## 1. Diagramme de Qui Fait Quoi

```plaintext
+-------------+        +----------------+        +----------------------+
| Utilisateur |        | Machine à Café |        | Système de Paiement |
+-------------+        +----------------+        +----------------------+
      |                        |                          |
      | Payer                  |                          |
      |----------------------->|                          |
      |                        | Valider le paiement ---->|
      |                        |<-------------------------|
      | Choisir café           |                          |
      |----------------------->|                          |
      |                        | Préparer le café         |
      |                        |                          |
      | Recevoir le café       |                          |
      |<-----------------------|                          |
```
## 2. Diagramme des Étapes (Séquence Simple)

```plaintext
Utilisateur    Machine à Café    Système de Paiement

   |                  |                 |
   |---- Payer ------>|                 |
   |                  |--- Vérifie ---->|
   |                  |<-- Réponse ----|
   |---- Choisir ---->|                 |
   |                  | Prépare café    |
   |<--- Reçoit café--|                 |
```
## 3. Mini Schéma des Stocks et Alertes
```plaintext
+--------------------+
| Machine à Café     |
+--------------------+
| - Stock de café    |
| - Stock d’eau      |
| - État électrique  |
|--------------------|
| Alerte si stock bas|
| Alerte si panne    |
+--------------------+
```
# La Machine à Café Magique

## Sommaire
1. C’est quoi ?  
2. Comment ça marche ?  
3. Comment elle gagne de l’argent ?  
4. Quels problèmes peuvent arriver ?  
5. Comment la rendre encore meilleure ?  
6. Des dessins pour mieux comprendre.

---

## 1. C’est quoi ?
C’est une machine qui prépare du café automatiquement. Tu choisis ton café, tu payes, et elle te le donne toute seule, sans l’aide de personne.

---

## 2. Comment ça marche ?

### Étape 1 : Payer
Tu choisis comment payer (par carte ou autre), et la machine vérifie si le paiement est bien passé. Si oui, tu peux passer à l’étape suivante.

### Étape 2 : Choisir ton café
Tu choisis ton type de café préféré (expresso, latte, etc.), et la machine le prépare spécialement pour toi.

### Étape 3 : Recevoir le café
Quand ton café est prêt, il sort par une petite porte, et tu peux le prendre.

---

## 3. Comment elle gagne de l’argent ?
- **En vendant du café** : Chaque fois qu’un café est vendu, la machine gagne de l’argent.
- **Avec des abonnements** : Les gens peuvent payer pour avoir du café illimité ou moins cher.
- **Avec de la pub** : La machine peut montrer des pubs sur son écran pendant qu’elle prépare ton café.

---

## 4. Quels problèmes peuvent arriver ?
- **Il n’y a plus de café, d’eau ou d’électricité.**  
- **La machine peut tomber en panne (problème dans ses pièces ou son logiciel).**  
- **Le paiement peut ne pas marcher (problème d’argent ou de connexion).**

---

## 5. Comment la rendre encore meilleure ?
- **Vérifier tout le temps les stocks de café et d’eau, et envoyer des alertes quand il en manque.**  
- **Faire des réparations et des mises à jour régulières pour qu’elle ne tombe pas en panne.**  
- **Rendre la machine facile à utiliser, avec un écran simple et clair.**  
- **Permettre aux gens de choisir exactement le café qu’ils aiment.**

---

## 6. Des dessins pour mieux comprendre

### Qui fait quoi ?
- **L’utilisateur (toi)** : Tu payes, tu choisis ton café, et tu le récupères.  
- **La machine** : Elle vérifie ton paiement, prépare ton café, et le donne.  
- **Le système de paiement** : Il regarde si le paiement a bien marché.

### Séquence (ordre des actions)
1. Tu payes.  
2. La machine vérifie le paiement.  
3. Tu choisis ton café.  
4. La machine prépare ton café.  
5. Tu reçois ton café.
