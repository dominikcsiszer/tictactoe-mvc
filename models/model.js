class Model {

    #lista = [
        "-", "-", "-",
        "-", "-", "-",
        "-", "-", "-"
    ]
    #lepesSzam
    constructor() {
        this.#lepesSzam = 0
    }

    getKovetkezo() {
        let kovetkezoJatekos = "X"
        if(this.#lepesSzam < 8) {
            this.#lepesSzam++
            if (!(this.#lepesSzam % 2 == 0))
                kovetkezoJatekos = "O"
        } else
            console.log("Vége a játéknak!")

        return kovetkezoJatekos
    }
}

export default Model