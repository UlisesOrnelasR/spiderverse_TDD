const superHero = require('./../app/superHero')


describe("Unit test for superHero", () => {
    test('Case 1: Get a superHero', () => {
        //Aqui escribimos el código que queremos usar tal cual
        const spiderMan = new superHero('Spiderman', 'Tobey M', 37, 'Marvel')

        // Validamos que este codigo funcione de la manera esperada
        expect(spiderMan.name).toBe('Spiderman')
        expect(spiderMan.actor).toBe('Tobey M')
        expect(spiderMan.age).toBe(37)
        expect(spiderMan.comic).toBe('Marvel')
    });
  })