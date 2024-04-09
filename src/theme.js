const toggle = document.getElementById('toggle');

toggle.addEventListener('change', function () {
    const buttons = document.querySelectorAll('button');
    const body = document.querySelector('body');
    const content = document.querySelector('#content');
    const sidebar = document.querySelector('#sidebar');

    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        content.classList.remove("dark-theme");

        buttons.forEach((button) => {
            button.classList.remove("dark-theme");
        })
    } else {
        body.classList.add("dark-theme");
        content.classList.add("dark-theme");
        buttons.forEach((button) => {
            button.classList.add("dark-theme");
        })
    }
});

