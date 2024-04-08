import { response } from "express";
import BaseController from "../utils/BaseController.js";


export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router.get('/test', this.testBurgers)
        //...
    }

    testBurgers(request, response, next) {
        console.log('test');
        response.send('test success')
    }

}