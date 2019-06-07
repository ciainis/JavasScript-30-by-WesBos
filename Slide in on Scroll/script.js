const images = document.querySelectorAll('.slide-in');

function checkSlide() {
    images.forEach(image => {
        const slideAt = (window.scrollY + window.innerHeight) - image.height / 2;
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(checkSlide));