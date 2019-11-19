class Contacto {
    constructor(name, id, companyName, isFavorite, smallImageURL, largeImageURL,
        emailAddress, birthdate, phone, address) {
        this.name = name
        this.id = id
        this.companyName = companyName
        this.isFavorite = isFavorite
        this.smallImageURL = smallImageURL
        this.largeImageURL = largeImageURL
        this.emailAddress = emailAddress
        this.birthdate = birthdate
        this.phone = phone
        this.address = address
    }
}

export default Contacto;