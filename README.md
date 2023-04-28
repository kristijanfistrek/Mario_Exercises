# Mario Instrukcije

## **Sadržaj**

Za lakšu navigaciju sadržajem.

**********************

- [Progres](#progres)
- [1. Deklaracija i Inicijalizacija](#deklaracija-inicijalizacija)
- [2. Tipovi podataka](#tipovi-podataka)
- [3. Tipovi varijabli i blokovi koda](#varijable-blokovi)

<a name="progres"></a>
## **Progres** 

Progres ćemo mjeriti tablicom i zapisivati gdje smo stali zadnji put na predavanju.
Također, u tablicu ćemo zapisivati broj predavanja u jednom mjesecu.

Uz to, zapisivati ćemo kvalitetu znanja na kraju svakog odrađenog poglavlja, gdje ćemo imati mali test kojim ćemo samo ležerno i ukratko provjeriti znanje.

******************************************************

| Datum         | Broj predavanja | Gdje smo stali   |
| ------------- |:--------------  | ----------------:|
| Travanj, 2023 | 1               | Varijable/blokovi|

******

<a name="deklaracija-inicijalizacija"></a>
## **1. Deklaracija vs Inicijalizacija**

U programiranju ćemo općenito manipulirati s podacima. Pod manipulacijom mislim na spremanje, brisanje, ažuriranje i kreiranje. -> CRUD = Create, Read, Update i Delete.
Ono što ćemo koristiti za spremanje podataka, zasad ćemo nazivati varijable.
Varijable su neke kutije u koje spremamo bilo kakve vrijednosti.

Za spremanje vrijednosti u naše kutije tzv. varijable, moramo to napraviti u dva koraka.

**1. Korak**: varijablu, odnosno našu kutiju prvo moramo kreirati -> deklarirati.
Deklaracija je bitna, da mi možemo računalu ili nekom drugom sistemu, reći da za spremanje tog podatka, mora odvojiti određenu količinu memorije. 

```javascript
var a;
```

Varijablu deklariramo, zasad, na ovaj način. Ona se sastoji od deklaracijskog dijela, odnosno ključne riječi var i njenog imena. Bazno stanje bilo kakve varijable koja nema vrijednost je undefined, sve dok se njoj ne dodijeli vrijednost.

Ako koristimo varijablu a, prije njene inicijalizacije, dobiti ćemo upozorenje undefined. Pošto njena vrijednost, nije definirana.

> Način na koji ćemo ispisati varijable i provjeravanje stanje naše JavaScript skripte, je uz pomoć console log naredbe. 

```javascript
console.log(a);
```

**2. Korak**:  varijablu, prije korištenja, potrebno je inicijalizirati na njenu vrijednost. To je bitno napraviti ikakve akcije s tom varijablom.


Ovo je zove inicijalizacija, ili ti dodijeljivanje vrijednosti određenoj varijabli. Inicijalizacija se radi tako da se desno od imena varijable, s operatorom jednako (=) dodijeli određena vrijednost. 

> Bitno je za napomenuti da će slijedeća linija koda jedino biti validna ako smo varijablu a prethodno deklarirati negdje u našem kodu. 

```javascript
a = 2;
```
Ako sada hoćemo koristiti varijablu a, dobiti ćemo vrijednost 2 u logu, pošto smo u liniji 17 joj dodijelili tu vrijednost.

```javascript
console.log(a);
```

Ne mora nužno ići deklaracija pa inicijalizacija, to možemo odraditi u jednoj liniji, kao što je ovdje prikazano.

```javascript
var b = 5;
```
