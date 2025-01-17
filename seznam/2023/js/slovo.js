let allText = `

<li><span>Martin    | 250Kč    | ******0143/0800 | 21.11.2023</span></li>
<li><span>Otakar    | 1 000Kč  | ******7010/3030 | 21.11.2023</span></li>
<li><span>Rudolf    | 500Kč    | ******0560/2010 | 22.11.2023</span></li>
<li><span>Jiří      | 2 000Kč  | ******1001/5500 | 23.11.2023</span></li>
<li><span>Jana      | 50Kč     | ******7284/0100 | 24.11.2023</span></li>
<li><span>Petr      | 3 333Kč  | ******3193/0800 | 24.11.2023</span></li>
<li><span>Marie     | 250Kč    | ******4516/2700 | 24.11.2023</span></li>
<li><span>Helena    | 400Kč    | ******3702/3030 | 24.11.2023</span></li>
<li><span>Pavel     | 100Kč    | ******2036/0300 | 24.11.2023</span></li>
<li><span>ATM PŘ.   | 600Kč    | ******1770/0600 | 27.11.2023</span></li>
<li><span>Vlastimil | 1 000Kč  | ******8202/2010 | 29.11.2023</span></li>
<li><span>Michal    | 300Kč    | ******5744/6210 | 29.11.2023</span></li>
<li><span>Eva       | 500Kč    | ******6083/0800 | 30.11.2023</span></li>
<li><span>Jaromír   | 250Kč    | ******3043/0800 | 05.12.2023</span></li>
<li><span>Josef     | 750Kč    | ******0534/7314 | 05.12.2023</span></li>
<li><span>Anna      | 2 000Kč  | ******5501/0300 | 06.12.2023</span></li>
<li><span>Eva       | 500Kč    | ******6083/0800 | 06.12.2023</span></li>
<li><span>Stanislav | 500Kč    | ******3841/2010 | 07.12.2023</span></li>
<li><span>Eva       | 500Kč    | ******6083/0800 | 13.12.2023</span></li>
<li><span>Alexandr  | 2 000Kč  | ******8014/3030 | 13.12.2023</span></li>
<li><span>Bronislava| 750Kč    | ******2430/8531 | 14.12.2023</span></li>
<li><span>Karel     | 300Kč    | ******7015/3030 | 15.12.2023</span></li>
<li><span>Martin    | 200Kč    | ******9015/3030 | 18.12.2023</span></li>
<li><span>Eva       | 500Kč    | ******6083/0800 | 19.12.2023</span></li>
<li><span>Rastislav | 750Kč    | ******0072/9851 | 19.12.2023</span></li>
<li><span>David     | 1 000Kč  | ******3860/0300 | 20.12.2023</span></li>
<li><span>Jan       | 300Kč    | ******8023/0800 | 20.12.2023</span></li>
<li><span>Vladimír  | 1 000Kč  | ******2153/0800 | 21.12.2023</span></li>
<li><span>Eva       | 1 000Kč  | ******9013/2700 | 27.12.2023</span></li>

`;

// <li><span>| Kč    | ****** | 20.12.2023</span></li>

let res = '';

document.addEventListener("DOMContentLoaded", function (event) {

    const myUL = document.querySelector("#myUL");

    if (myUL) {
        myUL.innerHTML = allText;
    }

    let pattern = /\d.*(?=K)/g;
    let result = allText.match(pattern) + '';
    result = result.replace(/[^,\d]/g, '');
    res += result;

    let sumX = res.match(/\-?\d+/g).reduce((sum, el) => sum + +el, 0);

    const mySum = document.querySelector("#sum");

    if (mySum) {
        mySum.innerHTML = 'V roce 2023 vybráno ' + sumX.toLocaleString() + ' Kč';
    }

    allText = '';
});