/* ============================================
   ניצן - משהו מתוק | Product Catalog & UI Logic
   ============================================ */

const WHATSAPP_BASE = 'https://wa.me/9720505851612?text=';

const products = [
  {
    id: 1,
    name: 'אלפחורס',
    category: 'cookies',
    categoryLabel: 'עוגיות',
    price: 60,
    image: 'images/alfachores.png',
    description: '10 יחידות אלפחורס עם מילוי דולסה דה לצ\'ה וקוקוס. עוגיית החמאה הקלאסית שנמסה בפה.'
  },
  {
    id: 2,
    name: 'עוגיות שוקולד חלב ובלונדי',
    category: 'cookies',
    categoryLabel: 'עוגיות',
    price: 95,
    image: 'images/cookies-blondi.png',
    badge: 'פופולרי',
    description: '5 יחידות קוטר 8 (גדולות). עוגיות שוקולד חלב ובלונדי - קריספי מבחוץ ורך מבפנים.'
  },
  {
    id: 3,
    name: 'מגולגלות נוטלה וקינדר',
    category: 'cookies',
    categoryLabel: 'עוגיות',
    price: 76,
    image: 'images/megulgalot-nutella.png',
    description: '12 יחידות מגולגלות במילוי נוטלה וקינדר. שכבות של בצק חמאה עם שוקולד - כל ביס הוא חוויה.'
  },
  {
    id: 4,
    name: 'מגולגלות קינדר',
    category: 'cookies',
    categoryLabel: 'עוגיות',
    price: 76,
    image: 'images/megulgalot-kinder.png',
    description: '12 יחידות מגולגלות קקאו במילוי קינדר. בצק שוקולד כהה עם שכבות קרם קינדר לבן.'
  },
  {
    id: 5,
    name: 'כדורי שוקולד',
    category: 'desserts',
    categoryLabel: 'קינוחים',
    price: 85,
    image: 'images/chocolate-balls.png',
    description: '20 יחידות כדורי שוקולד - קוקוס ושוקולד עם סוכריות צבעוניות. מושלם לאירוח ולמתנה.'
  },
  {
    id: 6,
    name: '6 עוגיות טעמים',
    category: 'cookies',
    categoryLabel: 'עוגיות',
    price: 160,
    image: 'images/cookies-6-flavors.png',
    badge: 'הנמכר ביותר',
    description: 'מבחר 6 עוגיות בטעמים: קינדר ונוטלה, חצי חצי, אמסטרדם, שוקולד קונפטי, 100% פיסטוק ופירות יער.'
  },
  {
    id: 7,
    name: 'מארז קייק פופס ועוגיות',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 200,
    image: 'images/box-cakepops.png',
    description: 'מארז מפנק עם עוגיות קרמל מלוח, נוטלה ושוקולד חלב לצד קייק פופס שוקולד חלב עם סרט ורוד.'
  },
  {
    id: 8,
    name: 'מארז מגולגלות ובראוניז',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 170,
    image: 'images/box-brownies-megulgalot.png',
    description: '16 מגולגלות קינדר + בראוניז 16x16 עם צ\'אנקים של שוקולד לבן ומריר וזילוף נוטלה.'
  },
  {
    id: 9,
    name: 'מארז עוגייה ענקית ומגולגלות',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 300,
    image: 'images/box-giant-cookie.png',
    description: 'עוגייה ענקית קוטר 16 עם מילוי ומלא תוספות + 16 יח\' מגולגלות קינדר. מתנה מרשימה!'
  },
  {
    id: 10,
    name: 'מארז יום הולדת',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 300,
    image: 'images/box-birthday.png',
    badge: 'ליום הולדת',
    description: 'מארז חגיגי עם עוגת שוקולד מעוצבת, מגולגלות נוטלה וקינדר, אלפחורס וקייק פופס. מושלם לחגיגה!'
  },
  {
    id: 11,
    name: 'מארז פרימיום',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 340,
    image: 'images/box-premium-340.png',
    badge: 'פרימיום',
    description: 'חיתוכיות שוקולד 16x16, כדורי קדאיף דובאי, 14 מגולגלות נוטלה וקינדר ועוגיות קראמבל פיסטוק עם ליבת שוקולד לבן.'
  },
  {
    id: 12,
    name: 'מארז VIP',
    category: 'boxes',
    categoryLabel: 'מארזים',
    price: 450,
    image: 'images/box-premium-450.png',
    badge: 'VIP',
    description: 'המארז הגדול והמרשים ביותר! עוגיות קראמבל פיסטוק, מגולגלות, בראוניז פיסטוק, גלילי וופל ועוד. מתנה שלא שוכחים.'
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

function isMobile() {
  return window.innerWidth <= 768;
}

function openMobileViewer(product) {
  const existing = document.getElementById('mobileViewer');
  if (existing) existing.remove();

  const viewer = document.createElement('div');
  viewer.id = 'mobileViewer';
  Object.assign(viewer.style, {
    position: 'fixed',
    top: '0', left: '0', right: '0', bottom: '0',
    zIndex: '9999',
    background: '#fff',
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch'
  });

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  Object.assign(closeBtn.style, {
    position: 'fixed',
    top: '12px', left: '12px',
    zIndex: '10000',
    width: '44px', height: '44px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
  });

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;
  Object.assign(img.style, {
    display: 'block',
    width: '100%',
    height: 'auto',
    maxWidth: '100%'
  });

  const info = document.createElement('div');
  Object.assign(info.style, {
    padding: '20px',
    fontFamily: "'Heebo', sans-serif",
    direction: 'rtl',
    textAlign: 'right'
  });

  info.innerHTML = `
    <div style="font-size:0.8rem;color:#999;letter-spacing:0.1em;margin-bottom:6px;">${product.categoryLabel}</div>
    <h3 style="font-family:'Frank Ruhl Libre',serif;font-size:1.5rem;font-weight:900;margin:0 0 12px;">${product.name}</h3>
    <p style="color:#666;font-size:0.95rem;line-height:1.7;margin:0 0 20px;">${product.description}</p>
    <div style="font-family:'Frank Ruhl Libre',serif;font-size:1.8rem;font-weight:900;margin-bottom:20px;">${product.price} \u20AA</div>
    <a href="${createWhatsAppLink(product.name)}" target="_blank" rel="noopener"
       style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px;background:#000;color:#fff;text-decoration:none;border-radius:50px;font-size:1rem;font-weight:700;font-family:'Heebo',sans-serif;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      הזמינו עכשיו
    </a>
  `;

  function closeMobileViewer() {
    viewer.remove();
    closeBtn.remove();
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeMobileViewer);

  viewer.appendChild(img);
  viewer.appendChild(info);
  document.body.appendChild(viewer);
  document.body.appendChild(closeBtn);
  document.body.style.overflow = 'hidden';
  viewer.scrollTop = 0;
}

function openModal(product) {
  if (isMobile()) {
    openMobileViewer(product);
    return;
  }

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
  const mobileViewer = document.getElementById('mobileViewer');
  if (mobileViewer) {
    mobileViewer.remove();
    const closeBtn = document.querySelector('#mobileViewer + button, body > button:last-of-type');
    if (closeBtn) closeBtn.remove();
  }
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
