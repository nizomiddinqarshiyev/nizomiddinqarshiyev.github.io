

// Language selector dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
  // Language selector
  const selector = document.getElementById('languageSelector');
  const menu = document.getElementById('dropdownMenu');
  selector.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
  document.addEventListener('click', function() {
    menu.style.display = 'none';
  });

  // Search tabs toggle
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      // You can add logic here to change search fields based on tab
    });
  });

  // Enlarge hero section on double click (2x)
  const heroSection = document.querySelector('.hero-section');
  let enlarged = false;
  heroSection.addEventListener('dblclick', function() {
    if (!enlarged) {
      heroSection.style.transform = 'scale(2)';
      heroSection.style.transformOrigin = 'top left';
      heroSection.style.transition = 'transform 0.4s cubic-bezier(.4,2,.6,1)';
      enlarged = true;
    } else {
      heroSection.style.transform = 'scale(1)';
      enlarged = false;
    }
  });
});
// Language selector dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
const selector = document.getElementById('languageSelector');
const menu = document.getElementById('dropdownMenu');
selector.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', function() {
    menu.style.display = 'none';
});
});


