/* ============================================
   ניצן - משהו מתוק | Product Catalog & UI Logic
   ============================================ */

const WHATSAPP_BASE = 'https://wa.me/9720505851612?text=';

const products = [
  {
    id: 1,
    name: 'מארז מתוק קטן',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 250,
    image: 'images/box-small.png',
    badge: 'פופולרי',
    description: 'מארז מפנק עם מבחר עוגיות פיסטוק ושוקולד חלב, מגולגלות נוטלה וקינדר, וגלילי וופל קדאיף ונוטלה. מושלם למתנה או לאירוח.'
  },
  {
    id: 2,
    name: 'מארז מתוק גדול',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 320,
    image: 'images/box-large.png',
    badge: 'הנמכר ביותר',
    description: 'מארז גדול ומרשים עם בראוניז קרמל מלוח ושוקולד חלב, כדורי ביסקוויט, מגולגלות קקאו קינדר ומגולגלות נוטלה קינדר.'
  },
  {
    id: 3,
    name: 'עוגיות פיסטוק ושוקולד',
    category: 'cookies',
    categoryLabel: 'עוגיות',
    price: 80,
    image: 'images/box-small.png',
    description: 'עוגיות פיסטוק עשירות עם ציפוי שוקולד חלב ופיסטוקים קצוצים מלמעלה. טעם שלא שוכחים.'
  },
  {
    id: 4,
    name: 'מגולגלות נוטלה וקינדר',
    category: 'cookies',
    categoryLabel: 'עוגיות',
    price: 75,
    image: 'images/box-large.png',
    description: 'מגולגלות שוקולד רכות במילוי נוטלה וקינדר. כל ביס הוא חוויה.'
  },
  {
    id: 5,
    name: 'בראוניז קרמל מלוח',
    category: 'cakes',
    categoryLabel: 'עוגות',
    price: 90,
    image: 'images/box-large.png',
    description: 'בראוניז שוקולד עשירים עם שכבת קרמל מלוח וציפוי שוקולד חלב. השילוב המושלם בין מתוק למלוח.'
  },
  {
    id: 6,
    name: 'כדורי ביסקוויט שוקולד',
    category: 'desserts',
    categoryLabel: 'קינוחים',
    price: 70,
    image: 'images/box-large.png',
    description: 'כדורי ביסקוויט עם ציפוי שוקולד מריר ושוקולד חלב. קינוח מושלם לכל אירוע.'
  },
  {
    id: 7,
    name: 'גלילי וופל קדאיף ונוטלה',
    category: 'desserts',
    categoryLabel: 'קינוחים',
    price: 85,
    image: 'images/box-small.png',
    description: 'גלילי וופל קדאיף פריכים במילוי נוטלה עם ציפוי שוקולד. שילוב מנצח של טקסטורות.'
  },
  {
    id: 8,
    name: 'עוגת שוקולד ליום הולדת',
    category: 'cakes',
    categoryLabel: 'עוגות',
    price: 280,
    image: 'images/box-large.png',
    badge: 'בהזמנה',
    description: 'עוגת שוקולד מרשימה בעיצוב אישי. מושלמת לימי הולדת ואירועים. ניתן להתאים טעמים ועיצוב.'
  },
  {
    id: 9,
    name: 'מארז מתנה VIP',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 400,
    image: 'images/box-large.png',
    badge: 'פרימיום',
    description: 'המארז המרשים ביותר שלנו! כולל מבחר של כל הפינוקים - עוגיות, מגולגלות, בראוניז, כדורים וגלילי וופל. מתנה שלא שוכחים.'
  }
];

function createWhatsAppLink(productName) {
  const msg = encodeURIComponent(`היי ניצן! ראיתי את הקטלוג ואשמח להזמין: ${productName}`);
  return `${WHATSAPP_BASE}${msg}`;
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = product.category;

  card.innerHTML = `
    <div class="product-card-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
    </div>
    <div class="product-card-content">
      <div class="product-card-category">${product.categoryLabel}</div>
      <h3 class="product-card-title">${product.name}</h3>
      <p class="product-card-description">${product.description}</p>
      <div class="product-card-footer">
        <span class="product-card-price">${product.price} &#8362;</span>
        <a href="${createWhatsAppLink(product.name)}" class="product-card-order" target="_blank" rel="noopener" onclick="event.stopPropagation();">
          להזמנה
        </a>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openModal(product));
  return card;
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  filtered.forEach((product, i) => {
    const card = createProductCard(product);
    grid.appendChild(card);
    requestAnimationFrame(() => {
      setTimeout(() => card.classList.add('visible'), i * 60);
    });
  });
}

// --- Filters ---

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// --- Modal ---

const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(product) {
  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalImage').alt = product.name;
  document.getElementById('modalCategory').textContent = product.categoryLabel;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalPrice').textContent = `${product.price} \u20AA`;
  document.getElementById('modalOrderBtn').href = createWhatsAppLink(product.name);

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// --- Navbar scroll effect ---

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// --- Mobile Menu ---

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// --- Smooth scroll for anchor links ---

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// --- Init ---

renderProducts();
