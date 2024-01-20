// let myname="hitesh     "
// let myChannel="chai         "

// console.log(myname.truelength);

// console.log(myname.trim().length)

let myHeros=['thor','spiderman']

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`)
}

// heroPower.hitesh()

Array.prototype.heyhitesh=function(){
    console.log(`hitesh say hello`)
}

// myHeros.hitesh()
// myHeros.heyhitesh()
// heroPower.heyhitesh()

//inheritance

const user={
    name:"chai",
    email:"chai@google.com"
}
const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__=user //old syntax 

//modern syntax

// __proto__ property.
let anotherusername="chaiAurCode                "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`true length is: ${this.trim().length}`)
}

anotherusername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()