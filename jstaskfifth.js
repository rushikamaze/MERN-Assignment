document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const websiteInput = document.getElementById('website');
    const messageInput = document.getElementById('message');
    
    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const websiteError = document.getElementById('websiteError');
    const messageError = document.getElementById('messageError');
    
    // Hide error messages initially
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    websiteError.style.display = 'none';
    messageError.style.display = 'none';
    
    // Add form submit event listener
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let isValid = true;
      
      // Validate name
      if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
      } else {
        nameError.style.display = 'none';
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
      
      // Validate website
      const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/\w-]*)*\/?$/;
      if (!urlRegex.test(websiteInput.value)) {
        websiteError.style.display = 'block';
        isValid = false;
      } else {
        websiteError.style.display = 'none';
      }
      
      // Validate message
      if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
      } else {
        messageError.style.display = 'none';
      }
      
      if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
      }
    });
    
    // Add input event listeners to hide error messages on input
    nameInput.addEventListener('input', function() {
      if (nameInput.value.trim() !== '') {
        nameError.style.display = 'none';
      }
    });
    
    emailInput.addEventListener('input', function() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput.value)) {
        emailError.style.display = 'none';
      }
    });
    
    websiteInput.addEventListener('input', function() {
      const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/\w-]*)*\/?$/;
      if (urlRegex.test(websiteInput.value)) {
        websiteError.style.display = 'none';
      }
    });
    
    messageInput.addEventListener('input', function() {
      if (messageInput.value.trim() !== '') {
        messageError.style.display = 'none';
      }
    });
  });