

//let pet1 = new pett("kiki", 5, "Female", "Hai", "442-222-9218");
//let pet2 = new pett("lili", 5, "Male", "Hai", "442-222-9218");

let petSalon = {
    name: "The Fashion Pet",
    address: {
        street: "30th st",
        number: "123",
        zip: "92104"
    },
    hours: {
        open: "09:00 a.m",
        close: "06:00 p.m"
    },
    pets :[]


}
function pett(namepet, agepet, genderpet, ownername, phonenumber) {

    this.petname = namepet;
    this.age = agepet;
    this.gender = genderpet;
    this.ownername = ownername;
    this.phone = phonenumber;

}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let gender = document.getElementById("gender");
let service = document.getElementById("service");
let ownername = document.getElementById("txtOwnerName");
let phone = document.getElementById("txtPhone");

function isvalid(apet) {
    //return false when the pet is not valid
    let valid = true;
    if (apet.petname.length == 0) {
        valid = false;
        console.log("xamloz")
    }
    if (apet.age.length == 0) {
        valid = false;
      
      
    }
    if (apet.ownername.length == 0) {
        valid = false;
     
    }
    if (apet.phone.length == 0) {
        valid = false;
     
    }
    return valid;

}

function register() {
    // Create the pet
    let thepet = new pett(inputName.value, inputAge.value, gender.value, ownername.value, phone.value)
    // push the pet into the array
    // clear the input
   
    if (isvalid(thepet) == true) {
        console.log(thepet);
        petSalon.pets.push(thepet);
        displaycard();
        displaypet();
    }

}



function clear() {
    inputName.value = "";
}
