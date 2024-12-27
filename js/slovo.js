let allText = `

<li><span>Petr      | 1 300Kč  | ******3214/2700 | 23.12.2024</span></li>
<li><span>Pavel     | 200Kč    | ******2406/0300 | 27.12.2024</span></li>
<li><span>Jan       | 200Kč    | ******4368/0600 | 27.12.2024</span></li>

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
        mySum.innerHTML = 'V roce 2024 vybráno ' + sumX.toLocaleString() + ' Kč';
    }

    allText = '';
});