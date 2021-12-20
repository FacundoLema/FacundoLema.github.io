document.addEventListener('DOMContentLoaded', function() {
    let languages = document.querySelectorAll(".language")
    languages.forEach(element => {
        element.addEventListener("mouseover", function() {
            document.querySelector(".active-language").style.backgroundColor = "#EEE";})
        element.addEventListener("mouseout", function() {
            document.querySelector(".active-language").style.backgroundColor = "#D9D9F5";})
        });
})