


const courses = document.querySelectorAll('.course');

courses.forEach(course => {
    const courseLine = course.querySelector('.course-line');
    const courseContent = course.querySelector('.course-content');
    const openIcon = course.querySelector('.open-icon');
    const closeIcon = course.querySelector('.close-icon');


    courseLine.addEventListener('click', () => {
        courseContent.classList.toggle('visible');
        // Use class toggling for icons
        if (courseContent.classList.contains('visible')) {
            openIcon.classList.add('hidden');  // Hide open icon
            closeIcon.classList.remove('hidden'); // Show close icon
        } else {
            closeIcon.classList.add('hidden');  // Hide close icon
            openIcon.classList.remove('hidden'); // Show open icon
        }
    })
})


const cp1 = document.querySelector('.cp1');
const cp2 = document.querySelector('.cp2');
const cs1 = document.querySelector('.cs1');
const cs2 = document.querySelector('.cs2');


cp1.addEventListener('click', () => {
    const target = document.querySelector('.CP1'); // Select the target element
    const offset = 100; // Space above the element

    // Calculate the position of the target element
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

    // Scroll to the calculated position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});


cp2.addEventListener('click', () => {
    const target = document.querySelector('.CP2'); // Select the target element
    const offset = 100; // Space above the element

    // Calculate the position of the target element
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

    // Scroll to the calculated position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});



cs1.addEventListener('click', () => {
    const target = document.querySelector('.CS1'); // Select the target element
    const offset = 100; // Space above the element

    // Calculate the position of the target element
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

    // Scroll to the calculated position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});




cs2.addEventListener('click', () => {
    const target = document.querySelector('.CS2'); // Select the target element
    const offset = 100; // Space above the element

    // Calculate the position of the target element
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

    // Scroll to the calculated position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});




const switchtheme = document.getElementById('theme-toggle');

let theme = 'dark';

switchtheme.addEventListener('click', () => {
    const navbar = document.getElementsByClassName('navbar'); // Multiple elements
    const header = document.getElementsByClassName('header');
    const title = document.getElementsByClassName('title');
    const desc = document.getElementsByClassName('desc');
    const cps = document.getElementsByClassName('cps');
    const sem = document.getElementsByClassName('sem');
    const footer = document.getElementsByClassName('footer');

    const toggleClasses = (elements, addClass, removeClass) => {
        Array.from(elements).forEach(element => {
            element.classList.add(addClass);
            element.classList.remove(removeClass);
        });
    };

    if (theme === 'dark') {
        toggleClasses(navbar, 'lightnavbar', 'darknavbar');
        toggleClasses(header, 'lightheader', 'darkheader');
        toggleClasses(title, 'lighttitle', 'darktitle');
        toggleClasses(desc, 'lightdesc', 'darkdesc');
        toggleClasses(cps, 'lightcps', 'darkcps');
        toggleClasses(sem, 'lightsem', 'darksem');
        toggleClasses(footer, 'lightfooter', 'darkfooter');

        theme = 'light';
    } else {
        toggleClasses(navbar, 'darknavbar', 'lightnavbar');
        toggleClasses(header, 'darkheader', 'lightheader');
        toggleClasses(title, 'darktitle', 'lighttitle');
        toggleClasses(desc, 'darkdesc', 'lightdesc');
        toggleClasses(cps, 'darkcps', 'lightcps');
        toggleClasses(sem, 'darksem', 'lightsem');
        toggleClasses(footer, 'darkfooter', 'lightfooter');

        theme = 'dark';
    }
});
