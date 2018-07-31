// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// menu that shows only for small screens
const menu2 = document.querySelector('.menu-2');
const menuNav2 = document.querySelector('.menu-nav-2');
const menuBranding2 = document.querySelector('.menu-branding-2');

//  set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        menu2.classList.add('show');
        menuNav2.classList.add('show');
        menuBranding2.classList.add('show');

        //  set menu state
        showMenu = true;
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        menu2.classList.remove('show');
        menuNav2.classList.remove('show');
        menuBranding2.classList.remove('show');

        //  set menu state
        showMenu = false;
    }
}


//	promena boje texta ako je primarna boja pozadine tamna!!!
//	problem ako je hexa vrednost u slovima!!!
// let bodyStyle = window.getComputedStyle(document.body);
// let primaryColor = bodyStyle.getPropertyValue('--primary-color');

// primaryColor = primaryColor.replace(/#/, '');

// function setTextColor() {
// 	if(primaryColor > 444) {
// 		return '#000';
// 	}
// 	else {
// 		return '#fff';
// 	}
// }

// let textCol = setTextColor();

// document.getElementById('home').style.color = textCol;
////////////////////////////////////////////////////////////////////