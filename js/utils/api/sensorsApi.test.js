import { data } from '../../../data/mock-homepage-data';
import { retrieveSensorsData } from './sensorsApi';

describe('sensors API Unit Test Suits', () => {
    it('should return the mocked data', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })
    it('should return the real dev date ', () => {
        process.env.NODE_ENV = 'dev';
        expect(retrieveSensorsData).toBeDefined();
    })
    it('should return the real prod data', () => {
        process.env.NODE_ENV = 'prod';
        expect(retrieveSensorsData).toBeDefined();
    })
});