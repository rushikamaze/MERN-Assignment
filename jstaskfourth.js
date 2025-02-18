document.getElementById('showDateBtn').addEventListener('click', function() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    
    document.getElementById('dateOutput').textContent = `${day}/${month}/${year}`;
  });
  
  document.getElementById('showTimeBtn').addEventListener('click', function() {
    const date = new Date();
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = dayNames[date.getDay()];
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[date.getMonth()];
    
    const day = date.getDate().toString().padStart(2, '0');
    
    const year = date.getFullYear();
    
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    const offset = date.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offset / 60)).toString().padStart(2, '0');
    const offsetMinutes = Math.abs(offset % 60).toString().padStart(2, '0');
    const offsetSign = offset <= 0 ? '+' : '-';
    
    const timezone = `GMT${offsetSign}${offsetHours}${offsetMinutes}`;
    
    let timezoneName = '';
    try {
      timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezoneName === 'Asia/Kolkata') {
        timezoneName = 'India Standard Time';
      }
    } catch (e) {
      timezoneName = 'Local Time';
    }
    
    document.getElementById('timeOutput').textContent = 
      `${dayName} ${monthName} ${day} ${year} ${hours}:${minutes}:${seconds} ${timezone} (${timezoneName})`;
  });