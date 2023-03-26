const loadingDataForm = () => {
    setTimeout(() => {
        console.log("Testing a modules with CommonJs")
    })
}

class UserInfo {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return `The name for user is ${this.name}`;
    }
}

const myWebAddress = "jospina.com"

exports.status = () => true

module.exports = {
    loadingDataForm,
    UserInfo,
    myWebAddress
}

console.log(module)