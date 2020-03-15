/**
 * Beispiel für die klassische Art in JavaScript
 * Objekte mit Methoden zu programmieren.
 * Dies entspricht einem Singleton, da man es nicht
 * instanziieren muss.
 */
const Module2 = {
    private_value: 42,
    callMe: function(param) {
        this.private_value--;
        console.log('callMe() has been called', param, this.private_value);
    }
}

//In module1.js haben Sie gesehen, dass es einen Konstruktor gibt. Dort könnte
//natürlich noch mehr Logik eingebaut werden.
//Überlegen Sie wie man in module2.js initialen Code laufen lassen könnte.
//Sie brauchen dies z.B. wenn Sie beim Laden des AddOns bereits Dinge 
//vorbereiten wollen.