let budgetArray = [];

function addUp(){
    let day= new Date()
    let date = day.toLocaleDateString()
    let time = day.toLocaleTimeString()
    let pName = productname.value;
    let quant = quantityown.value;
    let prices = priceName.value;
    
    let budgetObj = {pName,quant,prices,time,date};

    budgetArray.push(budgetObj)
    localStorage.setItem("budget", JSON.stringify(budgetArray))

    window.location.href = "card.html"
}

