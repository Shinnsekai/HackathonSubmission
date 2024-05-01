const income = document.getElementById("income").value
const outputDisplay = document.getElementById("output")
const submitBtn = document.getElementById("subBtn")


//Incomplete code, ran out of time to finish 
submitBtn.onclick = function() {
    let saved = 0.5*income
    let remainder = income - saved

    let investStock = remainder*0.3
    let final = income - (saved + remainder + investStock)

    outputDisplay.textContent = `Save: ${saved} StockPurchase: ${investStock} Fixed Deposit: ${final}`
}


