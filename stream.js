$(function () {
    $(".toggler").click(function () {
        $(this).next().toggleClass("collapsed");
        $(this).toggleClass("toggled"); // this just rotates the expander arrow
    });
});
let initialHeight = document.getElementById('PlayerContainer').getBoundingClientRect().height;




window.addEventListener('resize', e =>{
    console.log(document.getElementById('PlayerContainer').getBoundingClientRect().height);
});


document.querySelectorAll(".menu-item").forEach(elem => {
    elem.addEventListener("click", e =>{
        let link = e.target.getAttribute("data-title");
        let video = document.getElementById('my-video_html5_api');
        video.src = link;
        video.load();
        video.play();
    })
})
