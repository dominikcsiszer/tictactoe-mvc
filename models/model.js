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
        let kovetkezoJatekos = "O"
        if(this.#lepesSzam < 8) {
            this.#lepesSzam++
            if (!(this.#lepesSzam % 2 == 0))
                kovetkezoJatekos = "X"
        } else
            console.log("Vége a játéknak!")

        return kovetkezoJatekos
    }
}

export default Model