let nameOne={
    firstName:"Akshy",
    lastName:"Saini",

}
let printFullName = function (homeTown,state){
    console.log(this.firstName + " "+ this.lastName +" " +  homeTown + " " + state);
}

let nameTwo={
    firstName:"Sachin",
    lastName:"Tendulkar "
}

// function borrowing
//with the help of .call we can borrow the one function from another funtions
printFullName.call(nameOne,"Dehradun","UttaraKhand");
//1st argument is this object
printFullName.apply(nameTwo,["Mumbai","Maharashtra"]);

//bind methods 

let printMyName=printFullName.bind(nameTwo,"Mumbai","Maharasshtra");
console.log("Sdsdsd") 
printMyName()




