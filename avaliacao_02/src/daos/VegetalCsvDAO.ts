import { Vegetal } from "../models/Vegetal";
import { VegetalDAO } from "./VegetalDAO";

export class VegetalCsvDAO extends VegetalDAO{
    constructor(){
        super("vegetables.csv");
        const arr = this._strContent.split('\n').slice(1, 23)
        arr.forEach((c) => {
            const firstValues = c.split(',')
            let secondValues: string
            const arr2: string[] = []

            for(let i = 3; i < firstValues.length; i++){
                arr2.push(firstValues[i])
            }
            let beneficios = arr2.toString()
            let beneficios_sem_aspas = beneficios.replace(/["]+/g, '')
            secondValues = beneficios_sem_aspas.replace(/[\r\n]/gm, '').trim()
            
            const vegetable: Vegetal = {
                id: Number(firstValues[0]),
                name: firstValues[1],
                imageURL: firstValues[2],
                benefits: secondValues
            }
            this._vegetais.push(vegetable)
        })
    }
}