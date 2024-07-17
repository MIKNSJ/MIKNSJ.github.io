/* Code Snippet: https://www.w3schools.com/howto/howto_js_dropdown.asp */
function clickMenuButton() {
    document.getElementById("nav_icon").classList.toggle("change");
    document.getElementById("dd_menu").classList.toggle("show");
    document.getElementById("menu_01").classList.toggle("show_menu_options");
    document.getElementById("menu_02").classList.toggle("show_menu_options");
    document.getElementById("menu_03").classList.toggle("show_menu_options");
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

        var dropdowns = document.getElementsByClassName("menu_options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show_menu_options")) {
                openDropdown.classList.remove("show_menu_options");
            }
        }

        document.getElementById("nav_icon").classList.remove("change");
    }
}
