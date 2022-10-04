# Tic-Tac-Toe MVC

## VIEW
### Elem osztály
- Adattagok
- - Érték: x, o
- - div - this.divElem
- - p - this.pElem
- - Állapot - volt -e már kattintva

- Kattintás eseménykezelő
- - Új eseménykezelő meghívását - kattintastrigger

- Tagfüggvények
- - setErtek: Elem értékének változtatása

## Controller
- Feladatai:
- - Példányosítja az Elem osztályt 9x
- - Példányosítja a Model osztályt
- - Le tudja kérni a modeltől a következő játékos nevét, jelét
- - Le tudja kérni a tomb állapotát
- - Le tudja kérni van-e győzelem, és ha igen, akkor ki győzött

## Model
- Feladata:
- - Reprezentálja a programunkat
- - tomb, lista adatszerkezet [-, -, -, -, -, -, -, -, -]
- - Ellenőrzés: Ki győzőtt, ki következi...

- Getterek:
- - lekéri a model állapotát, tömbööt
- - visszaadja a következő játékost
- - visszaadja a nyertest

> Teszt
>> Teszt