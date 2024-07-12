function clickMenuButton() {
    document.getElementById("nav_icon").classList.toggle("change");
    document.getElementById("dd_menu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".nav_button")) {
        var dropdowns = document.getElementsByClassName("menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }

        document.getElementById("nav_icon").classList.remove("change");
    }
}