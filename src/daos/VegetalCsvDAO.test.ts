import { VegetalCsvDAO } from "./VegetalCsvDAO"

let vegetalDAO: VegetalCsvDAO

describe('Tests over VegetalCsv', () => {
    beforeAll(() => {
        vegetalDAO = new VegetalCsvDAO
    })

    it('should retrive a vegetable by its id', () => {
        const vegetal = vegetalDAO.findVegetableById(2)
        expect(vegetal?.name).toBe('Abobrinha')
        expect(vegetal?.imageURL).toBe('https://imageswscdn.wslojas.com.br/files/9268/MED_anastacia-1000-sementes-de-abobrinha-italia-hibrida-621532.png')
        expect(vegetal?.benefits).toBe('Ajuda emagrecer, Previne a prisão de ventre, Ajuda no controle do diabetes, Facilita a digestão')
    })

    it('should retrieve a vegetable by its name', () => {
        const vegetal = vegetalDAO.findVegetableByName('Abobrinha')
        expect(vegetal?.id).toBe(2),
        expect(vegetal?.imageURL).toBe('https://imageswscdn.wslojas.com.br/files/9268/MED_anastacia-1000-sementes-de-abobrinha-italia-hibrida-621532.png')
        expect(vegetal?.benefits).toBe('Ajuda emagrecer, Previne a prisão de ventre, Ajuda no controle do diabetes, Facilita a digestão')
    })
    
    it('should retrive a vegetable by its benefits', () => {
        const vegetal = vegetalDAO.findVegetableByBenefits('Ajuda emagrecer, Previne a prisão de ventre, Ajuda no controle do diabetes, Facilita a digestão')
        expect(vegetal?.id).toBe(2)
        expect(vegetal?.name).toBe('Abobrinha')
        expect(vegetal?.imageURL).toBe('https://imageswscdn.wslojas.com.br/files/9268/MED_anastacia-1000-sementes-de-abobrinha-italia-hibrida-621532.png')
    })
})