# Group IP over Avian Carriers

## Exercise: Poke

### Readme index
- [Members](#members)
- [Lab Journal](#lab-journal)
- [Database structure overview](#database-structure-overview)

## Members
- s343884 ABELLONIO ANDREA
- s347640 KOSTADINOV ILIYAN
- s349496 DE BLASIO LORENZO

## Lab Journal

## Database Structure Overview

### TABLES

#### 1. SIZES

| Attribute      | Type     |
|----------------|----------|
| id             | INTEGER, PK |
| maxDayQty      | INTEGER  |
| maxProteins    | INTEGER  |
| maxIngredients | INTEGER  |
| price          | REAL     |
#### 2. INGREDIENTS

| Attribute | Type     |
|-----------|----------|
| id        | INTEGER, PK |
| name      | TEXT     |

#### 3. POKEBOWLS_INGREDIENTS

| Attribute      | Type                   |
|----------------|------------------------|
| idPokeBowls    | INTEGER, FK POKEBOWLS Table |
| idIngredients  | INTEGER, FK INGREDIENTS Table |

#### 4. PROTEINS

| Attribute | Type     |
|-----------|----------|
| id        | INTEGER, PK |
| name      | TEXT     |

#### 5. POKEBOWLS_PROTEINS

| Attribute      | Type                   |
|----------------|------------------------|
| idPokeBowls    | INTEGER, FK POKEBOWLS Table |
| idProteins     | INTEGER, FK PROTEINS Table |

#### 6. POKEBOWLS

| Attribute | Type                   |
|-----------|------------------------|
| id        | INTEGER, PK            |
| idSize    | INTEGER, FK SIZES Table|
| base      | TEXT                   |
| qty       | INTEGER                |
| idOrder   | INTEGER, FK ORDER Table|

#### 7. USER

| Attribute | Type     |
|-----------|----------|
| email     | TEXT, PK |
| name      | TEXT     |
| surname   | TEXT     |
| password  | TEXT     |

#### 8. ORDER

| Attribute  | Type     |
|------------|----------|
| id         | INTEGER, PK |
| totalPrice | REAL     |
| notes      | TEXT     |
| idUser     | TEXT, FK USER Table |


## Queries
### user
- getUserByEmail (email) ✅
- changePassword (email, password) ✅
- addUser (user) ✅
- deleteUser (email) ✅

### pokebowl
- listOrderPokeBowls (orderId) ✅
- addPokeBowl (pokeBowl) ✅
- deletePokeBowl (pokeBowlId) ✅

### ingredient
- listIngredients () ✅
- addIngredient (name) ✅
- deleteIngredient (id) ✅

### protein
- listProteins () ✅
- addProtein (name) ✅
- deleteProtein (id) ✅

### size
- listSizes () ✅
- getSizeById (id) ✅
- addSize (size) ✅
- deleteSize (id) ✅
- updateQty (id, maxQty) ✅

### order
- listUserOrders (orderId) ✅
- deleteOrder (orderId) ✅
- addOrder (order) ✅

