let cords = ['scrollX', 'scrollY'];
window.addEventListener('unload', e => cords.forEach(cord => localStorage[cord] = window[cord]));
window.scroll(...cords.map(cord => localStorage[cord]));