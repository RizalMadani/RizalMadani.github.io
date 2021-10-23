'use strict';

// const image_project_translate = 'lg:-translate-y-16';
const project_cards = document.querySelectorAll('.project-card');
const btn_back = document.getElementById('btn-back');
let prodesc_target = -1;

project_cards.forEach((project_card, i) => {

    project_card.addEventListener('click', () => {
        prodesc_target = i;
    });

    project_card.addEventListener('click', openProDesc);
});

// btn_back.onclick = openProDesc();
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


function transition1(project_card, set) {
    let top, left;

    if (set) {
        let pos = project_card.getBoundingClientRect();

        top = pos.top+'px';
        left = pos.left+'px';
    }
    else {
        top = '0';
        left = '0';
    }

    // let pos = project_card.getBoundingClientRect();

    //     top = pos.top+'px';
    //     left = pos.left+'px';

    console.log({'top': top, 'left': left});

    let project_description = document.getElementById('prodesc-1');

    project_description.style.top = top;
    project_description.style.left = left;
}


const toggler = document.getElementById('nav-toggler');

toggler.onclick = () => {
    // let menu = document.getElementById('menu-nav');
    const header = document.querySelector('header');
    
    header.classList.toggle('h-16');
    header.classList.toggle('open-nav');
    // header.classList.toggle('h-80');
    // header.classList.toggle('shadow-header');

    const child = toggler.children[0];

    child.classList.toggle('pressed');
}