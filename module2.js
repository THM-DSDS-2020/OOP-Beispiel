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
