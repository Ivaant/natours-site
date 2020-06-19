window.onload = function() {
    const navCheckbox = document.querySelector(".navigation__checkbox");
    const navList = document.querySelector(".navigation__list");
    const popupElem = document.querySelector(".popup");

    navList.addEventListener("click", function(event) {
        navCheckbox.checked = false;
    });

    popupElem.addEventListener("click", function(event) {
        if (event.target.matches(".popup")) {
            window.location.hash = "#section-tours";
        }

    });
}