# Group IP over Avian Carriers

## Members
- s343884 ABELLONIO ANDREA
- s347640 KOSTADINOV ILIYAN
- s300122 DE BLASIO LORENZO

# Exercise Poke

# Lab Journal

Database Structure Overview

Table: SIZES
Attributes:
-   id (INTEGER, PK)
-   maxDayQty (INTEGER)
-   maxProteins (INTEGER)
-   maxIngredients (INTEGER)
-   price (REAL)

Table: INGREDIENTS
Attributes:
-   id (INTEGER, PK)
-   name (TEXT)

Table: POKEBOWLS_INGREDIENTS
Attributes:
-   idPokeBowls (INTEGER, FK POKEBOWLS Table)
-   idIngredients (INTEGER, FK INGREDIENTS table)

Table: PROTEINS
Attributes:
-   id (INTEGER, PK)
-   name (TEXT)

Table: POKEBOWLS_PROTEINS
Attributes:
-   idPokeBowls (INTEGER, FK POKEBOWLS Table)
-   idProteins (INTEGER, FK PROTEINS Table)

Table: POKEBOWLS
Attributes:
-   id (INTEGER, PK)
-   idSize (INTEGER, FK SIZES Table)
-   base (TEXT)
-   qty (INTEGER)
-   idOrder (INTEGER, FK ORDER Table)

Table: USER
Attributes:
-   email (TEXT, PK)
-   name (TEXT)
-   surname (TEXT)
-   password (TEXT)

Table: ORDER
Attributes:
-   id (INTEGER, PK)
-   totalPrice (REAL)
-   notes (TEXT)
-   idUser (TEXT, FK USER Table) 

(you may update this file to keep track of the progress of your group work, throughout the weeks)
