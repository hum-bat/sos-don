let allText = `

<li><span>Martin | 250Kč    | ******0143/0800 | 21.11.2023</span></li>
<li><span>Otakar | 1 000Kč  | ******7010/3030 | 21.11.2023</span></li>
<li><span>Rudolf | 500Kč    | ******0560/2010 | 22.11.2023</span></li>

`;

document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("#myUL").innerHTML = allText;
    allText = '';
});