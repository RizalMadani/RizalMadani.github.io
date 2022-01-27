// @ts-check
'use strict';

window.addEventListener('load', () => {
    // fade anim delay + fade anim duration + threshold = 4.2
    let time_out = (2.4 + 0.8 + 1) * 1000;

    setTimeout(() => {
        let cover = document.getElementById('cover');

        cover.style.display = 'none';
    }, time_out);
});


const toggler = document.getElementById('nav-toggler');
let current_toggler = () => void 0;

const toggle_menu = () => {
    const header = document.querySelector('header');
    header.classList.toggle('h-16');
    header.classList.toggle('open-nav');

    const child = toggler.children[0];
    child.classList.toggle('pressed');

    if (toggler.ariaExpanded === 'true')
        toggler.ariaExpanded = 'false';
    else
        toggler.ariaExpanded = 'true';
}

toggler.onclick = () => {
    if (window.location.hash === '#menu') {
        window.history.back();
        return;
    }

    window.location.hash = '#menu';
}


const project_cards = document.querySelectorAll('.project-card');
const btn_back = document.getElementById('btn-back');
let current_project = '';

const open_prodesc = () => {
    if (current_project === '')
        return;

    const project_description = document.querySelector(current_project)
    const alt_header = document.getElementById('alt-header');

    project_description.classList.toggle('open-prodesc');
    alt_header.classList.toggle('open-alt-header');
}

project_cards.forEach((project_card) => {
    project_card.addEventListener('click', () => {
        const target = project_card.getAttribute('data-target');
        window.location.hash = current_project = target;
    });    
});

btn_back.onclick = () => {
    window.history.back();
}


window.onhashchange = () => {
    const hash = window.location.hash;
    if (hash === '#menu') {
        toggle_menu();
        current_toggler = toggle_menu;
    } else if (hash.includes('#project-')) {
        open_prodesc();
        current_toggler = open_prodesc;
    } else {
        current_toggler();
        current_toggler = () => void 0;
        current_project = '';
    }
}


document.getElementById('this-specific').onclick = () => {
    const srl = atob('YWlsdG86cml6YWxtYWRhbmk3MEBnbWFpbC5jbw==');
    window.location.href = 'm'+srl+'m';
}