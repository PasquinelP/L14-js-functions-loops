/*
Oude stijl: loops

Loops kun je voor meer gebruiken dan itereren over een lijst van dingen. Maar we hebben het nu wel over die manier van loops gebruiken.

While loop:

    Maak en nieuwe map en nieuwe javascript file.
    Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
    Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.

For loop:

    Gebruik dezelfde array als startpunt.
    Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
    Gebruik de lengte van de array in je for loop: array.length
*/

// Maak array colors
let colors = ["yellow", "blue", "red", "orange"];

// while loop
i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++
}

// for loop
for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


/*
Nieuwe stijl: array methods

Omdat itereren over arrays iets is dat zo vaak gebeurt heeft de community die JavaScript verder ontwikkelt wat nieuwe handige dingen bedacht (eigenlijk afgekeken) om dit wat makkelijker, leesbaarder en minder foutgevoelig te maken. Deze nieuwe dingen zijn "array methods".
Elk array in JavaScript heeft de beschikking over deze ingebouwde functies die itereren over die array. De verschillende array methods doen verschillende dingen, maar ze itereren allemaal over een array.

forEach:

    Gebruik dezelfde kleuren-array als startpunt
    Gebruik de forEach array method, om alle items in je array te loggen naar de console.

*/

// forEach array method
colors.forEach(i => console.log(i));

/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
While loop: 5
For loop: 3

Hoeveel regels neemt mijn forEach method in beslag?
1

Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
Veel minder code, overzichtelijker, beter leesbaar, beter te begrijpen

Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
*/

let courses = {
  title: 'Front-end development',
  price: '2200',
  genre: 'Technology',
  school: 'Winc Academy',
  type: 'online'
};

Object.entries(courses).forEach(course => console.log(course));

