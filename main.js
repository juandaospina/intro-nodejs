const { loadingDataForm, UserInfo, myWebAddress } = require("./modules/myModules");
const state = require("./modules/myModules");

const newUser = new UserInfo("Juan Ospina");

const dataUserInfo = () => {
    return setTimeout(() => {
        console.log(newUser.getName());
    }, 3000)
}

console.log("Hello World");
