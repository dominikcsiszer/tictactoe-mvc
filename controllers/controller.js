import Elem from '../views/elem.js'
import Model from '../models/model.js'

class Controller {
    constructor() {
        // Model példányosítása
        const jatekModel = new Model()

        // View példányosítása
        for (let i = 0; i < 9; i++) {
            new Elem(i, false)
        }

        $(window).on('clickElem', (e) => {
            console.log(e.detail)
            let kovetkezo = jatekModel.getKovetkezo()
            console.log(kovetkezo)
            
        })
    }
}

export default Controller