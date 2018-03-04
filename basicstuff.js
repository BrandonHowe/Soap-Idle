let money = 10;
let soapBuyPrice = 1;
let soapSellPrice = 1;
let soapSellChance = 0;
let buySoapPriceModifier = 1;
let soapSellChanceModifier = 1;
let soapResoapchModifier = 1;
let soapInventory = 0;
let soapMaxInventory = 50;
let soapQuality = ["terrible", "bad", "mediocre", "so-so", "good", "amazing", "godly"];
let goals = ["Reach $15", "eat stew"];
let soapQualityNumber = 0;
let goalNumber = 0;
let soapience = 0;
let soapienceMultiplier = 1;
let tutorial3showing = 0;
let managersUnlocked = 0;
let marketerCount = 0;
let marketerManagerCount = 0;
let marketerManagerCount2 = 0;
let buyerCount = 0;
let buyerManagerCount = 0;
let resoapcherCount = 0;
let laidOffMarketerCount = 0;
let laidOffMarketerManagerCount = 0;
let laidOffMarketerManagerCount2 = 0;
let laidOffBuyerCount = 0;
let laidOffBuyerManagerCount = 0;
let laidOffBuyerManagerCount2 = 0;
let laidOffResoapcherCount = 0;
let workersbought = 0;
let philosoaphybought = 0;
let inventionbought = 0;
let opticsbought = 0;
let megamarketingbought = 0;
let opticalAnalyzerUnlocked = 0;
let opticalAnalyzerCount = 8;
let opticsModifier = 1;
let titles = ["Yo, ", "Boss, ", "Sire, ", "Lord, ", "Noble Leader, ", "Heveanly Superperson, "];
let samadvice = ["I think we should try and get to $15. We could start hiring workers or researching upgrades!",
                 "we need to automate distribution. We should buy a marketer!",
                 "we are strong in most aspects, but we could do with automating the process of buying soap. Shall we get a soap buyer?",
                 "perhaps our best course of action is to learn the ways of upgrades. A resoapcher would be helpful.", 
                 "we need to increase the speed of which we distribute! A marketer manager would be a good idea to buy.",
                 "buying is good but we need more of it! Let us buy a buyer manager!",
                 "let us distribute to the masses! Marketer manager managers is the only way to the top!", 
                 "we need more soap! By getting a buyer manager manager, we will be rich, rich, rich!", 
                 "we need to train our marketers to work better. Let us resoapch Better Marketing!", 
                 "the current marketing practices are terrible! We need Mega Marketing!", 
                 "these current dealers are giving us a terrible deal! We need to resoapch how to get a Discount!"]
let marketerInterval;
let marketerManagerInterval;
let marketerManager2Interval;
let buyerInterval;
let buyerManagerInterval;
let resoapcherInterval;
let opticsTimer;
var saveKey = 'save';
//let saveCodeNumber = money.toString() + soapBuyPrice.toString() + soapSellPrice.toString() + soapSellChance.toString() + buySoapPriceModifier.toString() + soapSellChanceModifier.toString() + soapResoapchModifier.toString() + soapInventory.toString() + soapMaxInventory.toString() + soapQualityNumber.toString() + goalNumber.toString() + soapience.toString() + soapienceMultiplier.toString() + tutorial3showing.toString + marketerCount.toString + marketerManagerCount.toString + marketerMAnagerCount2.toString() + buywerCount.toString() + buyerManagerCount.toString() + resoapcherCount.toString + laidOffMarketerCount.toString() + laidoffMarketerManagerCount.toString() + laidOFfMarketerManagerCount2.toString() + laidOffBuyerCount.toString() + laidOffBuyerManagerCount.toString() + laidOffBuyerManagerCount2.toString() + laidOffResoapcherCount.toString() + workersBought.toString() + philosoaphyBought.toString() + megaMarketeringBought.toString;
/* var saveFile = {
    money:money,
    soapBuyPrice:soapBuyPrice,
    soapSellPrice:soapSellPrice,
    soapSellChance:soapSellChance,
    buySoapPriceModifier:buySoapPriceModifier,
    soapSellChanceModifier:soapSellChanceModifier,
    soapResoapchModifier:soapResoapchModifier,
    soapInventory:soapInventory,
    soapMaxInventory:soapMaxInventory,
    soapQualityNumber:soapQualityNumber,
    goalNumber:goalNumber,
    soapience:soapience,
    soapienceMultiplier:soapienceMultiplier,
    tutorial3showing:tutorial3showing,
    marketerCount:marketerCount,
    marketerManagerCount:marketerManagerCount,
    marketerManagerCount2:marketerManagerCount2,
    buyerCount:buyerCount,
    buyerManagerCount:buyerManagerCount,
    resoapcherCount:resoapcherCount,
    laidOffMarketerCount:laidOffMarketerCount,
    laidOffMarketerManagerCount:laidOffMarketerManagerCount,
    laidOffMarketerManagerCount2:laidOffMarketerManagerCount2,
    laidOffBuyerCount:laidOffBuyerCount,
    laidOffBuyerManagerCount:laidOffBuyerManagerCount,
    laidOffBuyerManagerCount2:laidOffBuyerManagerCount2,
    laidOffResoapcherCount:laidOffResoapcherCount,
    workersbought:workersbought,
    philosoaphybought:philosoaphybought,
    megamarketingbought:megamarketingbought
}; */

document.getElementById("qualitysoapbad").style.display = "none";
document.getElementById("bettermarketing2row").style.display = "none";
document.getElementById("bettermarketing3row").style.display = "none";
document.getElementById("bettermarketing4row").style.display = "none";
document.getElementById("bettermarketing5row").style.display = "none";
document.getElementById("betterresoapch2row").style.display = "none";
document.getElementById("betterresoapch3row").style.display = "none";
document.getElementById("discount2row").style.display = "none";
document.getElementById("discount3row").style.display = "none";
document.getElementById("discount4row").style.display = "none";
document.getElementById("philosoaphyrow").style.display = "none";
document.getElementById("workersrow").style.display = "none";
document.getElementById("inventionrow").style.display = "none";
document.getElementById("inventory1row").style.display = "none";
document.getElementById("inventory2row").style.display = "none";
document.getElementById("megamarketing1row").style.display = "none";
document.getElementById("megamarketing2row").style.display = "none";
document.getElementById("opticsrow").style.display = "none";
document.getElementById("marketermanagerrow").style.display = "none";
document.getElementById("marketermanager2row").style.display = "none";
document.getElementById("soapbuyermanager").style.display = "none";

function background () {
    if (Math.floor(Math.random * 10000) === 1) {
        document.getElementById("html").style.background = url("https://img.leafcdn.tv/640/clsd/getty/c5b53d6f854944a1bc622843470d51f0");
    } else {
        document.getElementById("html").style.background = url("https://dreams.metroeve.com/wp-content/uploads/2016/12/dreams.metroeve_soap-dreams-meaning.jpg");
    }
}

function buyasoap () {
    if (money >= 1 && soapInventory < soapMaxInventory) {
        money = (money - (soapBuyPrice * buySoapPriceModifier)).toFixed(2);
        document.getElementById("money").innerHTML = "Money = $" + money;
        soapInventory++;
        document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory + " Inventory";
    }
}

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

function raiseSoapPrice() {
    soapSellPrice = soapSellPrice + 0.25;
    document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice;
}

function lessenSoapPrice() {
    if (soapSellPrice > 0.25) {
        soapSellPrice = soapSellPrice - 0.25;
        document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice;
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
	setTimeout(sellingLoop, 500);
}

function lowerSoapPrice () {
	soapSellPrice = soapSellPrice - 0.05;
	document.getElementById("sellprice").innerHTML = "Selling for: $" + soapSellPrice.toFixed(2);
	calcChance();
}

function raiseSoapPrice () {
	soapSellPrice = soapSellPrice + 0.05;
	document.getElementById("sellprice").innerHTML = "Selling for: $" + soapSellPrice.toFixed(2);
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
	setTimeout(sellingLoop, 1000);
}

function stopSelling () {
	document.getElementById("sellingmenubackground").style.display = "none";
	document.getElementById("sellingmenuarea").style.display = "none";
}

function research () {
    soapience = (+soapience + +soapResoapchModifier).toFixed(1);
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
    if (soapience >= 1000 && workersbought === 0) {
        document.getElementById("workersrow").style.display = "table-row";
    }
    if (soapience >= 1000 && philosoaphybought === 0) {
        document.getElementById("philosoaphyrow").style.display = "table-row";
    }
    if (soapience >= 3000 && megamarketingbought === 0) {
        document.getElementById("megamarketing1row").style.display = "table-row";
    }
    if (soapience >= 7500 && opticsbought === 0 && inventionbought === 1) {
        document.getElementById("opticsrow").style.display = "table-row";
    }
}

function workersUnlock () {
    workersbought++;
    document.getElementById("workerMenu").style.display = "inline-block";
    document.getElementById("tutorial4box").style.display = "none";
    document.getElementById("workertutorial1box").style.display = "block";
}

function techUnlock () {
    document.getElementById("techMenu").style.display = "inline-block";
    document.getElementById("tutorial4box").style.display = "none";
    document.getElementById("techtutorial1box").style.display = "block";
    document.getElementById("research").style.display = "inline-block";
}

function buyMarketer () {
    if (money >= 5) {
        marketerCount++;
        money = (+money - 5).toFixed(2);
        marketerInterval = setInterval(sellSoapChance, (1000 / (marketerCount * opticsModifier)));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("marketerCount").innerHTML = marketerCount + " workers";
        document.getElementById("marketermanagerrow").style.display = "table-row"
        if (managersUnlocked === 0) {
            document.getElementById("workertutorial5").style.display = "block";
            managersUnlocked++
        }
    }
}

function buyBuyer () {
    if (money >= 10) {
        buyerCount++;
        money = (+money - 10).toFixed(2);
        buyerInterval = setInterval(buyasoap, (15000 / (buyerCount * opticsModifier)));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("buyerCount").innerHTML = buyerCount + " workers";
        document.getElementById("soapbuyermanager").style.display = "table-row";
    }
}

function buyBuyerManager () {
    if (money >= 75) {
        buyerManagerCount++;
        money = (+money - 75).toFixed(2);
        buyerManagerInterval = setInterval(buyBuyer, (5000 / (buyerManagerCount * opticsModifier)));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("buyerManagerCount").innerHTML = buyerManagerCount + " managers";
    }
}

function buyResoapcher () {
    if (money >= 25) {
        resoapcherCount++;
        money = money - 25;
        techUnlock();
        resoapcherInterval = setInterval(research, (1000 / (resoapcherCount * opticsModifier)));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("resoapcherCount").innerHTML = resoapcherCount + " workers";
    } 
}

function buyMarketerManager () {
    if (money >= 50) {
        marketerManagerCount++;
        money = (+money - 50).toFixed(2);
        marketerManagerInterval = setInterval(buyMarketer, (5000 / (marketerManagerCount * opticsModifier)));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("marketerManagerCount").innerHTML = marketerManagerCount + " managers";
        document.getElementById("marketermanager2row").style.display = "table-row";
    }
}

function buyMarketerManager2 () {
    if (money >= 150) {
        marketerManagerCount2++;
        money = (+money - 150).toFixed(2);
        marketerManagerInterval2 = setInterval(buyMarketerManager, (5000 / (marketerManagerCount2 * opticsModifier)));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("marketerManagerCount2").innerHTML = marketerManagerCount2 + " managers";
    }
}

function layoffmarketer () {
    if (marketerCount >= 1) {
        marketerCount--;
        laidOffMarketerCount++;
        if (marketerCount >= 1) {
          clearInterval(marketerInterval);
          marketerInterval = setInterval(sellSoapChance, (1000 / (marketerCount * opticsModifier)));
        }
        if (marketerCount === 0) {
          clearInterval(marketerInterval)
        }
        document.getElementById("marketerCount").innerHTML = marketerCount + "(" + laidOffMarketerCount + ")" + " workers";
    }
}

function layoffmarketermanager () {
    if (marketerManagerCount >= 1) {
        marketerManagerCount--;
        laidOffMarketerManagerCount++;
        if (marketerManagerCount >= 1) { 
          clearInterval(marketerManagerInterval);
          marketerManagerInterval = setInterval(buyMarketer, (5000 / (marketerManagerCount * opticsModifier)));
        }
        if (marketerManagerCount === 0) {
          clearInterval(marketerManagerInterval);
        }
        document.getElementById("marketerManagerCount").innerHTML = marketerManagerCount + "(" + laidOffMarketerManagerCount + ")" + " managers";
    }
}

function layoffmarketermanager2 () {
    if (marketerManagerCount2 >= 1) {
        marketerManagerCount2--;
        laidOffMarketerManagerCount2++;
        if (marketerManagerCount2 >= 1) { 
          clearInterval(marketerManagerInterval2);
          marketerManagerInterval2 = setInterval(buyMarketerManager, (5000 / (marketerManagerCount2 * opticsModifier)));
        }
        if (marketerManagerCount2 === 0) {
          clearInterval(marketerManagerInterval2);
        }
        document.getElementById("marketerManagerCount2").innerHTML = marketerManagerCount2 + "(" + laidOffMarketerManagerCount2 + ")" + " managers";
    }
}

function layoffbuyer () {
    if (buyerCount >= 1) {
        buyerCount--;
        laidOffBuyerCount++;
        if (buyerCount >= 1) {
          clearInterval(buyerInterval);
          buyerInterval = setInterval(buyasoap, (15000 / (buyerCount * opticsModifier)));
        }
        if (buyerCount === 0) {
          clearInterval(buyerInterval);
        }
        document.getElementById("buyerCount").innerHTML = buyerCount + "(" + laidOffBuyerCount + ")" + " workers";
    }
}

function layoffbuyermanager () {
    if (buyerManagerCount >= 1) {
        buyerManagerCount--;
        laidOffBuyerManagerCount++;
        if (buyerManagerCount >= 1) {
          clearInterval(buyerManagerInterval);
          buyerManagerInterval = setInterval(buyBuyer, (5000 / buyerManagerCount));
        }
        if (buyerManagerCount === 0) {
          clearInterval(buyerManagerInterval);
        }
        document.getElementById("buyerManagerCount").innerHTML = buyerManagerCount + "(" + laidOffBuyerManagerCount + ")" + " managers";
    }
}

function layoffresoapcher () {
    if (resoapcherCount >= 1) {
        resoapcherCount--;
        laidOffResoapcherCount++;
        if (resoapcherCount >= 1) {
          clearInterval(resoapcherInterval);
          resoapcherInterval = setInterval(research, (1000 / (resoapcherCount * opticsModifier)));
        }
        if (resoapcherCount === 0) {
          clearInterval(resoapcherInterval);
        }
        document.getElementById("resoapcherCount").innerHTML = resoapcherCount + "(" + laidOffResoapcherCount + ")" + " workers";
    }
}

function recruitmarketer () {
    if (laidOffMarketerCount >= 1) {
        marketerCount++;
        laidOffMarketerCount--;
        if (laidOffMarketerCount >= 1) {
            document.getElementById("marketerCount").innerHTML = marketerCount + "(" + laidOffMarketerCount + ")" + " workers";
        } else {
            document.getElementById("marketerCount").innerHTML = marketerCount + " workers";
        }
    }
}

function recruitmarketermanager () {
    if (laidOffMarketerManagerCount >= 1) {
        marketerManagerCount++;
        laidOffMarketerManagerCount--;
        if (laidOffMarketerManagerCount >= 1) {
            document.getElementById("marketerManagerCount").innerHTML = marketerManagerCount + "(" + laidOffMarketerManagerCount + ")" + " workers";
        } else {
            document.getElementById("marketerManagerCount").innerHTML = marketerManagerCount + " managers";
        }
    }
}

function recruitmarketermanager2 () {
    if (laidOffMarketerManagerCount2 >= 1) {
        marketerManagerCount2++;
        laidOffMarketerManagerCount2--;
        if (laidOffMarketerManagerCount2 >= 1) {
            document.getElementById("marketerManagerCount2").innerHTML = marketerManagerCount2 + "(" + laidOffMarketerManagerCount2 + ")" + " workers";
        } else {
            document.getElementById("marketerManagerCount2").innerHTML = marketerManagerCount2 + " managers";
        }
    }
}

function recruitbuyer () {
    if (laidOffBuyerCount >= 1) {
        buyerCount++;
        laidOffBuyerCount--;
        if (laidOffBuyerCount >= 1) {
            document.getElementById("buyerCount").innerHTML = buyerCount + "(" + laidOffBuyerCount + ")" + " workers";
        } else {
            document.getElementById("buyerCount").innerHTML = buyerCount + " workers";
        }
    }
}

function recruitbuyermanager () {
    if (laidOffBuyerManagerCount >= 1) {
        buyerManagerCount++;
        laidOffBuyerManagerCount--;
        if (laidOffBuyerManagerCount >= 1) {
            document.getElementById("buyerManagerCount").innerHTML = buyerManagerCount + "(" + laidOffBuyerManagerCount + ")" + " managers";
        } else {
            document.getElementById("buyerManagerCount").innerHTML = buyerManagerCount + " managers";
        }
    }
}

function recruitresoapcher () {
    if (laidOffResoapcherCount >= 1) {
        resoapcherCount++;
        laidOffResoapcherCount--;
        if (laidOffResoapcherCount >= 1) {
            document.getElementById("resoapcherCount").innerHTML = resoapcherCount + "(" + laidOffResoapcherCount + ")" + " workers";
        } else {
            document.getElementById("resoapcherCount").innerHTML = resoapcherCount + " workers";
        }
    }
}
  
function firemarketer () {
    if (marketerCount >= 1) {
        marketerCount--;
        if (laidOffMarketerCount >= 1) {
            document.getElementById("marketerCount").innerHTML = marketerCount + "(" + laidOffMarketerCount + ")" + " workers";
        } else {
            document.getElementById("marketerCount").innerHTML = marketerCount + " workers";
        }
    }
}

function firemarketermanager () {
    if (marketerManagerCount >= 1) {
        marketerManagerCount--;
        if (laidOffMarketerManagerCount >= 1) {
            document.getElementById("marketerManagerCount").innerHTML = marketerManagerCount + "(" + laidOffMarketerManagerCount + ")" + " managers";
        } else {
            document.getElementById("marketerManagerCount").innerHTML = marketerManagerCount + " managers";
        }
    }
}

function firemarketermanager2 () {
    if (marketerManagerCount2 >= 1) {
        marketerManagerCount2--;
        if (laidOffMarketerManagerCount2 >= 1) {
            document.getElementById("marketerManagerCount2").innerHTML = marketerManagerCount2 + "(" + laidOffMarketerManagerCount2 + ")" + " managers";
        } else {
            document.getElementById("marketerManagerCount2").innerHTML = marketerManagerCount2 + " managers";
        }
    }
}

function firebuyer () {
    if (buyerCount >= 1) {
       buyerCount--;
        if (laidOffBuyerCount >= 1) {
            document.getElementById("buyerCount").innerHTML = buyerCount + "(" + laidOffBuyerCount + ")" + " workers";
        } else {
            document.getElementById("buyerCount").innerHTML = buyerCount + " workers";
        }
    }
}

function firebuyermanager () {
    if (buyerManagerCount >= 1) {
        buyerManagerCount--;
        if (laidOffBuyerManagerCount >= 1) {
            document.getElementById("buyerManagerCount").innerHTML = buyerManagerCount + "(" + laidOffBuyerManagerCount + ")" + " managers";
        } else {
            document.getElementById("buyerManagerCount").innerHTML = buyerManagerCount + " managers";
        }
    }
}

function fireresoapcher () {
    if (resoapcherCount >= 1) {
        resoapcherCount--;
        if (laidOffResoapcherCount >= 1) {
            document.getElementById("resoapcherCount").innerHTML = resoapcherCount + "(" + laidOffResoapcherCount + ")" + " workers";
        } else {
            document.getElementById("resoapcherCount").innerHTML = resoapcherCount + " workers";
        }
    }
}

function techbettermarketing1 () {
    if (soapience >= 200) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 200;
        document.getElementById("bettermarketing1row").style.display = "none";
        document.getElementById("bettermarketing2row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbettermarketing2 () {
    if (soapience >= 750) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 750;
        document.getElementById("bettermarketing2row").style.display = "none";
        document.getElementById("bettermarketing3row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbettermarketing3 () {
    if (soapience >= 2000) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 2000;
        document.getElementById("bettermarketing3row").style.display = "none";
        document.getElementById("bettermarketing4row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbettermarketing4 () {
    if (soapience >= 4000) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 4000;
        document.getElementById("bettermarketing4row").style.display = "none";
        document.getElementById("bettermarketing5row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbettermarketing5 () {
    if (soapience >= 8000) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 8000;
        document.getElementById("bettermarketing5row").style.display = "none";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techmegamarketing1 () {
    if (soapience >= 5000) {
        sellSoapChanceModifier = 1.5 * soapSellChanceModifier;
        soapience = soapience - 5000;
        megamarketingbought++;
        document.getElementById("megamarketing1row").style.display = "none";
        document.getElementById("megamarketing2row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techmegamarketing2 () {
    if (soapience >= 10000) {
        sellSoapChanceModifier = 1.5 * soapSellChanceModifier;
        soapience = soapience - 10000;
        megamarketingbought++;
        document.getElementById("megamarketing2row").style.display = "none";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techphilosoaphy () {
    if (soapience >= 2000) {
        soapResoapchModifier = (3 * soapResoapchModifier).toFixed(2);
        soapience = soapience - 2000;
        philosoaphybought++;
        document.getElementById("philosoaphyrow").style.display = "none";
        document.getElementById("inventionrow").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techdiscount1 () {
    if (soapience >= 750) {
        buySoapPriceModifier = (0.9 * buySoapPriceModifier).toFixed(2);
        soapience = soapience - 750;
        document.getElementById("discount1row").style.display = "none";
        document.getElementById("discount2row").style.display = "table-row";
        document.getElementById("soapBuyPrice").innerHTML = "Cost: " + buySoapPriceModifier;
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techdiscount2 () {
    if (soapience >= 1500) {
        buySoapPriceModifier = (0.9 * buySoapPriceModifier).toFixed(2);
        soapience = soapience - 1500;
        document.getElementById("discount2row").style.display = "none";
        document.getElementById("discount3row").style.display = "table-row";
        document.getElementById("soapBuyPrice").innerHTML = "Cost: " + buySoapPriceModifier;
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techdiscount3 () {
    if (soapience >= 5000) {
        buySoapPriceModifier = (0.9 * buySoapPriceModifier).toFixed(2);
        soapience = soapience - 5000;
        document.getElementById("discount3row").style.display = "none";
        document.getElementById("discount4row").style.display = "table-row";
        document.getElementById("soapBuyPrice").innerHTML = "Cost: " + buySoapPriceModifier;
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techdiscount4 () {
    if (soapience >= 10000) {
        buySoapPriceModifier = (0.9 * buySoapPriceModifier).toFixed(2);
        soapience = soapience - 10000;
        document.getElementById("discount4row").style.display = "none";
        document.getElementById("soapBuyPrice").innerHTML = "Cost: " + buySoapPriceModifier;
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbetterresoapch1 () {
    if (soapience >= 500) {
        soapResoapchModifier = (2 * soapResoapchModifier).toFixed(2);
        soapience = soapience - 500;
        document.getElementById("betterresoapch1row").style.display = "none";
        document.getElementById("betterresoapch2row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbetterresoapch2 () {
    if (soapience >= 1500) {
        soapResoapchModifier = (2 * soapResoapchModifier).toFixed(2);
        soapience = soapience - 1500;
        document.getElementById("betterresoapch2row").style.display = "none";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbetterresoapch3 () {
    if (soapience >= 4500) {
        soapResoapchModifier = (2 * soapResoapchModifier).toFixed(2);
        soapience = soapience - 4500;
        document.getElementById("betterresoapch3row").style.display = "none";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techinventory1 () {
    if (soapience > 1000) {
        soapMaxInventory = (2 * soapMaxInventory);
        soapience = soapience - 1000;
        document.getElementById("inventory1row").style.display = "none";
        document.getElementById("inventory2row").style.display = "table-row";
        document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory;
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techinventory2 () {
    if (soapience >= 3000) {
        soapResoapchModifier = (2 * soapMaxInventory);
        soapience = soapience - 3000;
        document.getElementById("inventory2row").style.display = "none";
        document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory;
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techworkers () {
    if (soapience >= 2500) {
        soapience = soapience - 2500;
        workersUnlock();
        workersbought++;
        document.getElementById("workersrow").style.display = "none";
    }
}

function techinvention () {
    if (soapience >= 5000) {
        soapience = soapience - 5000;
        soapSellChanceModifier = soapSellChanceModifier * 1.25;
        soapResoapchModifier = (soapResoapchModifier * 2).toFixed(2);
        inventionbought++;
        document.getElementById("soapience").innerHTML = soapience + " Soapience.";
        document.getElementById("inventionrow").style.display = "none";
        document.getElementById("qualitysoapbad").style.display = "table-row";
    }
}

function techoptics () {
    if (soapience >= 10000) {
        soapience = soapience - 10000;
        opticsbought++;
        opticsDisappearTimer();
        document.getElementById("opticsbox").style.display = "inline-block";
        document.getElementById("opticsrow").style.display = "none";
        document.getElementById("opticstutorial1").style.display = "none";
        document.getElementById("soapience").innerHTML = soapience + " Soapience.";
    }
}

function qualitySoapBad () {
    if (soapience >= 7500) {
        soapQualityNumber++;
        document.getElementById("qualitysoapbad").style.display = "none";
        document.getElementById("soapience").innerHTML = soapience + " Soapience";
        document.getElementById("soapQuality").innerHTML = "Quality is " + soapQuality[soapQualityNumber] + ".";
    }
}

function removeFidgetBoxClass () {
    document.getElementById("fidgetbox").className = "fidgetboxlooks";
}
    
function fidgetspin () {
    document.getElementById("fidgetbox").className = "fidgetbox fidgetboxlooks";
    setTimeout(removeFidgetBoxClass, 500);
}

function opticsDisappear () {
    if (opticalAnalyzerCount === 0) {
        clearInterval(opticsTimer);
    } else if (opticalAnalyzerCount === 1) {
        opticalAnalyzerCount--;
        opticsModifer = 0.33;
        document.getElementById("opticssquare1").style.display = "none";
        clearInterval(opticsTimer);
    } else if (opticalAnalyzerCount === 2) {
        opticalAnalyzerCount--;
        opticsModifer = 0.5;
        document.getElementById("opticssquare2").style.display = "none";
    } else if (opticalAnalyzerCount === 3) {
        opticalAnalyzerCount--;
        opticsModifer = 0.75;
        document.getElementById("opticssquare3").style.display = "none";
    } else if (opticalAnalyzerCount === 4) {
        opticalAnalyzerCount--;
        opticsModifier = 1;
        document.getElementById("opticssquare4").style.display = "none";
    } else if (opticalAnalyzerCount === 5) {
        opticalAnalyzerCount--;
        opticsModifier = 1.25;
        document.getElementById("opticssquare5").style.display = "none";
    } else if (opticalAnalyzerCount === 6) {
        opticalAnalyzerCount--;
        opticsModifier = 1.5;
        document.getElementById("opticssquare6").style.display = "none";
    } else if (opticalAnalyzerCount === 7) {
        opticalAnalyzerCount--;
        opticsModifier = 1.75;
        document.getElementById("opticssquare7").style.display = "none";
    } else if (opticalAnalyzerCount === 8) {
        opticalAnalyzerCount--;
        opticsModifier = 2;
        document.getElementById("opticssquare8").style.display = "none";
    }
}

function opticsAnalyze () {
    opticalAnalyzerCount = 8;
    opticsModifier = 2;
    clearInterval(opticsTimer);
    document.getElementById("opticssquare1").style.display = "table-row";
    document.getElementById("opticssquare2").style.display = "table-row";
    document.getElementById("opticssquare3").style.display = "table-row";
    document.getElementById("opticssquare4").style.display = "table-row";
    document.getElementById("opticssquare5").style.display = "table-row";
    document.getElementById("opticssquare6").style.display = "table-row";
    document.getElementById("opticssquare7").style.display = "table-row";
    document.getElementById("opticssquare8").style.display = "table-row";
    opticsDisappearTimer();
}

function opticsDisappearTimer () {
    clearInterval(opticsTimer);
    opticsTimer = setInterval(opticsDisappear, 5000);
}

function startsam () {
    document.getElementById("samadvisormodal").style.display = "block";
    document.getElementById("samadvisormodal1").style.display = "block";
}

function acceptsam () {
    document.getElementById("samadvisormodal1").style.display = "none";
    document.getElementById("samadvisormodal2").style.display = "block";
}

function rejectsam () {
    document.getElementById("samadvisormodal1").style.display = "none";
    document.getElementById("samadvisormodal3").style.display = "block";
}

function finishsam () {
    document.getElementById("samadvisormodal").style.display = "none";
}

setTimeout(startsam, 300000);

/*function saveGame () {
    console.log("cookies!");
    saveFile.money = money;
    saveFile.soapBuyPrice = soapBuyPrice;
    saveFile.soapSellPrice = soapSellPrice;
    saveFile.soapSellChance = soapSellChance;
    saveFile.buySoapPriceModifier = buySoapPriceModifier;
    saveFile.soapSellChanceModifier = soapSellChanceModifier;
    saveFile.soapResoapchModifier = soapResoapchModifier;
    saveFile.soapInventory = soapInventory;
    saveFile.soapMaxInventory = soapMaxInventory;
    saveFile.soapQualityNumber = soapQualityNumber;
    saveFile.goalNumber = goalNumber;
    saveFile.soapience = soapience;
    saveFile.soapienceMultiplier = soapienceMultiplier;
    saveFile.tutorial3showing = tutorial3showing;
    saveFile.marketerCount = marketerCount;
    saveFile.marketerManagerCount = marketerManagerCount;
    saveFile.marketerManagerCount2 = marketerManagerCount2;
    saveFile.buyerCount = buyerCount;
    saveFile.buyerManagerCount = buyerManagerCount;
    saveFile.resoapcherCount = resoapcherCount;
    saveFile.laidOffMarketerCount = laidOffMarketerCount;
    saveFile.laidOffMarketerManagerCount = laidOffMarketerManagerCount;
    saveFile.laidOffMarketerManagerCount2 = laidOffMarketerManagerCount2;
    saveFile.laidOffBuyerCount = laidOffBuyerCount;
    saveFile.laidOffBuyerManagerCount = laidOffBuyerManagerCount;
    saveFile.laidOffResoapcherCount = laidOffResoapcherCount;
    saveFile.workersbought = workersbought;
    saveFile.philosoaphybought = philosoaphybought;
    saveFile.megamarketingbought = megamarketingbought;
    localStorage.setItem(saveKey, JSON.stringify(saveFile));
}

function loadGameHelper () {
    return JSON.parse(localStorage.getItem(saveKey));
}

function loadGame () {
    var saveFile = loadGameHelper();
    money = Number(saveFile.money);
    soapBuyPrice = Number(saveFile.soapBuyPrice);
    soapSellPrice = Number(saveFile.soapSellPrice);
    soapSellChance = Number(saveFile.soapSellChance);
    buySoapPriceModifier = Number(saveFile.buySoapPriceModifier);
    soapSellChanceModifier = Number(saveFile.soapSellChanceModifier);
    soapResoapchModifier = Number(saveFile.soapResoapchModifier);
    soapInventory = Number(saveFile.soapInventory);
    soapMaxInventory = Number(saveFile.soapMaxInventory);
    soapQualityNumber = Number(saveFile.soapQualityNumber);
    goalNumber = Number(saveFile.goalNumber);
    soapience = Number(saveFile.soapience);
    soapienceMultiplier = Number(saveFile.soapienceMultiplier);
    tutorial3showing = Number(saveFile.tutorial3showing);
    marketerCount = Number(saveFile.marketerCount);
    marketerManagerCount = Number(saveFile.marketerManagerCount);
    marketerManagerCount2 = Number(saveFile.marketerManagerCount2);
    buyerCount = Number(saveFile.buyerCount);
    buyerManagerCount = Number(saveFile.buyerManagerCount);
    resoapcherCount = Number(saveFile.resoapcherCount);
    laidOffMarketerCount = Number(saveFile.laidOffMarketerCount);
    laidOffMarketerManagerCount = Number(saveFile.laidOffMarketerManagerCount);
    laidOffMarketerManagerCount2 = Number(saveFile.laidOffMarketerManagerCount2);
    laidOffBuyerCount = Number(saveFile.laidOffBuyerCount);
    laidOffBuyerManagerCount = Number(saveFile.laidOffBuyerManagerCount);
    laidOffResoapcherCount = Number(saveFile.laidOffResoapcherCount);
    workersbought = Number(saveFile.workersbought);
    philosoaphybought = Number(saveFile.philosoaphybought);
    megamarketingbought = Number(saveFile.megamarketingbought);
}*/

function tutorial1disappear () {
    document.getElementById("tutorial1box").style.display = "none";
    document.getElementById("tutorial2box").style.display = "block";
}

function tutorial2disappear () {
    document.getElementById("tutorial2box").style.display = "none";
    document.getElementById("tutorial3box").style.display = "block";
}

function tutorial3disappear () {
    document.getElementById("tutorial3box").style.display = "none";
    tutorial3showing = 1;
}

function tutorial4appear () {
    document.getElementById("tutorial4box").style.display = "block";
}

function workertutorial1disappear () {
    document.getElementById("workertutorial1box").style.display = "none";
    document.getElementById("workertutorial2box").style.display = "block";
}

function workertutorial2disappear () {
    document.getElementById("workertutorial2box").style.display = "none";
    document.getElementById("workertutorial3box").style.display = "block";
}

function workertutorial3disappear () {
    document.getElementById("workertutorial3box").style.display = "none";
    document.getElementById("workertutorial4box").style.display = "block";
}

function workertutorial4disappear () {
    document.getElementById("workertutorial4box").style.display = "none";
}

function workertutorial5disappear () {
    document.getElementById("workertutorial5box").style.display = "none";
}

function techtutorial1disappear () {
    document.getElementById("techtutorial1box").style.display = "none";
}

function opticstutorial1disappear () {
    document.getElementById("opticstutorial1box").style.display = "none";
    document.getElementById("opticstutorial2box").style.display = "block";
}

function opticstutorial2disappear () {
    document.getElementById("opticstutorial2box").style.display = "none";
}

function freemuns () {
    money = Number(money) + 10;
    document.getElementById("money").innerHTML = "Money = $" + money;
    if (money >= 15 && tutorial3showing === 1) {
            tutorial4appear();
            tutorial3showing = 0;
    }
}

function freesoapience () {
    soapience = +soapience + 1000;
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function restartGame () {
    money = 10;
    soapBuyPrice = 1;
    soapSellPrice = 1;
    soapSellChance = 0;
    buySoapPriceModifier = 1;
    soapSellChanceModifier = 1;
    soapResoapchModifier = 1;
    soapInventory = 0;
    soapMaxInventory = 50;
    soapQuality = ["terrible", "bad", "mediocre", "so-so", "good", "amazing", "godly"];
    goals = ["Reach $15", "eat stew"];
    soapQualityNumber = 0;
    goalNumber = 0;
    soapience = 0;
    soapienceMultiplier = 1;
    tutorial3showing = 0;
    marketerCount = 0;
    marketerManagerCount = 0;
    marketerManagerCount2 = 0;
    buyerCount = 0;
    buyerManagerCount = 0;
    resoapcherCount = 0;
    laidOffMarketerCount = 0;
    laidOffMarketerManagerCount = 0;
    laidOffMarketerManagerCount2 = 0;
    laidOffBuyerCount = 0;
    laidOffBuyerManagerCount = 0;
    laidOffBuyerManagerCount2 = 0;
    laidOffResoapcherCount = 0;
    workersbought = 0;
    philosoaphybought = 0;
    megamarketingbought = 0;  
    document.getElementById("qualitysoapbad").style.display = "none";
    document.getElementById("bettermarketing2row").style.display = "none";
    document.getElementById("bettermarketing3row").style.display = "none";
    document.getElementById("bettermarketing4row").style.display = "none";
    document.getElementById("bettermarketing5row").style.display = "none";
    document.getElementById("betterresoapch2row").style.display = "none";
    document.getElementById("discount2row").style.display = "none";
    document.getElementById("philosoaphyrow").style.display = "none";
    document.getElementById("workersrow").style.display = "none";
    document.getElementById("inventionrow").style.display = "none";
    document.getElementById("megamarketing1row").style.display = "none";
    document.getElementById("marketermanagerrow").style.display = "none";
    document.getElementById("marketermanager2row").style.display = "none";
    document.getElementById("soapbuyermanager").style.display = "none";
    document.getElementById("workerMenu").style.display = "none";
    document.getElementById("techMenu").style.display = "none";
    document.getElementById("money").innerHTML = "Money = $" + money;
    document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory + " Inventory";
    document.getElementById("soapQuality").innerHTML = "Quality is " + soapQuality[soapQualityNumber] + ".";
    document.getElementById("soapBuyPrice").innerHTML = "Cost: $" + soapBuyPrice;
    document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice;
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

document.getElementById("money").innerHTML = "Money = $" + money;
document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory + " Inventory";
document.getElementById("soapQuality").innerHTML = "Quality is " + soapQuality[soapQualityNumber] + ".";
document.getElementById("soapBuyPrice").innerHTML = "Cost: $" + soapBuyPrice;
document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice;
document.getElementById("sellprice").innerHTML = "Selling for: $" + soapSellPrice;
document.getElementById("soapience").innerHTML = soapience + " Soapience.";
document.getElementById("getsoap").addEventListener("click", buyasoap);
//document.getElementById("sellsoap").addEventListener("click", sellSoapChance);
document.getElementById("raiseSoapPrice").addEventListener("click", raiseSoapPrice);
document.getElementById("lessenSoapPrice").addEventListener("click", lessenSoapPrice);
document.getElementById("opensellingmenu").addEventListener("click", startSelling);
document.getElementById("lowerSoapPriceOnMenu").addEventListener("click", lowerSoapPrice);
document.getElementById("raiseSoapPriceOnMenu").addEventListener("click", raiseSoapPrice);
document.getElementById("stopselling").addEventListener("click", stopSelling);
document.getElementById("resoapch").addEventListener("click", research)
document.getElementById("tutorial1").addEventListener("click", tutorial1disappear);
document.getElementById("tutorial2").addEventListener("click", tutorial2disappear);
document.getElementById("tutorial3").addEventListener("click", tutorial3disappear);
document.getElementById("opticstutorial1").addEventListener("click", opticstutorial1disappear);
document.getElementById("opticstutorial2").addEventListener("click", opticstutorial2disappear);
document.getElementById("workertutorial1").addEventListener("click", workertutorial1disappear);
document.getElementById("workertutorial2").addEventListener("click", workertutorial2disappear);
document.getElementById("workertutorial3").addEventListener("click", workertutorial3disappear);
document.getElementById("workertutorial4").addEventListener("click", workertutorial4disappear);
document.getElementById("workertutorial5").addEventListener("click", workertutorial5disappear);
document.getElementById("unlockWorkers").addEventListener("click", workersUnlock);
document.getElementById("unlockTech").addEventListener("click", techUnlock);
document.getElementById("buymarketer").addEventListener("click", buyMarketer);
document.getElementById("buyresoapcher").addEventListener("click", buyResoapcher);
document.getElementById("buymarketermanager").addEventListener("click", buyMarketerManager);
document.getElementById("buymarketermanager2").addEventListener("click", buyMarketerManager2);
document.getElementById("buybuyer").addEventListener("click", buyBuyer);
document.getElementById("buybuyermanager").addEventListener("click", buyBuyerManager);
document.getElementById("layoffmarketer").addEventListener("click", layoffmarketer);
document.getElementById("layoffmarketermanager").addEventListener("click", layoffmarketermanager);
document.getElementById("layoffmarketermanager2").addEventListener("click", layoffmarketermanager2);
document.getElementById("layoffbuyer").addEventListener("click", layoffbuyer);
document.getElementById("layoffbuyermanager").addEventListener("click", layoffbuyermanager);
document.getElementById("layoffresoapcher").addEventListener("click", layoffresoapcher);
document.getElementById("recruitmarketer").addEventListener("click", recruitmarketer);
document.getElementById("recruitmarketermanager").addEventListener("click", recruitmarketermanager);
document.getElementById("recruitmarketermanager2").addEventListener("click", recruitmarketermanager2);
document.getElementById("recruitbuyer").addEventListener("click", recruitbuyer);
document.getElementById("recruitbuyermanager").addEventListener("click", recruitbuyermanager);
document.getElementById("recruitresoapcher").addEventListener("click", recruitresoapcher);
document.getElementById("firemarketer").addEventListener("click", firemarketer);
document.getElementById("firemarketermanager").addEventListener("click", firemarketermanager);
document.getElementById("firemarketermanager2").addEventListener("click", firemarketermanager2);
document.getElementById("firebuyer").addEventListener("click", firebuyer);
document.getElementById("firebuyermanager").addEventListener("click", firebuyermanager);
document.getElementById("fireresoapcher").addEventListener("click", fireresoapcher);
document.getElementById("techbettermarketing1").addEventListener("click", techbettermarketing1);
document.getElementById("techbettermarketing2").addEventListener("click", techbettermarketing2);
document.getElementById("techbettermarketing3").addEventListener("click", techbettermarketing3);
document.getElementById("techbettermarketing4").addEventListener("click", techbettermarketing4);
document.getElementById("techbettermarketing5").addEventListener("click", techbettermarketing5);
document.getElementById("techmegamarketing1").addEventListener("click", techmegamarketing1);
document.getElementById("techmegamarketing2").addEventListener("click", techmegamarketing2);
document.getElementById("techdiscount1").addEventListener("click", techdiscount1);
document.getElementById("techdiscount2").addEventListener("click", techdiscount2);
document.getElementById("techdiscount3").addEventListener("click", techdiscount3);
document.getElementById("techdiscount4").addEventListener("click", techdiscount4);
document.getElementById("techinventory1").addEventListener("click", techinventory1);
document.getElementById("techinventory2").addEventListener("click", techinventory2);
document.getElementById("techbetterresoapch").addEventListener("click", techbetterresoapch1);
document.getElementById("techbetterresoapch2").addEventListener("click", techbetterresoapch2);
document.getElementById("techbetterresoapch3").addEventListener("click", techbetterresoapch3);
document.getElementById("techphilosoaphy").addEventListener("click", techphilosoaphy);
document.getElementById("techinvention").addEventListener("click", techinvention);
document.getElementById("techworkers").addEventListener("click", techworkers);
document.getElementById("techoptics").addEventListener("click", techoptics);
document.getElementById("qualitysoapupgradebad").addEventListener("click", qualitySoapBad);
document.getElementById("opticsanalyzer").addEventListener("click", opticsAnalyze);
/*document.getElementById("savebutton").addEventListener("click", saveGame);
document.getElementById("importbutton").addEventListener("click", loadGame);*/
document.getElementById("acceptsam").addEventListener("click", acceptsam);
document.getElementById("rejectsam").addEventListener("click", rejectsam);
document.getElementById("finishsam").addEventListener("click", finishsam);
document.getElementById("finishsam2").addEventListener("click", finishsam);
document.getElementById("freemoney").addEventListener("click", freemuns);
document.getElementById("freesoapience").addEventListener("click", freesoapience);
document.getElementById("techtutorial1").addEventListener("click", techtutorial1disappear);
document.getElementById("restart").addEventListener("click", restartGame);
