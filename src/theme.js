const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const content = document.querySelector('#content');
const sidebar = document.querySelector('#sidebar');

toggle.addEventListener('change', function() {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        content.classList.remove("dark-theme");

        buttons.forEach((button) => {
            button.classList.remove("dark-theme");
            if (button.id=="logo") {
                button.style.backgroundImage = "url('./assets/svg/logo_light.svg')";
            }
        })
    } else {
        body.classList.add("dark-theme");
        content.classList.add("dark-theme");
        buttons.forEach((button) => {
            button.classList.add("dark-theme");
            if (button.id=="logo") {
                button.style.backgroundImage = "url('./assets/svg/logo_dark.svg')";
            }
        })
    }
});

