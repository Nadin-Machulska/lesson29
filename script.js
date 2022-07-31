//0.1+0.2
let x = 0.1;
let y = 0.2;
let sumOf = (x + y);

//array "1" + 2
let b = "1";
let c = 2;
let sum = (b + c);

//в одному gb 1000mb
document.querySelector('.enter').onclick = countOfFiles;
function countOfFiles() {
    let usersFleshDrive = document.querySelector('.count-gb').value;
    let fleshDrive = (usersFleshDrive * 1000)
    let filesSize = 820;
    let filesCount = (fleshDrive / filesSize);
    document.querySelector('.output').innerHTML = filesCount;
}


//скільки можна купити шоколадок і скільки решти залишиться
document.querySelector('.done').onclick = buyingChoco;
function buyingChoco() {
    let usersMoney = document.querySelector('.usersmoney').value;
    let priceOfBar = document.querySelector('.chock-bar-price').value;

    var countOfBars
    countOfBars = usersMoney / priceOfBar;
    document.querySelector('.output1').innerHTML = countOfBars;

    var extraMoney
    extraMoney = usersMoney % priceOfBar;
    document.querySelector('.output2').innerHTML = extraMoney;

}

//змінити порядок цифр
document.querySelector('.push').onclick = countNumbers;

function countNumbers() {
    let result = 0;
    var threeDigitNumber = document.querySelector('.numbers').value;

    while (threeDigitNumber) {
        result = result * 10 + threeDigitNumber % 10;
        threeDigitNumber = Math.floor(threeDigitNumber / 10);
    }

    document.querySelector('.output3').innerHTML = result;
}

//deposit
// 5%/12=проц на один місяць, (5%/12)*2 за два місяці
document.querySelector('.calculate').onclick = calculateDeposite;

function calculateDeposite() {
    let procentPerTwoMonthes = (5 / 12 * 2);
    let investedMoney = document.querySelector('.sum-of-money').value;
    let outputMoney = (investedMoney / 100 * 5 * 2)
    document.querySelector('.output4').innerHTML = outputMoney;

}






