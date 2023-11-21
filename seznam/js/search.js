(function () {
        //!------------------: START

        function elemTarget(e) {
                e = e || window.event;
                //e.preventDefault();
                return e.target;
        }

        document.addEventListener("keyup", (e) => {
                let elem = elemTarget(e);

                if (elem.classList.contains("in-search")) {
                        hashtagSeArch();
                }
        });

        document.addEventListener("search", (e) => {
                let elem = elemTarget(e);

                if (elem.classList.contains("in-search")) {
                        hashtagSeArch();
                }
        });

        function hashtagSeArch() {
                let input, filter, ul, li, a, i, txtValue;

                input = document.querySelector("#myInput");
                filter = input.value.toUpperCase();
                ul = document.querySelector("#myUL");
                li = ul.getElementsByTagName("li");

                for (i = 0; i < li.length; i++) {
                        a = li[i].getElementsByTagName("span")[0];
                        txtValue = a.textContent || a.innerText;

                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                li[i].style.display = "";
                        } else {
                                li[i].style.display = "none";
                        }
                }
        }

        //!------------------: STOP
})();