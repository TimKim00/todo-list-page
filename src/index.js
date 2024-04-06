const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

toggle.addEventListener('change', function() {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
    } else {
        body.classList.add("dark-theme");
    }
});