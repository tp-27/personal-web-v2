
function showMenu() {
    var menu = document.querySelector(".sidebar");
    menu.style.display = "block";
}

function closeMenu() {
    var menu = document.querySelector(".sidebar");
    menu.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {

    // scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) { // is entry intersecting viewport?
                entry.target.classList.add('show'); // make entry visible
                // entry.style.transition = "none";
                // entry.style.WebkitTransition = "none";
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
        // console.log(entries);
    }); 


    navObserver.observe(scrollWatcher);

    const dropdownInfoBtn = document.querySelectorAll(".highlight-subheading");
        
    dropdownInfoBtn.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(e) {
            console.log(e);
            if (dropdown.style.height != "80px") {
                dropdown.style.height = "80px";
                dropdown.style.alignItems = "center";
                const content = dropdown.querySelector(".highlight-content");
                content.style.display = "none";
            } else {
                dropdown.style.height = "auto";
                dropdown.style.alignItems = "flex-start";

                // dropdown.style.paddingTop = "25px";

                const content = dropdown.querySelector(".highlight-content");
                content.style.display = "block";
                content.style.paddingTop = "50px";
                content.style.paddingBottom = "25px";

            }
        });
    });
});
