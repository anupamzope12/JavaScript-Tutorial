// we cannot call a local scope variable in global scop but we can call global scope in local scope

function subscibe(){
    var name ="RoadSide Coder";
    // inner scope
    function displayName(){ //display name is closure
        alert(name);
    }
    //inner scope
    displayName();
}
subscibe();