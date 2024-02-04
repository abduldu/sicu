document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const submenu = document.getElementById('submenu');

    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        submenu.classList.toggle('open');
    });

    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!target.closest('.dropdown')) {
            submenu.classList.remove('open');
        }
    });
});
