// This file assumes 'categoriesData' is available globally from 'dynamicarea.js'
// and 'dynamicContentArea' is an existing element in your HTML.

const dynamicContentArea = document.getElementById('dynamic-content-area');
let allTools = []; 
let currentFocus = -1;

/**
 * Generates and appends all category sections and tool cards to the DOM.
 */
function renderDynamicContent() {
    dynamicContentArea.innerHTML = '';

    if (typeof categoriesData === 'undefined' || !Array.isArray(categoriesData)) {
        console.error("categoriesData is not defined or is not an array. Ensure dynamicarea.js is loaded correctly.");
        return;
    }

    categoriesData.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.classList.add('category-section');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category.title;
        categorySection.appendChild(categoryTitle);

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        category.tools.forEach(tool => {
            const toolCard = document.createElement('a');
            toolCard.href = tool.url;
            toolCard.classList.add('tool-card');
            toolCard.target = "_blank";

            const cardTitle = document.createElement('span');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = tool.name;
            toolCard.appendChild(cardTitle);

            const cardDescription = document.createElement('span');
            cardDescription.classList.add('card-description');
            cardDescription.textContent = tool.description;
            toolCard.appendChild(cardDescription);

            cardContainer.appendChild(toolCard);
        });

        categorySection.appendChild(cardContainer);
        dynamicContentArea.appendChild(categorySection);
    });
}

function normalizeText(text) {
    if (typeof text !== 'string') return '';
    return text.toLowerCase().replace(/\s/g, '');
}

function filterTools(searchTerm) {
    const normalizedSearchTerm = normalizeText(searchTerm);
    if (!normalizedSearchTerm) return [];

    return allTools.filter(tool => {
        const normalizedToolName = normalizeText(tool.name);
        return normalizedToolName.includes(normalizedSearchTerm);
    });
}

function addActive(suggestions) {
    removeActive(suggestions);
    if (suggestions[currentFocus]) {
        suggestions[currentFocus].classList.add("autocomplete-active");
        suggestions[currentFocus].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

function removeActive(suggestions) {
    for (let i = 0; i < suggestions.length; i++) {
        suggestions[i].classList.remove("autocomplete-active");
    }
}

function displaySuggestions(matches) {
    const searchInput = document.getElementById('input-box');
    const suggestionBox = document.getElementById('suggestion-box');
    const notFoundMessage = document.getElementById('not-found-message');

    if (!suggestionBox || !searchInput) return;

    suggestionBox.innerHTML = "";

    if (matches.length === 0 && searchInput.value.trim().length > 0) {
        notFoundMessage.style.display = "block";
        suggestionBox.style.display = 'none';
        return;
    } else {
        notFoundMessage.style.display = "none";
    }

    if (matches.length > 0) {
        matches.forEach((tool, index) => {
            const li = document.createElement("li");
            li.textContent = tool.name;

            li.addEventListener("mouseover", () => {
                currentFocus = index;
                addActive(suggestionBox.getElementsByTagName("li"));
            });

            li.onclick = () => {
                searchInput.value = tool.name;
                highlightAndScroll(tool.element);
                suggestionBox.innerHTML = "";
                suggestionBox.style.display = 'none';
                currentFocus = -1;
            };
            suggestionBox.appendChild(li);
        });
        suggestionBox.style.display = 'block';
    } else {
        suggestionBox.style.display = 'none';
    }
}

function highlightAndScroll(cardElement) {
    const toolCards = document.querySelectorAll('.tool-card');
    const notFoundMessage = document.getElementById('not-found-message');

    toolCards.forEach(card => card.classList.remove('highlighted-card'));

    if (cardElement) {
        cardElement.classList.add('highlighted-card');
        cardElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        setTimeout(() => {
            cardElement.classList.remove('highlighted-card');
        }, 5000);
        notFoundMessage.style.display = 'none';
    } else {
        notFoundMessage.style.display = 'block';
    }
}

// New function to handle search button click
function searchTools() {
    const searchInput = document.getElementById('input-box');
    const searchTerm = searchInput.value.trim();
    const suggestionBox = document.getElementById('suggestion-box');
    
    if (searchTerm.length > 0) {
        const results = filterTools(searchTerm);
        if (results.length > 0) {
            highlightAndScroll(results[0].element);
        } else {
            highlightAndScroll(null);
        }
        suggestionBox.style.display = 'none';
    } else {
        document.querySelectorAll('.tool-card').forEach(card => card.classList.remove('highlighted-card'));
        document.getElementById('not-found-message').style.display = 'none';
        suggestionBox.style.display = 'none';
    }
    currentFocus = -1;
}

// New function to handle clear button click
function clearSearchAndSuggestions() {
    const searchInput = document.getElementById('input-box');
    const suggestionBox = document.getElementById('suggestion-box');
    const notFoundMessage = document.getElementById('not-found-message');
    
    searchInput.value = '';
    suggestionBox.innerHTML = '';
    suggestionBox.style.display = 'none';
    notFoundMessage.style.display = 'none';
    document.querySelectorAll('.tool-card').forEach(card => card.classList.remove('highlighted-card'));
    currentFocus = -1;
}

document.addEventListener('DOMContentLoaded', () => {
    renderDynamicContent();

    const searchInput = document.getElementById('input-box');
    const suggestionBox = document.getElementById('suggestion-box');
    const toolCards = document.querySelectorAll('.tool-card');
    const searchButton = document.querySelector('.search-box .search-button');
    const clearButton = document.querySelector('.search-box .clear-button');
    const notFoundMessage = document.getElementById('not-found-message');

    // Populate allTools array with references to actual DOM elements
    allTools = Array.from(toolCards).map(card => ({
        name: card.querySelector('.card-title').textContent.trim(),
        element: card
    }));

    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm.length > 0) {
                const results = filterTools(searchTerm);
                displaySuggestions(results);
            } else {
                suggestionBox.innerHTML = '';
                suggestionBox.style.display = 'none';
                notFoundMessage.style.display = 'none';
                document.querySelectorAll('.tool-card').forEach(card => card.classList.remove('highlighted-card'));
            }
            currentFocus = -1;
        });

        searchInput.addEventListener("keydown", (e) => {
            if (!suggestionBox) return;

            let suggestions = suggestionBox.getElementsByTagName("li");
            if (suggestions.length === 0 && e.key !== "Enter") return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                if (currentFocus < suggestions.length - 1) {
                    currentFocus++;
                }
                addActive(suggestions);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                if (currentFocus > 0) {
                    currentFocus--;
                }
                addActive(suggestions);
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (currentFocus > -1 && suggestions[currentFocus]) {
                    suggestions[currentFocus].click();
                } else {
                    searchTools();
                }
            }
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', searchTools);
    }

    if (clearButton) {
        clearButton.addEventListener('click', clearSearchAndSuggestions);
    }

    document.addEventListener('click', (event) => {
        if (searchInput && suggestionBox && searchButton && clearButton) {
            if (!searchInput.contains(event.target) && 
                !suggestionBox.contains(event.target) && 
                !searchButton.contains(event.target) && 
                !clearButton.contains(event.target)) {
                suggestionBox.style.display = 'none';
                currentFocus = -1;
            }
        }
    });

    if (suggestionBox) {
        suggestionBox.addEventListener("mouseleave", () => {
            removeActive(suggestionBox.getElementsByTagName("li"));
            currentFocus = -1;
        });
    }
});


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
