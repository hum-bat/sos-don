(function () {
        //!------------------: START

        window.onscroll = function () { scrollFunction() };

        let elMin = getComputedStyle(document.documentElement)
                .getPropertyValue('--nav-min');
        let elMax = getComputedStyle(document.documentElement)
                .getPropertyValue('--nav-max');

        function scrollFunction() {
                if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                        document.documentElement.style.setProperty('--nav-max', elMin);
                } else {
                        document.documentElement.style.setProperty('--nav-max', elMax);
                }
        }

        //!------------------: STOP
})();