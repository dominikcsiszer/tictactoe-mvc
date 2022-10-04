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
        if(this.#lepesSzam < 8 && this.vanNyertes()) {
            this.#lepesSzam++
            if (!(this.#lepesSzam % 2 == 0))
                kovetkezoJatekos = "X"
        } else 
            console.log("Vége a játéknak! De nincs nyertes")

        return kovetkezoJatekos
    }

    vanNyertes() {
        

        return true
    }

    getNyertes() {
        
    }
}

export default Model