
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Dynamic Year for Footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Mock Booking Form Submission Handler
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation check
            const name = document.getElementById('fullName').value.trim();
            const eventType = document.getElementById('eventType').value;
            const guests = document.getElementById('guestCount').value;
            const date = document.getElementById('eventDate').value;

            if (!name || !eventType || !guests || !date) {
                alert('Please fill out all fields to check availability.');
                return;
            }

            // Visual Success Feedback (Perfect for a demo mockup)
            const submitBtn = bookingForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Checking Availability...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${name}! This is a live preview mockup. In production, this inquiry will securely alert your team instantly.`);
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                bookingForm.reset();
            }, 1500);
        });
    }
});
