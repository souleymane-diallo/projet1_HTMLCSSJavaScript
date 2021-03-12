/* gestion du popup  */

const offers = document.getElementById('offers');
const tooltip = document.querySelector('.tooltip');
offers.addEventListener('mousemove', event => {
    if (event.target.nodeName !== "LI") return;
    const li = event.target;
    setPosition(event.clientX + 20, event.clientY + 20);
});
offers.addEventListener('mouseover', event => {
    if (event.target.nodeName !== "LI" && event.target.nodeName !== 'STRING') return;
    const li = event.target;

    let priceInfo = li.querySelector('p.price-info');
    if (priceInfo === null) {
        tooltip.style.display = 'none';
        return;
    }

    const description = priceInfo.textContent;
    const titre = li.childNodes[0].textContent;
    tooltip.style.display = 'flex';
    tooltip.querySelector('h4').innerText = titre;
    tooltip.querySelector('p').innerText = description;

});

/***disparution du popup */
offers.querySelector('ul').addEventListener('mouseout', () => tooltip.style.display = 'none');
/******fonction setposition */
function setPosition(x, y) {

    if (window.matchMedia('(max-width:34.25rem)'.matches)) {
        tooltip.style.transform = `translate(1rem,${y}px)`;
    } else {
        tooltip.style.transform = `translate(${x}px,${y}px)`;
    }

}




// menu hamburger
$(document).ready(function() {
    $(".menu-toggle-btn").click(function() {
        $(this).toggleClass("fa-times");
        $(".nav-bar").toggleClass("active");
    })
});