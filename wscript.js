// Page Load Animation
document.body.style.overflow = 'hidden';
window.addEventListener('load', () => {
    setTimeout(() => {
        gsap.to('.loader-wrapper', {
            opacity: 0,
            duration: 0.3
        })
        pageLoadAnimation();
        gsap.to('.loader-wrapper', {
            display: 'none'
        })
        document.body.style.overflow = 'auto';
    }, 1000);
})
function pageLoadAnimation() {
    let tl = gsap.timeline();

    tl.from('.nav-bar', {
        y: '-100%',
        opacity: 0,
        duration: 0.5
    })
    tl.from('.hero-wrapper', {
        y: '5%',
        opacity: 0,
        duration: 0.5
    }, 'p')
    tl.from('.hero-right img', {
        scale: 1.2,
        duration: 0.5
    }, 'p')
}

// Menu Open and Close Functions
let menuIcon = document.querySelector('.menu-icon');
let menuIconI = document.querySelector('.menu-icon i');
let menu = document.querySelector('.menu');

function menuOpen() {
    gsap.to(menu, {
        height: 'auto',
        duration: 0.3
    })

    menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    menu.classList.remove('menu-close');
    menu.classList.add('menu-open');

}

function menuClose() {
    gsap.to(menu, {
        height: '0',
        duration: 0.3
    })

    menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';

    menu.classList.remove('menu-open');
    menu.classList.add('menu-close');
}

menuIcon.addEventListener('click', () => {
    if (menu.classList.contains('menu-close')) {
        menuOpen();
    }
    else {
        menuClose();
    }
});

// Margin for the Main container
function mainMargin() {
    let mainSection = document.querySelector('main');
    let navStyle = getComputedStyle(document.querySelector('nav'));
    mainSection.style.marginTop = navStyle.getPropertyValue('height');
}

mainMargin();
window.addEventListener('resize', mainMargin);

// Other Match Section Scroll Animation
function otherMatchSectionScroll() {
    gsap.from('.other-match-section-head h1', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.other-match-section-head h1',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.other-match, .more-matches', {
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.other-match-section-head h1',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
}
otherMatchSectionScroll();

// News Section Scroll Animation
function newsSectionScroll() {
    gsap.from('.news-section>h1', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-section>h1',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.news-1', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-1',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.news-2', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-2',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.news-3', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-3',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.news-4', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-4',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.news-1 img', {
        scale: 1.2,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-1 img',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.news-2 img', {
        scale: 1.2,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-2 img',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.news-3 img', {
        scale: 1.2,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-3 img',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.news-4 img', {
        scale: 1.2,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.news-4 img',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.more-news-button', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.more-news-button',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
}
newsSectionScroll();

// Player of the year Scroll Animation
function playrOfTheYearSectionScroll() {
    gsap.from('.player-award-card', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.player-award-card',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.player-award-head h1, .player-award-head h2', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.player-award-head h1, .player-award-head h2',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.player-award-text h1', {
        opacity: 0,
        y: '30%',
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.player-award-text h1',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.player-award-text-2 h1', {
        opacity: 0,
        y: '30%',
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.player-award-text-2 h1',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
    gsap.from('.player-award-image img', {
        opacity: 0,
        y: '30%',
        duration: 0.5,
        scrollTrigger: {
            trigger: '.player-award-text h1',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
}
playrOfTheYearSectionScroll();

// scroll to section
// Smooth scroll to standings (Rankings)
document.querySelector('.other-match-section').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector('#standings'); // Section with id 'standings'
    targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to 'standings'
});

// Smooth scroll to other matches section (BD-Matches)
document.querySelector('.scroll-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector('#other-matches'); // Section with id 'other-matches'
    targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to 'other-matches'
});

// player
function playChannelIframe(url) {
    // Get the iframe element by its ID
    const iframe = document.getElementById('player');

    // Update the iframe's src with the selected URL
    iframe.src = url;
}





// Footer Scroll Animation
function footerScroll() {
    gsap.from('.footer-wrapper', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.footer-wrapper',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 60%'
        }
    })
}
footerScroll();
