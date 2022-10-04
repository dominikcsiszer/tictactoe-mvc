import Elem from '../views/elem.js'
import Model from '../models/model.js'

class Controller {
    #elemLista = []
    constructor() {
        // Model példányosítása
        const jatekModel = new Model()

        // View példányosítása
        for (let i = 0; i < 9; i++) {
            const elem = new Elem(i, false)
            this.#elemLista.push(elem)
        }

        $(window).on('clickElem', (e) => {
            if(!this.#elemLista[e.detail].getAllapot()) {
                let kovetkezo = jatekModel.getKovetkezo()
                
                this.#elemLista[e.detail].setErtek(kovetkezo)
                this.#elemLista[e.detail].setAllapot()
            }
        })
    }
}

export default Controller