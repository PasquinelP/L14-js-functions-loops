/*
Guess the number - game

De computer neemt een (semi)willekeurig nummer. De gebruiker probeert het nummer te raden.

Requirements 

Aan deze eisen moet jouw project voldoen:

    Als gebruiker wil ik een initieel bericht zien in die de gebruiker begroet en vraagt om zijn of haar naam. "Welkom! Wat is je naam?"

    Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken.

    Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]"

    Als gebruiker wil ik na de begroeting met mijn naam gevraagd worden om een nieuwe input met een cijfer. e.g: "Voer een nummer in van 0 tot 25 om te beginnen met raden..."

    Als spelmaker wil ik dat de gebruiker wel een reële kans heeft om te winnen. Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()

    Als gebruiker wil ik een nummer in kunnen voeren en vervolgens op enter klikken.

    Als gebruiker wil ik een bericht zien als ik het nummer verkeerd heb geraden e.g. "Dat is niet correct" . Daarna wil ik gevraagd worden om opnieuw te raden.

    Als gebruiker wil ik een bericht ontvangen als ik het nummer goed heb geraden. e.g: "Gefeliciteerd je hebt gewonnen". Het spel is nu af.

    Als gebruiker wil ik een bericht zien als het spel af is. "e.g: Dag [naam]. Tot de volgende keer"

Bonus 

    Een gebruiker krijgt maximaal 5 pogingen om het getal te raden.
        Als gebruiker wil ik na elke poging een nieuw bericht zien die mij verteld hoeveel pogingen ik nog over heb.
        Als gebruiker wil ik een bericht zien als ik helemaal geen pogingen meer over heb. Het spel is nu af.
    Zelf de range bepalen waaruit de gebruiker gaat raden.
        Als gebruiker wil ik bij de start van het spel gevraagd worden wat het kleinste en het grootste nummer is dat ik wil raden.
        Als gebruiker speel ik nu het spel met de nummer-range die ik heb aangegeven bij de start van het spel.

*/

/*
- vraag naam -> variabele
- naam invullen -> prompt
- welkom {naam} -> alert
- vraag nummer -> prompt en variabele
- zet nummer om van string naar nummer -> functie?
- script genereert zelf een nummer -> functie en variabele
- controleer of nummer gebruiker en nummer script gelijk zijn -> if/else? forEach?
  - zo ja, geef bericht dat nummer ok is
  - geef bericht dat spel is afgelopen
  - zo nee, geef aan dat nummer niet correct is
  - en laat gebruiker opnieuw een nummer invoeren
- max 5 pogingen -> iteration
*/


// Begroet speler en vraag om naam
const playerName = prompt("Welkom! Wat is je naam?");

// Toon begroeting met ingevulde naam van speler
if (playerName != null) {
  alert("Hallo " + playerName);
}

// Laat speler zelf een nummer range kiezen
// vraag om laagste en hoogste getal waar de speler tussen wil spelen
// en zorg dat input string wordt omgezet naar nummer met parseInt
// controleer of de invoer niet leeg is of op annuleer is geklikt
// beide getallen moeten zijn ingevuld
const playerRange = function () {
  playerNumberMin = parseInt(prompt("Wat is het kleinste getal dat je wilt raden?"));
  playerNumberMax = parseInt(prompt("Wat is het grootste getal dat je wilt raden?"));

  if (isNaN(playerNumberMin) || isNaN(playerNumberMax)) {
    alert("Het laagste en/of het hoogste getal is/zijn niet ingevuld. Probeer het opnieuw.");
    playerRange();
  } else {
    alert("Je speelt nu door te kiezen tussen een nummer van " + playerNumberMin + " en " + playerNumberMax);
  }
};

playerRange();

console.log("Kleinste nummer: " + playerNumberMin);
console.log("Grootste nummer: " + playerNumberMax);

// Laat speler een nummer kiezen
// en zorg dat input string wordt omgezet naar nummer met parseInt
// controleer of de speler een geldig getal heeft ingevuld van door hemzelf gekozen minimum en maximum
// is dit het geval, sla het nummer op in playerNumber
// is dit niet het geval, laat een bericht zien
// en laat speler opnieuw nummer invoeren
const playerNumberInput = function() {
  playerNumber = parseInt(prompt("Kies een getal van " + playerNumberMin + " tot en met " + playerNumberMax + " om te beginnen met raden..."));
  if (playerNumber >= playerNumberMin && playerNumber <= playerNumberMax) {
    console.log("Player number is: " + playerNumber);
    return playerNumber;
  } else {
    alert("Het getal is niet geldig. Kies een getal van " + playerNumberMin + " tot en met " + playerNumberMax);
    playerNumberInput();
  }
};

// genereer een willekeurig getal in de door de speler aangegeven te spelen range
const pickRandomNumber = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log("Random nummer is: " + randomNumber) 
};

// indien het verkeerde getal is geraden
// speel het opnieuw
const playNumbers = function () {
  pickRandomNumber(playerNumberMin, playerNumberMax);
  playerNumberInput();
  checkWinner();
};

// controleer of nummer van speler en random nummer gelijk zijn
// indien ja, feliciteer de speler en spel stopt
// indien nee, geef bericht niet correct en probeer opnieuw
let winner = false;
const checkWinner = function(){
  if (playerNumber === randomNumber) {
    winner = true;
    alert("Gefeliciteerd! Je hebt gewonnen! Het spel is nu afgelopen.");
    if (playerName === null) {
      alert("Bedankt voor het spelen. Tot de volgende keer!");
    } else {
      alert("Bedankt voor het spelen. Tot ziens " + playerName + ". Tot de volgende keer!");
    }
    return winner;
  } else {
    alert("Helaas, dat is niet correct. Probeer het nog een keer!");
    }
};

// speler krijgt maximaal 5 pogingen
// laat zienhoeveel pogingen nog over zijn
// en geef bericht als er geen pogingen meer over zijn: spel is afgelopen
const run = function () {
  for (i = 5; i <= 5; i--) {
    if (i > 0 && winner === false) {
      alert("Je hebt nog " + i + " pogingen over");
      playNumbers();
    } else if (winner) {
    return;
    } else {
      if (playerName === null) {
        alert("Helaas, je hebt geen pogingen meer over ;-). Het spel is nu afgelopen.");
      } else {
        alert("Helaas, je hebt geen pogingen meer over ;-). Het spel is nu afgelopen. Tot ziens " + playerName);
      }
      return;
    }
  }
};

run();
