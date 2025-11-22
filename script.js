let body = document.querySelector('body');
let card = document.querySelector('.card');
let h1 = document.querySelector('.card h1');

body.addEventListener('keydown', function(elem) {
    h1.innerHTML = `${elem.key}`;
})

// card.addEventListener('mouseleave', function() {
//     h1.innerHTML = "A"
// })