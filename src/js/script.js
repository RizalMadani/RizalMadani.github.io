// @ts-check
'use strict';

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
    if (toggler.ariaExpanded === 'true') {
        window.history.back();
        current_toggler = () => void 0;
    }
    else {
        window.location.hash = '#menu';
        current_toggler = toggle_menu;
    }

    toggle_menu()
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
    if (hash.includes('#project-')) {
        open_prodesc();
        current_toggler = open_prodesc;
    } else if(hash !== '#menu'){
        current_toggler();
        current_toggler = () => void 0;
        current_project = '';
    }
}


document.getElementById('this-specific').onclick = () => {
    const srl = atob('YWlsdG86cml6YWxtYWRhbmk3MEBnbWFpbC5jbw==');
    window.location.href = 'm'+srl+'m';
}