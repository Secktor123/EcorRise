
(function() {
    emailjs.init("DK0I2HslxqBQ5KaWz");
})();
function validatePhone(input) {
    let value = input.value;
    if (value.startsWith('+')) {
        value = '+' + value.slice(1).replace(/[^0-9]/g, '');
    } else {
        value = value.replace(/[^0-9]/g, '');
    }
    if (value.length > 16) {
        value = value.slice(0, 16);
    }
    
    input.value = value;
}
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('input[name="user_phone"]');
    phoneInput.addEventListener('input', function() {
        validatePhone(this);
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;          
    emailjs.sendForm('service_1n92xb8', 'template_b54w4uw', this)
        .then(function() {
            alert('Thank you! Your message has been sent successfully.');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Sorry, there was an error sending your message. Please try again later.');
            console.log('Error:', error);
        })
        .finally(function() {
            button.textContent = originalText;
            button.disabled = false;
        });
}); 