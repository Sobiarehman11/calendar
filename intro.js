const monthYear = document.getElementById('monthYear');
const dates = document.getElementById('dates');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    // Clear previous dates
    dates.innerHTML = '';

    // Get first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Fill in the dates
    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += '<div class="date"></div>'; // Empty divs for leading days
    }

    for (let day = 1; day <= lastDate; day++) {
        dates.innerHTML += `<div class="date">${day}</div>`;
    }
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();
