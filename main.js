/**
 * Diese Datei wird als letztes geladen, deshalb stehen
 * hier alle anderen Klassen und Objekte zur Verfügung. In Java übernimmt der
 * Kompiler das Sortieren der Abhängigkeiten. In JavaScript tut es der 
 * Entwickler in der manifest.json
 */

//Neue Instanz der Klasse Module1 erzeugen
const module1 = new Module1();
module1.callMe('test1');

//Direkter Zugriff aus den Singleton Module2
Module2.callMe('test2');

//Überprüfen Sie ob Sie die Kosolenausgabe sehen können wenn dieser Code läuft.
//Wie das geht steht in der PDF