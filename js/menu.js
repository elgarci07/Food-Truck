// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

var navList = document.getElementById("nav-lists");

function Show() {
    navList.classList.add("_Menus-show");
}

function Hide() {
    navList.classList.remove("_Menus-show");
}