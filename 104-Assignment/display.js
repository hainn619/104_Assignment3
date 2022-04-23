function displaypet() {
    let petdiv = document.getElementById("pets");
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        let li = document.createElement("li");
       
    }
}
function displaycard() {
    let tmp = "";
    if(petSalon.pets.length>0){
        console.log("good");
        for (let i = 0; i < petSalon.pets.length; i++) {
            let pet = petSalon.pets[i];
            tmp = `<div class="pet" <h4> ${pet.name}</h4>
            <lable> ${pet.age}</lable></div>`;
    
        }

    }
    else console.log("suck");
    
}