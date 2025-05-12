document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('.open-menu');
    const closeBtn = document.querySelector('.nav-close');
    const menu = document.querySelector('.nav-menu');

    openBtn.addEventListener('click', function () {
        menu.classList.add('active');
        openBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('active');
        openBtn.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо елементи слайдера
    const slides = document.querySelectorAll('.testimonial-slide');
    const dot = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let isAnimating = false;
    const animationDuration = 600; // Тривалість анімації в мс
    // Автоматичне створення крапок
const dotsContainer = document.querySelector('.slider-dots');
dotsContainer.innerHTML = ''; // Очистити існуючі крапки

slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.dataset.slide = index;
    dot.addEventListener('click', () => {
        const direction = index > currentSlide ? 'next' : 'prev';
        goToSlide(index, direction);
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot'); // Оновити посилання на крапки
    // Функція для оновлення індикаторів (крапок)
    function updateDots(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
  
    // Функція для анімації переходу
    function goToSlide(index, direction) {
      if (isAnimating || index === currentSlide) return;
      
      isAnimating = true;
      const currentActive = slides[currentSlide];
      const nextActive = slides[index];
      
      // Додаємо класи анімації
      currentActive.classList.remove('active');
      nextActive.classList.add('active');
      nextActive.classList.add(direction === 'next' ? 'slide-next' : 'slide-prev');
      
      // Оновлюємо поточний слайд
      currentSlide = index;
      
      // Видаляємо класи анімації після завершення
      setTimeout(() => {
        nextActive.classList.remove('slide-next', 'slide-prev');
        isAnimating = false;
      }, animationDuration);
      
      // Оновлюємо крапки
      updateDots(index);
    }
  
    // Функція для наступного слайда
    function nextSlide() {
      const newIndex = (currentSlide + 1) % slides.length;
      goToSlide(newIndex, 'next');
    }
  
    // Функція для попереднього слайда
    function prevSlide() {
      const newIndex = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(newIndex, 'prev');
    }
  
    // Додаємо обробники подій для крапок
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const direction = index > currentSlide ? 'next' : 'prev';
        goToSlide(index, direction);
      });
    });
  
    
  
    // Ініціалізація
    updateDots(0);
  });
  // Обробники кліків для кнопок (як у банері)
document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Тут ваш код для переходу до секції Features
        console.log('Перехід до Features');
    });
});

document.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Тут ваш код для завантаження
        console.log('Завантаження теми');
    });
});
