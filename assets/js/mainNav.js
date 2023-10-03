function onPointerPressed (pointerName){
    console.log(pointerName)
    switch (pointerName) {
        case "about-me":
            scrollTo({
                top: positions[0],
                left: 0,
                behavior: "smooth",
            });
            break;
        case "projects":
            scrollTo({
                top: positions[1],
                left: 0,
                behavior: "smooth",
            });
            break;
        case "reviews":
            scrollTo({
                top: positions[2],
                left: 0,
                behavior: "smooth",
            });
            break;
        case "blog":
            scrollTo({
                top: positions[3],
                left: 0,
                behavior: "smooth",
            });
            break;
        case "contacts":
            scrollTo({
                top: positions[4],
                left: 0,
                behavior: "smooth",
            });
            break;
    }
}
$(".pointer").each(
    function() {
        if($(this).hasClass("about-me"))
            $(this).on("click", () => {onPointerPressed("about-me"); })
        else if($(this).hasClass("projects"))
            $(this).on("click", () => {onPointerPressed("projects"); })
        else if($(this).hasClass("reviews"))
            $(this).on("click", () => {onPointerPressed("reviews"); })
        else if($(this).hasClass("blog"))
            $(this).on("click", () => {onPointerPressed("blog"); })
        else if($(this).hasClass("contacts"))
            $(this).on("click", () => {onPointerPressed("contacts"); })
    }
);
window.onscroll = onScrollChange;
function onScrollChange(){
    $(".pointer").removeClass("active");
    let switchPoint = window.screen.height / 2.5;
    if(window.scrollY < positions[1] - switchPoint){
        Select(".pointer.about-me").classList.add("active");
    }    
    else if(window.scrollY >= positions[1] - switchPoint && window.scrollY < positions[2] - switchPoint){
        Select(".pointer.projects").classList.add("active");
    }    
    else if(window.scrollY >= positions[2] - switchPoint && window.scrollY < positions[3] - switchPoint){
        Select(".pointer.reviews").classList.add("active");
    }    
    else if(window.scrollY >= positions[3] - switchPoint && window.scrollY < positions[4] - switchPoint){
        Select(".pointer.blog").classList.add("active");
    }    
    else if(window.scrollY >= positions[4] - switchPoint){
        Select(".pointer.contacts").classList.add("active");
    }
}
let positions = [];
$(".wrapper section").each(function() {positions.push($(this)[0].offsetTop);});

console.dir(positions);