// Set the start date: February 14, 2016
const startDate = new Date(2016, 1, 14); // Month is 0-indexed (1 = February)

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    
    // Calculate years
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();
    
    // Adjust for negative values
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    
    if (hours < 0) {
        hours += 24;
        days--;
    }
    
    if (days < 0) {
        // Get the number of days in the previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    
    if (months < 0) {
        months += 12;
        years--;
    }
    
    // Update the display
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the timer immediately and then every second
updateTimer();
setInterval(updateTimer, 1000);