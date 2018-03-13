function sellasoap() {
    if (soapInventory >= 1) {
        money = +money + +soapSellPrice;
        document.getElementById("money").innerHTML = "Money = $" + money;
        soapInventory--;
        document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory + " Inventory";
        if (money >= 15 && tutorial3showing === 1) {
            tutorial4appear();
            tutorial3showing = 0;
        }
    }
}

function sellSoapChance() {
    if (soapSellPrice > 1) {
        soapSellChance = ((soapSellPrice - 1) * 100) / soapSellChanceModifier;
    } else {
        soapSellChance = 1;
    }
    if (Math.floor((Math.random() * soapSellChance) + 1) === 1) {
        sellasoap();
    }
}

function startSelling () {
	document.getElementById("sellingmenubackground").style.display = "block";
	document.getElementById("sellingmenuarea").style.display = "block";
	document.getElementById("sellchance").innerHTML = "Chance of success: " + (100 / soapSellChance).toFixed(1) + "%";
	document.getElementById("sellprice").innerHTML = "Selling for: $" + soapSellPrice.toFixed(2);
	sellingEff = sellingEffArchive;
	setTimeout(sellingLoop, 500);
}

function lowerSoapPrice () {
	soapSellPrice = soapSellPrice - 0.05;
	document.getElementById("sellprice").innerHTML = "Selling for: $" + soapSellPrice.toFixed(2);
	document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice.toFixed(2);
	calcChance();
}

function raiseSoapPrice () {
	soapSellPrice = soapSellPrice + 0.05;
	document.getElementById("sellprice").innerHTML = "Selling for: $" + soapSellPrice.toFixed(2);
	document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice.toFixed(2);
	calcChance();
}

function calcChance () {
	if (soapSellPrice > 1) {
        soapSellChance = ((soapSellPrice - 1) * 100);
    } else {
        soapSellChance = 1;
    }
	document.getElementById("sellchance").innerHTML = "Chance of success: " + (100 / soapSellChance).toFixed(1) + "%";
}

function sellingLoop () {
	sellSoapChance();
	sellerInterval = setTimeout(sellingLoop, sellingEff);
}

function stopSelling () {
	document.getElementById("sellingmenubackground").style.display = "none";
	document.getElementById("sellingmenuarea").style.display = "none";
	sellingEffArchive = sellingEff;
	clearInterval(sellerInterval);
}
