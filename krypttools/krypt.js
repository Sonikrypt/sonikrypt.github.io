
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const sideMenu = document.getElementById('sideMenu');
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('open');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const hamburger = document.querySelector('.hamburger');
  const sideMenu = document.getElementById('sideMenu');

  const isClickInside = hamburger.contains(event.target) || sideMenu.contains(event.target);

  if (!isClickInside) {
    hamburger.classList.remove('active');
    sideMenu.classList.remove('open');
  }
});
let lastScrollTop = 0;
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', function () {
  if (window.innerWidth > 768) return; // Only apply on mobile

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    hamburger.style.opacity = '0';
    hamburger.style.pointerEvents = 'none'; // Prevent accidental clicks when invisible
  } else {
    // Scrolling up
    hamburger.style.opacity = '1';
    hamburger.style.pointerEvents = 'auto';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll
});
//swipe 
document.addEventListener('DOMContentLoaded', () => {
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 70;

  const hamburger = document.querySelector('.hamburger');
  const sideMenu = document.querySelector('.side-menu');

  if (!hamburger || !sideMenu) {
    console.error("Missing .hamburger or .side-menu element");
    return;
  }

  // Swipe detection
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  });

  function handleSwipeGesture() {
    if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe right → open menu
      sideMenu.classList.add('open');
      hamburger.classList.add('active');
    } else if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe left → close menu
      sideMenu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  }

  // Fixed: Ensure click toggles properly
  hamburger.onclick = function () {
    const isOpen = sideMenu.classList.contains('open');
    sideMenu.classList.toggle('open', !isOpen);
    hamburger.classList.toggle('active', !isOpen);
  };
});