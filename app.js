const billAmount = document.querySelector("#bill-amount");
const cashGiven =  document.querySelector("#cash-amount");
const checkbutton = document.querySelector("#check-btn");
const msg = document.querySelector("#error-msg");
const availableNotes =[2000,500,100,20,10,5,1];
const notes = document.querySelectorAll(".notes");

checkbutton.addEventListener("click", function checkBillandCashAmount(){
    let billAmountVal =parseFloat(billAmount.value)
    let cashGivenVal =parseFloat(cashGiven.value)
    if(billAmountVal>0){
        if(cashGivenVal >= billAmountVal){
            const amountToReturned = cashGivenVal - billAmountVal;
            console.log(amountToReturned);
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
    amountToReturned = amountToReturned % availableNotes[i];
    notes[i].innerText =  noOFNotes;
}
}


