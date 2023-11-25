import { isInTestEnv } from "./index.js";
describe('isInTestEnv Unit Test Suites', () => {
    it('should return be in test env', () => {
        expect(isInTestEnv()).toBe(true);
    })

    it('should not be in test env', () => {
        process.env.NODE_ENV = 'dev'; // défini par NodeJS
        expect(isInTestEnv()).toBe(false);
        expect(isInTestEnv()).not.toBe(true);
    })

    it('should not be in test prod', () => {
        process.env.NODE_ENV = 'prod'; // défini par NodeJS
        expect(isInTestEnv()).not.toBe(true);
    })

    it('should not be in test undefined', () => {
        process.env.NODE_ENV = undefined; // défini par NodeJS
        expect(isInTestEnv()).not.toBe(true);
    })

    it('should not be in test null', () => {
        process.env.NODE_ENV = null; // défini par NodeJS
        expect(isInTestEnv()).not.toBe(true);
    })
    
    it('should not be in test test', () => {
        process.env.NODE_ENV = 'test'; // défini par NodeJS
        expect(isInTestEnv()).toBe(true);
    })


})