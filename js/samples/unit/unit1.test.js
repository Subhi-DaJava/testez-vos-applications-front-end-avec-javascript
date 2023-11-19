import { sayHello } from "./unit1";

describe('SayHollo Unit tests Suites', () => {
    it('should be true', () => {
        expect(true).toBe(true);
    }),

    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe("Hello, World");
    }),

    it('should return "Hello, Subhi"', () => {
        expect(sayHello('Subhi')).toBe("Hello, Subhi");
    }),

    it('should return "Hello, Subhi"', () => {
        expect(sayHello('Subhi')).not.toBe("Hello, Subhi1");
    }),

    it('should return "Hello, Subhi"', () => {  
        expect(sayHello('Subhi')).toMatch("Subhi");
    })
    // it('should return "Hello, Subhi"', () => {
    //     expect(sayHello('Subhi')).not.toMatch("Subhi");
    // })
});