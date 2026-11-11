// Мобильное меню
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Модальное окно
const modal = document.getElementById('booking-modal');
const modalTitle = document.getElementById('modal-title');
const bookingForm = document.getElementById('booking-form');
const heroForm = document.getElementById('hero-form');

function openModal(serviceName) {
    if (modal && modalTitle) {
        modalTitle.textContent = serviceName || 'Запись в «Цунами»';
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    if (modal) {
        modal.classList.add('hidden');
    }
}

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

[bookingForm, heroForm].forEach(form => {
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Заявка принята! Администратор автокомплекса «Цунами» свяжется с вами для подтверждения времени.');
            form.reset();
            closeModal();
        });
    }
});

// Проверка времени работы (08:00 - 20:00)
function checkWorkStatus() {
    const statusEl = document.getElementById('work-status');
    if (!statusEl) return;
    const hour = new Date().getHours();
    if (hour >= 8 && hour < 20) {
        statusEl.textContent = '🟢 Сейчас открыто (до 20:00)';
    } else {
        statusEl.textContent = '🕒 Работаем с 08:00 до 20:00';
    }
}
checkWorkStatus();