// ********************************
// 1. Deklaracije i inicijalizacija
// ********************************

// U programiranju ćemo općenito manipulirati s podacima. Pod manipulacijom mislim na spremanje, brisanje, ažuriranje i kreiranje. -> CRUD = Create, Read, Update i Delete.
// Ono što ćemo koristiti za spremanje podataka, zasad ćemo nazivati varijable.
// Varijable su neke kutije u koje spremamo bilo kakve vrijednosti.

// Za spremanje vrijednosti u naše kutije tzv. varijable, moramo to napraviti u dva koraka.
    // a) varijablu, odnosno našu kutiju prvo moramo kreirati -> deklarirati.
    // Deklaracija je bitna, da mi možemo računalu ili nekom drugom sistemu, reći da za spremanje tog podatka, mora odvojiti određenu količinu memorije. 

var a; // -> varijablu deklariramo, zasad, na ovaj način. Ona se sastoji od deklaracijskog dijela, odnosno ključne riječi var i njenog imena. Bazno stanje bilo kakve varijable koja nema vrijednost je undefined, sve dok se njoj ne dodijeli vrijednost.

var b = 5; // -> Ne mora nužno ići deklaracija pa inicijalizacija, to možemo odraditi u jednoj liniji, kao što je ovdje prikazano.

console.log(a); // -> Ako koristimo varijablu a, prije njene inicijalizacije, dobiti ćemo upozorenje undefined. Pošto njena vrijednost, nije definirana.

    // b) varijablu, prije korištenja, potrebno je inicijalizirati na njenu vrijednost. To je bitno napraviti ikakve akcije s tom varijablom.

a = 2; // -> Ovo je zove inicijalizacija, ili ti dodijeljivanje vrijednosti određenoj varijabli. Inicijalizacija se radi tako da se desno od imena varijable, s operatorom jednako (=) dodijeli određena vrijednost.

console.log(a); // -> Ako sada hoćemo koristiti varijablu a, dobiti ćemo vrijednost 2 u logu, pošto smo u liniji 17 joj dodijelili tu vrijednost.

// DISCLAIME: BITNO JE INICIJALIZIRATI VARIJABLU NA ODREĐENU VRIJEDNOST PRIJE NJENOG KORIŠTENJA.

// ******************
// 2. Tipovi podataka
// ******************

// Podaci u programerskom svijetu, a i u stvarnom svijetu, postoje u više vrste.
// Tri glave kategorije s kojima ćemo mi zasad raditi su: string, boolean i number.

var ime = "Mario"; // -> string vrijednost je specifična po tome što se dodjeljuje nekoj varijabli pomoću navodnih znakova. 
var age = 22;
var isOld = false; // -> imena boolean varijabli se općenito pišu kao pitanja.

// **********************************
// 3. Tipovi varijabli i blokovi koda
// **********************************

    // Tipovi varijabli

// U JS-u ćemo se zasad raditi s 3 osnovne kategorije varijabli.
// One su: var, let i const.

var clientName = "Mario";

    // Blokovi koda

// Blokovi koda su specifični po tome da se odvajaju sa {} zagradama.

{
    let clientName = "Mario_2";
    {
        {
            console.log("Drugo ime: ", clientName);
        }
    }
}