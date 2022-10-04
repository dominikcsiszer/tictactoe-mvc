import Elem from '../views/elem.js'

class Controller {
    constructor() {
        // View példányosítása
        for (let i = 0; i < 9; i++) {
            new Elem(i, false)
        }

        $(window).on('clickElem', (e) => {
            console.log(e.detail)
        })
    }
}

export default Controller