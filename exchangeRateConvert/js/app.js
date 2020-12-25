let c1  = document.getElementById('currency1') ; 
let c2  = document.getElementById('currency2') ; 
let curr1Amount  = document.getElementById('curr1Amount') ; 
let curr2Amount  = document.getElementById('curr2Amount') ; 
let currValue  = document.getElementById('currValue') ; 
let swap  = document.getElementById('swap') ; 
let rate = document.getElementById('rate') ; 
let store  = [] ;   


// Fetch exchange Rate From API 
async function getCurrency()  {
    let curr1 = c1.value  ; 
    let curr2 = c2.value ; 
    let apiResponse = await fetch(`https://v6.exchangerate-api.com/v6/42f644130385629c5a1b49c1/latest/${curr1}`) ; 
    let finalResult =  await apiResponse.json() ; 
     
    store  = finalResult.conversion_rates ; 
    
    let theRate = store[curr2] ; 
    rate.innerHTML = `1 <span class = "color-mine">${curr1}</span> = ${theRate} <span class = "color-mine">${curr2}</span>` ; 
    curr2Amount.value  = (curr1Amount.value  * theRate).toFixed(2) ;  
}


// Add Events Listener 
c1.addEventListener('change' ,  () => {
    setTimeout( getCurrency , 1000) ; 
    load () ; 
}) ;
curr1Amount.addEventListener('input' , () => {
    setTimeout( getCurrency , 1000) ; 
    load () ; 
});
c2.addEventListener('change' ,  ()=> {
    setTimeout( getCurrency , 1000) ; 
    load () ; 
}) ;
curr2Amount.addEventListener('input' , ()=>{
    setTimeout( getCurrency , 1000) ; 
    load () ; 
});

swap.addEventListener('click' , () => {
[c1.value  ,c2.value ] = [c2.value  ,c1.value]  ;
setTimeout( getCurrency , 1000) ; 
load () ; 

});
getCurrency() ; 
function load ()  {
    let load  = document.getElementById('load') ; 
    load.style.display = "flex" ; 
    setTimeout(hideLoad , 1000)

}
function hideLoad() {
    let load  = document.getElementById('load') ; 
    load.style.display = "none" ; 
}