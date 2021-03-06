const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Prueba FizzBuzz", () => {
    test("1 Ver si se agrega la propiedad trick", () => {
        const explorerP1 = { name: "ExplorerP1", score: 0 };
        const explorerP1Trick =
      FizzbuzzService.applyValidationInExplorer(explorerP1);

        expect(explorerP1Trick).toHaveProperty("trick");
    });
    test("2 Comprobando las propiedades del explorer", () => {
        const explorerP = { name: "ExplorerP", score: 7 };
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorerP);

        expect(explorerTrick).toEqual({
            name: "ExplorerP",
            score: 7,
            trick: 7,
        });
    });
    test("3 Trick = score si el resto entre 5 y 3 no es 0", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(explorerTrick.trick).toBe(1);
    });
    test("4 Trick = FIZZ (resto entre 3 = 0)", () => {
        const explorer3 = { name: "Explorer3", score: 3 };
        const explorer3Trick = FizzbuzzService.applyValidationInExplorer(explorer3);

        expect(explorer3Trick.trick).toBe("FIZZ");
    });
    test("5 Trick = BUZZ (resto entre 5 = 0)", () => {
        const explorer5 = { name: "Explorer5", score: 5 };
        const explorer5Trick = FizzbuzzService.applyValidationInExplorer(explorer5);

        expect(explorer5Trick.trick).toBe("BUZZ");
    });
    test("6 Trick FIZZBUZZ (resto entre 5 y 3 = 0", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        const explorer15Trick =
      FizzbuzzService.applyValidationInExplorer(explorer15);

        expect(explorer15Trick.trick).toBe("FIZZBUZZ");
    });
    test("7 Metodo nuevo (ApplyValidationInNumber)", () => {
        const number = 15;
        const validation = FizzbuzzService.applyValidationInNumber(number);

        expect(validation).toBe("Fizzbuzz");
    });
});
