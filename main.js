// execute script after page loads

window.onload = function ready(){
    // toggle button

    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active');
    });


    //masonry js
    let grid = document.querySelector('#site-main .recent-work-area .images-flex');
    let masonry = new Masonry(grid, {
        itemSelector: ".flex-item",
        gutter: 100,
        fitWidth: true
    });
}


// rellax js code

let rellax = new Rellax('.rellax', {
    center: true
});