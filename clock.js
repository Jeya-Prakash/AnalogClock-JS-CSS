var d = document.querySelector('.dial');
dialColor();
function dialColor() {
    var rgb = [];
    for (var i = 0; i < 3; i++)
        rgb.push(random_255());
    d.style.backgroundColor = 'rgb(' + rgb.toString() + ')';
}
d.addEventListener("click", dialColor);
// var luma = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
// if luma>40--->light color
// else dark color

var s = document.querySelector('.seconds'),
    m = document.querySelector('.minutes'),
    h = document.querySelector('.hours');

rotate(s, Number(new Date().getSeconds() * 6));
setInterval(function () {
    rotate(s, Number(new Date().getSeconds() * 6));
}, 500);

rotate(m, Number(new Date().getMinutes() * 6));
setInterval(function () {
    rotate(m, Number(new Date().getMinutes() * 6));
}, 500 * 15);

var hourDegree = Number((30 * (new Date().getHours() - 12) + (Math.ceil(new Date().getMinutes() * 0.5))));
rotate(h, hourDegree);
setInterval(function () {
    rotate(h, hourDegree);
    hourDegree += 0.5;
}, 1000 * 60);

function rotate(el, deg) {
    el.style.transform = 'rotate(' + deg + 'deg)';
}
function random_255() {
    return Math.round(Math.random() * 255);
}