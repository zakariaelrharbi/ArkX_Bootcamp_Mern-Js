let myInfo = {
    firstName : "Zakaria",
    lastName : "ElRharbi",
    Age : 24,
    fullName: function fullName() {
        console.log(this.firstName+ " "+this.lastName);
    },
};
myInfo.fullName();