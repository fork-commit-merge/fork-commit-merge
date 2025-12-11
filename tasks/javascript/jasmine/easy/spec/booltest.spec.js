// Jasmine - Easy

describe("Jasmine - Easy - Boolean Test", function () {
    // boolean
    it("should pass this test", function () {
        // TODO: Add `expect` and `toBe` statements to pass this test
        const isTrue = true;
        expect(isTrue).toBe(true);
    });

    // arithmatic
    it("should add 2 numbers", () => {
        const num1 = 20;
        const num2 = 20;
        expect(num1 + num2).toBe(40);
    });

    //logical
    it("should see which number is higher", () => {
        const num1 = 10;
        const num2 = 5;
        expect(num1 >= num2).toBe(true);
    })

});
