document.addEventListener('DOMContentLoaded', function() {
    // Мобільне меню
    const openBtn = document.querySelector('.open-menu');
    const closeBtn = document.querySelector('.nav-close');
    const menu = document.querySelector('.nav-menu');

    openBtn.addEventListener('click', function() {
        menu.classList.add('active');
        openBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', function() {
        menu.classList.remove('active');
        openBtn.style.display = 'block';
    });

    // Ініціалізація слайдера
    const slider = document.querySelector('.testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;
    let isAnimating = false;
    const animationDuration = 600;

    // Створення крапок навігації
    function createDots() {
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.slide = index;
            dot.addEventListener('click', function() {
                if (!isAnimating) {
                    const direction = index > currentSlide ? 'next' : 'prev';
                    goToSlide(index, direction);
                }
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Оновлення активних крапок
    function updateDots(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Перехід до конкретного слайду
    function goToSlide(index, direction) {
        if (isAnimating || index === currentSlide) return;
        
        isAnimating = true;
        const currentActive = slides[currentSlide];
        const nextActive = slides[index];
        
        // Додаємо класи анімації
        if (direction === 'next') {
            nextActive.classList.add('slide-next');
            currentActive.classList.add('slide-next-out');
        } else {
            nextActive.classList.add('slide-prev');
            currentActive.classList.add('slide-prev-out');
        }
        
        nextActive.classList.add('active');
        currentActive.classList.remove('active');
        
        currentSlide = index;
        
        // Завершення анімації
        setTimeout(() => {
            nextActive.classList.remove('slide-next', 'slide-prev');
            currentActive.classList.remove('slide-next-out', 'slide-prev-out');
            isAnimating = false;
        }, animationDuration);
        
        updateDots(index);
    }

   

    // Ініціалізація
    createDots();
    slides[0].classList.add('active');
});

// Обробники кнопок (якщо потрібні)
document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Додайте свою логіку тут
    });
});

document.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Додайте свою логіку тут
    });
});

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    let allValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allValid = false;
        input.classList.add('is-invalid'); // для Bootstrap підсвітки
      } else {
        input.classList.remove('is-invalid');
      }
    });

    if (allValid) {
      form.style.display = 'none';
      successMessage.style.display = 'block';
    } else {
      alert("Please fill in all required fields.");
    }
  });
  closebutton.addEventListener('click', () => {
  const input = contactFormWrapper.querySelector('.form-row input, .form-row textarea'); 
  // шукаємо інпут або textarea всередині .form-row в contactFormWrapper

  if (input && input.value.trim() === '') {
    alert('Будь ласка, введіть текст!');
    return; // не ховаємо, якщо поле пусте
  }

  contactFormWrapper.style.display = 'none'; // ховаємо, якщо текст введено
  alert('Повідомлення надіслано');
});



