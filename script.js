// GSAP ScrollTrigger প্লাগিন রেজিস্টার করা
gsap.registerPlugin(ScrollTrigger);

// Page Load Animation
document.body.style.overflow = 'hidden';
window.addEventListener('load', () => {
    setTimeout(() => {
        gsap.to('.loader-wrapper', {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                document.querySelector('.loader-wrapper').style.display = 'none';
            }
        });
        pageLoadAnimation();
        document.body.style.overflow = 'auto';
    }, 1000);
});

function pageLoadAnimation() {
    let tl = gsap.timeline();

    tl.from('.nav-bar', {
        y: '-100%',
        opacity: 0,
        duration: 0.5
    })
    .from('.hero-wrapper', {
        y: '5%',
        opacity: 0,
        duration: 0.5
    }, 'p')
    .from('.hero-right img', {
        scale: 1.2,
        duration: 0.5
    }, 'p');
}

// Menu Open and Close Functions
let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    let isOpen = menu.classList.contains('menu-open');

    gsap.to(menu, {
        height: isOpen ? '0' : 'auto',
        duration: 0.3
    });

    menu.classList.toggle('menu-open');
    menu.classList.toggle('menu-close');

    menuIcon.classList.toggle('open');
});

// Margin for the Main container
function mainMargin() {
    let mainSection = document.querySelector('main');
    let nav = document.querySelector('nav');

    if (nav && mainSection) {
        mainSection.style.marginTop = getComputedStyle(nav).height;
    }
}

mainMargin();
window.addEventListener('resize', mainMargin);

// Common Scroll Animation Function
function scrollAnimation(target, options = {}) {
    gsap.from(target, {
        opacity: 0,
        duration: 0.5,
        y: options.y || '0%',
        scale: options.scale || 1,
        stagger: options.stagger || 0,
        scrollTrigger: {
            trigger: target,
            scroller: 'body',
            start: 'top 60%',
            end: 'bottom 50%',
            toggleActions: 'play none none none'
        }
    });
}

// Apply Scroll Animations
scrollAnimation('.other-match-section-head h1');
scrollAnimation('.other-match, .more-matches', { stagger: 0.2 });
scrollAnimation('.news-section>h1');
scrollAnimation('.news-1, .news-2, .news-3, .news-4');
scrollAnimation('.news-1 img, .news-2 img, .news-3 img, .news-4 img', { scale: 1.2 });
scrollAnimation('.more-news-button');
scrollAnimation('.player-award-card');
scrollAnimation('.player-award-head h1, .player-award-head h2');
scrollAnimation('.player-award-text h1, .player-award-text-2 h1', { y: '30%', stagger: 0.2 });
scrollAnimation('.player-award-image img', { y: '30%' });
scrollAnimation('.footer-wrapper');

// Smooth Scroll Functions
document.querySelector('.other-match-section')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#standings')?.scrollIntoView({ behavior: "smooth" });
});

document.querySelector('.scroll-link')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#other-matches')?.scrollIntoView({ behavior: "smooth" });
});

// Update iFrame Source
function playChannelIframe(url) {
    const iframe = document.getElementById('player');
    if (iframe) {
        iframe.src = url;
    }
}