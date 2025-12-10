# 🌟 Athenea Solutions - Prova tècnica

Aquest repositori conté el codi d'una prova tècnica estructurada en dues parts: un backend basat en Laravel (PHP) i un frontend basat en Angular (Node.js/npm).

## 📝 Resum del Repte Enunciat

L'objectiu principal del repte era crear una aplicació web full stack per a la **gestió d'un llistat de pacients**.

### Funcionalitats Requerides
* **Llistat:** Mostrar els pacients en format de taula.
* **Perfil/Edició:** En clicar sobre un pacient, s'ha de mostrar el perfil amb les seves dades, que han de ser editables.
* **Creació:** Formulari per afegir un nou pacient.

### Camps dels Pacients
* Nom
* Cognoms
* Data de Naixement (`dataNaixement`)
* DNI
* Població
* CIP

---

## ⚠️ AVISOS IMPORTANTS (Mode d'Execució Manual)

* **Actualment, l'execució directa amb Docker Compose no funciona.**
* Per tant, caldrà executar els serveis de *frontend* i *backend* **manualment** (amb `php artisan serve` i `npm start`) un cop s'hagi fet la configuració inicial.

---
## 📸 Captures de Pantalla del Resultat

Així és com es veu la pàgina web un cop els dos serveis s'estan executant correctament:

### Primera Vista (Llistat de Pacients)

![Llistat de pacients a la taula i formulari de creació](assets/images/capture1.png)

### Segona Vista (Detalls del Pacient)

![Perfil d'un pacient mostrant la seva informació en formulari d'edició](assets/images/capture1.png)

---

## 🌐 Informació Addicional

Un cop aixecats els serveis manualment, estaran accessibles a les següents adreces:

| Servei | URL |
| :--- | :--- |
| **Backend (Laravel)** | `http://localhost:8000` |
| **Frontend (Angular)** | `http://localhost:4200` |
