let isMenuExpanded = false;
let currentSlide = 0;

function clicked_menu() {
    const menu = document.getElementById('menu');
    const prev = document.getElementById('prev');
    const list = document.getElementById('list');

    if(isMenuExpanded) {
        menu.classList.remove('expanding');
        menu.classList.add('shrinking');

        prev.classList.remove('expanding_prev');
        prev.classList.add('shrinking_prev');

        list.classList.remove('visible');
        console.log('invicivel')
        setTimeout(() => list.hidden = true, 500);
      } else {
        menu.classList.remove('shrinking');
        menu.classList.add('expanding');

        prev.classList.remove('shrinking_prev');
        prev.classList.add('expanding_prev');

        list.hidden = false;
        console.log('visivel')
        setTimeout(() => list.classList.add('visible'), 300);
      }

    isMenuExpanded = !isMenuExpanded;
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel .item');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    document.querySelector('.carousel').style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
