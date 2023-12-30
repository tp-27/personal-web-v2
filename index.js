document.addEventListener('DOMContentLoaded', function() {
    // scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) { // is entry intersecting viewport?
                entry.target.classList.add('show'); // make entry visible
            } 
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el)); // observe all hidden elements

    const nav = document.querySelector("nav");
    const scrollWatcher = document.createElement('div');

    scrollWatcher.setAttribute('data-scroll-watcher', '');
    nav.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
        nav.classList.toggle("sticking", !entries[0].isIntersecting);
    }); 

    navObserver.observe(scrollWatcher);

    const dropdownInfoBtn = document.querySelectorAll(".highlight-subheading");
    dropdownInfoBtn.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            const dropdownContent = dropdown.querySelector('.highlight-content');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });
});

function showMenu() {
    var menu = document.querySelector(".sidebar");
    menu.style.display = "block";
}

function closeMenu() {
    var menu = document.querySelector(".sidebar");
    menu.style.display = "none";
}
