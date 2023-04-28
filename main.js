
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