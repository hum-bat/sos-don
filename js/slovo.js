let allText = `

<li><span>Martin | 250Kč    | ******0143/0800 | 21.11.2023</span></li>
<li><span>Otakar | 1 000Kč  | ******7010/3030 | 21.11.2023</span></li>
<li><span>Rudolf | 500Kč    | ******0560/2010 | 22.11.2023</span></li>
<li><span>Jiří   | 2 000Kč  | ******1001/5500 | 23.11.2023</span></li>
<li><span>Jana   | 50Kč     | ******7284/0100 | 24.11.2023</span></li>
<li><span>Petr   | 3 333Kč  | ******3193/0800 | 24.11.2023</span></li>
<li><span>Marie  | 250Kč    | ******4516/2700 | 24.11.2023</span></li>
<li><span>Helena | 400Kč    | ******3702/3030 | 24.11.2023</span></li>
<li><span>Pavel  | 100Kč    | ******2036/0300 | 24.11.2023</span></li>

`;

document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("#myUL").innerHTML = allText;
    allText = '';
});