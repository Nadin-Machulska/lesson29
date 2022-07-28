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
function countOfFiles(){
    let usersFleshDrive = document.querySelector('.count-gb').value;
    let fleshDrive = (usersFleshDrive * 1000)
    let filesSize = 820;
    let filesCount = (fleshDrive / filesSize);
    document.querySelector('.output').innerHTML = filesCount;
}


//скільки можна купити шоколадок і скільки решти залишиться
document.querySelector('.enter2').onclick = buyingChoco;
function  buyingChoco(){
    let usersMoney = document.querySelector('.uesrsmoney').value;
    let priceOfBar = document.querySelector('.chock-bar-price').value;
    
    var countOfBars
    countOfBars = usersMoney / priceOfBar;
    document.querySelector('.output1').innerHTML = countOfBars;

    var extraMoney
    extraMoney = usersMoney % priceOfBar;
    document.querySelector('.output2').innerHTML = extraMoney;

}

//змінити порядок цифр
document.querySelector('.enter3').onclick = countNumbers;
var threeDiginNumber = document.querySelector('numbers').value;

function countNumbers(threeDiginNumber){
    let result = 0;
    while (threeDiginNumber) {
    result = result * 10 + threeDiginNumber % 10;
    threeDiginNumber = Math.floor(threeDiginNumber / 10);
  }

  return result;
}
console.log(getReversedNum(threeDiginNumber));

//deposit
// 5%/12=проц на один місяць, (5%/12)*2 за два місяці
document.querySelector('.enter4').onclick = calculateDeposite;
function calculateDeposite(){
    let procentPerTwoMonthes = (5 / 12 * 2);
    let investedMoney = document.querySelector('sum-of-money').value;
    let outputMoney = (investedMoney / 100 * 5 *2)
document.querySelector('calculate').innerHTML = outputMoney;

}






