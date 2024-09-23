document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('hover', function(event) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;

        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });
});
