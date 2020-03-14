/**
 * Beispiel für eine Klasse die mehrere Instanzen haben kann.
 * Die Instanzierung erfolgt in main.js.
 * Achten Sie darauf, dass module1.js vor main.js geladen wird
 * sonst kommt ein Fehler.
 * Beachten sie, dass hier die Felder der Klasse erst im constructor
 * definiert werden.
 */
class Module1 {
    constructor()
    {
        this.private_value = 42;    
    }

    callMe(param) {
        this.private_value++;
        console.log('callMe() has been called', param, this.private_value);
    }
}