'use strict'

{
    const target = document.querySelector('#about')

    function callback(entries) {
        console.log(entries[0]);

        if (entries[0].isIntersecting) {
            entries[0].target.classList.add('appear');
        } else {

        }
    
    }

    const options = {
        threshold: 0.2
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target)
}