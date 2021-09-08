const billAmount = document.querySelector("#bill-amount");
const cashgGiven =  document.querySelector("#cash-amount");
const checkbutton = document.querySelector("#check-btn");
const msg = document.querySelector("#error-msg");
const availableNotes =[2000,500,100,20,10,5,1];
const notes = document.querySelectorAll(".notes");

checkbutton.addEventListener("click", function checkBillandCashAmount(){
    if(billAmount.value>0){
        if(cashgGiven.value <= billAmount.value){
            const amountToReturned = cashgGiven.value - billAmount.value;
            // console.log(amountToReturned);
            calculateChange(amountToReturned);

        }
        else{
            msg.innerHTML  = "cash given should be at least equal to the bill amount";
        }
}
    else{
        msg.innerHTML= "The bill amount must be greator than zero.";
    }
});
function calculateChange(amountToReturned)
{
for(let i =0;i<availableNotes.length; i++){
    const noOFNotes = Math.trunc(amountToReturned/availableNotes[i]);
    amountToReturned = amountToReturned% availableNotes[i];
    noOFNotes[i].innerText = notes;
}
}


