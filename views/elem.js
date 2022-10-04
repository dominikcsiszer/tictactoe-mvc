class Elem {

    #allapot
    #index
    constructor(index, allapot) {
        // Alap html előállítása
        const cella = '<div class="elem"><p></p></div>'
        $('.jatekter').append(cella)
        this.divElem = $('.jatekter').children('div:last-child')
        this.pElem = this.divElem.children('p')

        this.#allapot = allapot
        this.#index = index

        this.divElem.on('click', () => {
            // Teszt a setErteket Controller fogja megmondani, model dönti el
            // this.setErtek("X")
            this.kattintas()
        })
    }

    setErtek(jel) {
        this.pElem.html(jel)
    }
    setAllapot() {
        if(!this.#allapot)
            this.#allapot = !this.#allapot
    }
    getAllapot() {
        return this.#allapot
    }

    kattintas() {
        let clickEvent = new CustomEvent("clickElem",{detail:this.#index})
        window.dispatchEvent(clickEvent)
    }
}

export default Elem