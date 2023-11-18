class UserDTO  {
    constructor(name, email, password){
        this.name = name,
        this.email = email,
        this.password = password
    }
}

const userDTO = new UserDTO()

module.exports = {userDTO};