import { join } from "path";
import { Vegetal } from "../models/Vegetal";
import { readFileSync } from "fs";

export class VegetalDAO {
    protected _vegetais: Vegetal[]
    protected _strContent: string

    constructor(filename: string){
        const fileName = join(__dirname,'..','data', filename)
        this._strContent = readFileSync(fileName,'utf-8')
        this._vegetais = []
    }

    findVegetableById(id: number): Vegetal | undefined {
        const vegetable = this._vegetais.find((c) => c.id === id)

        return vegetable
    }
    
    findVegetableByName(name: string): Vegetal | undefined {
        const vegetable = this._vegetais.find((c) => c.name.toUpperCase() === name.toUpperCase())

        return vegetable
    }

    findVegetableByBenefits(benefits: string): Vegetal | undefined {
        const vegetable = this._vegetais.find((c) => c.benefits.toUpperCase() === benefits.toUpperCase())

        return vegetable
    }

}