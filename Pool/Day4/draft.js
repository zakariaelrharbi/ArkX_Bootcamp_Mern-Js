let Me = {
    fisrtname : "Zakaria",
    lastname : "Elrharbi",
    age : 24,
    hobbies : ["gaming", "reading", "coding"],
    fullname: function fullname() {
        console.log(this.fisrtname+ " "+this.lastname);
    }
};
Me.fullname();