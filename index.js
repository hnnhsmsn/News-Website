let heart = document.querySelectorAll("div.favorite");
heart.forEach(favorite => {
    favorite.addEventListener('click', () => favorite.classList.toggle("color"));
});

let check = document.querySelectorAll("span.check");
check.forEach(check => {
    check.addEventListener('click', function() {
        check.classList.toggle("read");
        check.style.display = "block";
    });
});

let news = document.getElementById("news");
let close = document.querySelectorAll("span.close");
close.forEach(close => {
    close.addEventListener('click', function() {
        
        const card = close.closest("div.card").remove();
    });
});