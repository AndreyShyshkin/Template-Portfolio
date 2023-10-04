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

function getPositionIndex(){
    for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];
        if(pos > window.scrollY){
            return i;
        }
    }
    return positions.length - 1;
}
function magneticScroll(){
    // if(scrollToPos != window.screenY && scrollToPos != -1){
    //     return;
    // }
    // if(scrollToPos != window.screenY){
    //     scrollToPos = -1;
    // }
    let scrollDirection = Math.sign(previusScrollPosition - parseInt(window.scrollY));
    previusScrollPosition = parseInt(window.scrollY);
    if(scrollDirection == 0){
        return;
    }
    const currentBlockStartPositionIndex = getPositionIndex();
    if(scrollDirection > 1){
        if(currentBlockStartPositionIndex != 0){
            scrollToPos = positions[currentBlockStartPositionIndex - 1];
            scrollTo({
                top: positions[currentBlockStartPositionIndex - 1],
                left: 0,
                //behavior: "smooth",
            });
        }
    }
    else{
        scrollToPos = positions[currentBlockStartPositionIndex + 1];
        if(currentBlockStartPositionIndex != positions.length - 1){
            scrollTo({
                top: positions[currentBlockStartPositionIndex + 1],
                left: 0,
                //behavior: "smooth",
            });
        }
    }
}
function setPointerState (){
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
function onScrollChange(e){
    //magneticScroll()
    setPointerState();
}
let positions = [];
let previusScrollPosition = 0;
let scrollToPos = -1;
$(".wrapper section").each(function() {positions.push($(this)[0].offsetTop);});