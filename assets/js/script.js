'use strict';

window.addEventListener('load', () => {
    // fade anim delay + fade anim duration + threshold = 4.2
    let time_out = (2.4 + 0.8 + 1) * 1000;

    setTimeout(() => {
        let cover = document.getElementById('cover');

        cover.style.display = 'none';
    }, time_out);
});

const project_cards = document.querySelectorAll('.project-card');
const btn_back = document.getElementById('btn-back');
let prodesc_target = -1;

project_cards.forEach((project_card, i) => {

    project_card.addEventListener('click', () => {
        prodesc_target = i;
    });

    project_card.addEventListener('click', openProDesc);
});

btn_back.addEventListener('click', openProDesc);

function openProDesc() {
    const project_description = document.getElementsByClassName('prodesc')[prodesc_target];
    const alt_header = document.getElementById('alt-header');

    project_description.classList.toggle('open-prodesc');
    alt_header.classList.toggle('open-alt-header');

    if (prodesc_target != -1) {
        prodesc_target == -1
    }
}

document.getElementById('this-specific').onclick = () => {
    const srl = atob('YWlsdG86cml6YWxtYWRhbmk3MEBnbWFpbC5jbw==');
    window.location.href = 'm'+srl+'m';
}

const toggler = document.getElementById('nav-toggler');

toggler.onclick = () => {
    const header = document.querySelector('header');
    
    header.classList.toggle('h-16');
    header.classList.toggle('open-nav');

    const child = toggler.children[0];

    child.classList.toggle('pressed');
}