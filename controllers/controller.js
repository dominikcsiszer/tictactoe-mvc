import Elem from '../views/elem.js'

class Controller {
    constructor() {
        // View példányosítása
        for (let i = 0; i < 9; i++) {
            new Elem()
        }
    }
}

export default Controller