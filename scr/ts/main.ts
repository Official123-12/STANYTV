// Type definitions
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

// DOM Elements
const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement;
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i') as HTMLElement;

// Theme Toggle
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
  html.setAttribute('data-theme', 'light');
  themeIcon.className = 'fa-solid fa-sun';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeIcon.className = newTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  
  // Update meta theme-color
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', newTheme === 'light' ? '#ffffff' : '#0a0a12');
  }
});

// Toast Notification
const toast = document.getElementById('toast') as HTMLDivElement;
const toastMessage = document.getElementById('toast-message') as HTMLSpanElement;

function showToast(message: string, type: 'success' | 'error' = 'success') {
  toastMessage.textContent = message;
  toast.className = 'toast show';
  if (type === 'error') {
    toast.style.borderLeftColor = '#ef4444';
    const icon = toast.querySelector('i') as HTMLElement;
    icon.className = 'fa-solid fa-circle-xmark';
    icon.style.color = '#ef4444';
  } else {
    toast.style.borderLeftColor = 'var(--neon)';
    const icon = toast.querySelector('i') as HTMLElement;
    icon.className = 'fa-solid fa-check-circle';
    icon.style.color = 'var(--neon)';
  }
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Copy Buttons
document.querySelectorAll('.code-block').forEach(block => {
  const copyBtn = block.querySelector('.btn-copy') as HTMLButtonElement;
  if (!copyBtn) return;
  
  copyBtn.addEventListener('click', async () => {
    const code = block.querySelector('code')?.textContent || '';
    try {
      await navigator.clipboard.writeText(code.trim());
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      showToast('✓ Copied to clipboard!');
      
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
      }, 2000);
    } catch (err) {
      showToast('Failed to copy', 'error');
      console.error('Copy failed:', err);
    }
  });
});

// Back to Top
const backToTop = document.getElementById('backToTop') as HTMLAnchorElement;

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Nav Active State on Scroll
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

function updateNavActive() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id') || '';
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNavActive);
window.addEventListener('load', updateNavActive);

// Particles Animation
const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let particles: Particle[] = [];
let animationFrame: number;
let isAnimating = true;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 20000), 40);
  particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1
    });
  }
}

function drawParticles() {
  if (!isAnimating || !ctx) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw connections
  ctx.strokeStyle = 'rgba(0, 207, 255, 0.08)';
  ctx.lineWidth = 0.4;
  
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.globalAlpha = 0.15 * (1 - dist / 100);
        ctx.stroke();
      }
    }
    
    // Update position
    particles[i].x += particles[i].vx;
    particles[i].y += particles[i].vy;
    
    // Bounce off edges
    if (particles[i].x < 0 || particles[i].x > canvas.width) particles[i].vx *= -1;
    if (particles[i].y < 0 || particles[i].y > canvas.height) particles[i].vy *= -1;
    
    // Draw particle
    ctx.beginPath();
    ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 207, 255, ${particles[i].opacity})`;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  
  animationFrame = requestAnimationFrame(drawParticles);
}

// Initialize particles
function initParticles() {
  resizeCanvas();
  createParticles();
  if (isAnimating) drawParticles();
}

// Event listeners
window.addEventListener('resize', () => {
  clearTimeout((window as any).resizeTimer);
  (window as any).resizeTimer = setTimeout(initParticles, 200);
});

document.addEventListener('visibilitychange', () => {
  isAnimating = !document.hidden;
  if (isAnimating) {
    drawParticles();
  } else {
    cancelAnimationFrame(animationFrame);
  }
});

// Reduce motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  isAnimating = false;
  canvas.style.display = 'none';
} else {
  initParticles();
}

// Year Update
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navBar = document.querySelector('.nav-bar') as HTMLElement;
      const navHeight = navBar ? navBar.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Lazy loading for images (if needed)
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    const lazyImg = img as HTMLImageElement;
    if (lazyImg.dataset.src) {
      lazyImg.src = lazyImg.dataset.src;
    }
  });
}