/*
Multiplication tables

Iedereen kent ze nog wel: de tafel tabellen van de basischool. We gaan nu een script schrijven dat de tafel tabellen voor je print in de console. 
Schrijf een loop die "iterate" van 0 tot 10. 
Gebruik voor het eerste voorbeeld de tafel van 9. 
Console.log elke keer de uitkomst van de tafel van 9 naar de console. 

Resultaat: 
1 x 9 = 9 
2 x 9 = 18 
3 x 9 = 27 
etc.....

Bonus: gebruik een geneste for-loop, om alle tafels van 1 t/m 10 te printen naar de console. 
Het resultaat bestaat uit 100 regels code in je console. 
*/

for (table = 1; table <= 10; table++) {
  for (i = 1; i <= 10; i++) {
    outcome = i * table;
    console.log(i + " x " + table + " = " + outcome);
  }
}