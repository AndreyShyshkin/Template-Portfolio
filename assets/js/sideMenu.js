let moreBtn = Select("nav .right .more-btn");
let closeBtn = Select("nav .right #nav-menu .button");
let navMenu = Select("nav .right #nav-menu");

moreBtn.onclick = () => navMenu.classList.add("active");
closeBtn.onclick = () => navMenu.classList.remove("active");
console.log("test");
