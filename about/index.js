document.getElementById('font_switch').onclick = function() {
    let e = document.querySelectorAll('div');

    if (e[0].style.fontFamily == 'Consolas') {
        e.forEach(item => item.style.fontFamily = 'Nevis');
    } else {
        e.forEach(item => item.style.fontFamily = 'Consolas');
    }
}

// make all urls open in new tabs (except the font switch)
document.querySelectorAll('a:not(#font_switch)').forEach(item => item.target = 'blank');

// socials urls bc yea it's more compact whatever
twt.href = 'https://twitter.com/miacolonthree';
pspage.href = 'https://en.pronouns.page/miacolonthree';

// another link
document.querySelector('div > div > div > a').href = 'https://twitter.com/colorschemer/status/1769936852620894615';
