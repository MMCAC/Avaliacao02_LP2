import { Vegetal } from "../models/Vegetal";
import { VegetalDAO } from "./VegetalDAO";

export class VegetalJsonDAO extends VegetalDAO{
    constructor(){
        super("vegetables.json")
        const objs: Vegetal[] = JSON.parse(this._strContent)
        this._vegetais = objs
    }
}