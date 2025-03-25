// Add shadow to header on scroll
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Handle Sign In/Sign Out button
document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.querySelector('.btn');

    if (localStorage.getItem('isLoggedIn') === 'true') {
        signInButton.textContent = 'Sign Out';
        signInButton.href = '#'; // No redirect needed here
        signInButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            localStorage.removeItem('isLoggedIn'); // Clear login state
            signInButton.textContent = 'Sign In'; // Update button immediately
            signInButton.href = '/login.html'; // Set to login page
            window.location.href = '/index.html'; // Reload the page
        });
    } else {
        signInButton.textContent = 'Sign In';
        signInButton.href = '/login.html'; // Point to login page when not logged in
    }
});

// Home Section Swiper (if applicable, unchanged from your original)
var homeSwiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// Coming Soon Section Swiper (unchanged from your original)
var comingSwiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2, 
        },
        768: {
            slidesPerView: 3,
        },
        968: {
            slidesPerView: 4,
        },
    },
});