import { burgersService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers');

        // NOTE: You can place multiple on the same this.router or separate them ex/
        // this.router
        // 	.get('', this.testBurgers)
        // 	.get('', this.getBurgers)

        this.router.get('/test', this.testBurgers)
        this.router.get('', this.getBurgers)
        this.router.post('', this.createBurger)
        this.router.delete('/:burgerId', this.deleteBurger)
    }

    testBurgers(request, response, next) {
        console.log('test burger working')
        response.send('🍔 I got burgers for ya 🍔')
    }



    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */

    async getBurgers(request, response, next) {
        try {
            const burgers = await burgersService.getBurgers()
            response.send(burgers) // then send that info back to the client
        }
        catch (error) {
            next(error)
            console.error(error)
        }
    }


    async createBurger(request, response, next) {
        try {
            const burgerData = request.body
            const burger = await burgersService.createBurger(burgerData)
            console.log('creating burger working')
            response.send(burger)
        }
        catch (error) {
            next(error)
        }
    }


    async deleteBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            await burgersService.deleteBurger(burgerId)
            console.log('Burger was delete')
            response.send(" Burger was deleted ")
        }
        catch (error) {
            next(error)
        }
    }
}