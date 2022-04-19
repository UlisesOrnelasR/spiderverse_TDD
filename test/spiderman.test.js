const superHero = require('./../app/superHero')


describe("Unit test for superHero", () => {
    test('Case 1: Get a superHero', () => {
        //Aqui escribimos el código que queremos usar tal cual
        const spiderMan = new superHero('Spiderman', 'Tobey M', 37, 'Marvel')

        // Validamos que este codigo funcione de la manera esperada
        expect(spiderMan.name).toBe('Spiderman')
        expect(spiderMan.actor).toBe('Tobey M')
        expect(spiderMan.age).toBe(37)
        expect(spiderMan.studio).toBe('Marvel')
    });
    //Queremos usar un método que nos regrese la siguiente información: nombre y estudio al que pertenece el spiderman instanciado.
    test('Case 2: Get info spiderman', () => {
        //Aqui escribimos el código que queremos usar tal cual
        const spiderMan = new superHero('Spiderman', 'Tobey M', 37, 'Marvel')

        // Validamos que este codigo funcione de la manera esperada
        expect(spiderMan.getInfo()).toBe('Hola soy Tobey M y soy de los studios "Marvel"')
        
    });
  })