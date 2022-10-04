class Elem {
    constructor() {
        // Alap html előállítása
        const cella = '<div class="elem"><p></p></div>'
        $('.jatekter').append(cella)
        const elem = $('.jatekter:last-child')
    }
}

export default Elem