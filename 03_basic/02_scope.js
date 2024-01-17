let a=65;
if(true){
    let a=12;
    const b=20;
    var c=54;
    // console.log("inner  ", a)

}

// for(int i=0 ;i<Array.length;i++){
//     const element=array[i];
// }

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username="hitesh"

    function two() {
        const website="youtube"
        console.log(username)
        
    }
    // console.log(website);
    // two()
}
// two()
one()

if (true) {
    const username="hitesh"
    if(username=="hitesh")
    {
        const website=" youtube"
        // console.log(username+website)
    }   
    // console.log(website)
}
// console.log(username)


/* =========================Intresting==================  */

console.log(addone(5))

function addone(num){
    return num+1
}

// addTwo(5) // error

const addTwo = function(num){
    return num+2
}

// addTwo(5)

