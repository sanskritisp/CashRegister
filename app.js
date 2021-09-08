const billAmount = document.querySelector("#bill-amount");
const cashgGiven =  document.querySelector("#cash-amount");
const checkbutton = document.querySelector("#check-btn");
const msg = document.querySelector("#error-msg");

checkbutton.addEventListener("click", function checkBillandCashAmount(){
    if(billAmount.value>0){
        if(billAmount.value<= cashgGiven.value){
            const amountToReturned = cashgGiven.value - billAmount.value;
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
function calculateChange()
{

}


