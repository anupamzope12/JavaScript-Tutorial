const form=document.querySelector('form')
// console.log(form)
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results');

    if(height === ' ' || height<0 || isNaN(height)){
        results.innerHTML='Please give a valid height ${height}';
    }else if(weight === ' ' || weight<0 || isNaN(weight)){
        results.innerHTML='Please give a valid weight ${weight}'
    }else {
        const bmi =(weight/((height*height)/10000)).toFixed(2);
        
        let string;
        if(bmi< 18.6){
             string="under Weight";
        }else if(bmi>=18.6 && bmi <24.9){
             string="under Weight";
        }else{
             string="under Weight";
        }

        results.innerHTML=`<span>${bmi}  ${string} </span>`
    }

    if(bmi< 18.6){
        window.alert("under Weight")
    }else if(bmi>=18.6 && bmi <24.9){
        window.alert(" Normal Range")
    }else{
        window.alert("overweight")
    }
})