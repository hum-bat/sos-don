const cords = ['scrollX', 'scrollY'];

window.addEventListener('beforeunload', () => {
        cords.forEach(cord => localStorage.setItem(cord, window[cord]));
});

window.addEventListener('load', () => {
        const scrollValues = cords.map(cord => parseInt(localStorage.getItem(cord), 10) || 0);
        window.scrollTo(...scrollValues);
});
