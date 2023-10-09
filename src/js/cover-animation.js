window.addEventListener('load', () => {
    // fade anim delay + fade anim duration + threshold = 4.2
    let time_out = (2.4 + 0.8 + 1) * 1000;

    setTimeout(() => {
        let cover = document.getElementById('cover');

        cover.style.display = 'none';
    }, time_out);
});