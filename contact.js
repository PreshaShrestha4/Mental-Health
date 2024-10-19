document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission
            alert('Form submitted successfully!');
            form.reset();
            resetValidation();
        }
    });

    function validateForm() {
        let isValid = true;

        // Name validation
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            setError(name, 'Name is required');
            isValid = false;
        } else {
            setSuccess(name);
        }

        // Email validation
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            setError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            setError(email, 'Provide a valid email address');
            isValid = false;
        } else {
            setSuccess(email);
        }

        // Date validation
        const date = document.getElementById('date');
        if (date.value === '') {
            setError(date, 'Date is required');
            isValid = false;
        } else {
            setSuccess(date);
        }

        // Phone validation
        const phone = document.getElementById('phone');
        if (phone.value.trim() === '') {
            setError(phone, 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phone.value.trim())) {
            setError(phone, 'Provide a valid phone number');
            isValid = false;
        } else {
            setSuccess(phone);
        }

        // Gender validation
        const gender = document.getElementById('gender');
        if (gender.value === '') {
            setError(gender, 'Please select a gender');
            isValid = false;
        } else {
            setSuccess(gender);
        }

        // Message validation
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            setError(message, 'Message is required');
            isValid = false;
        } else {
            setSuccess(message);
        }

        return isValid;
    }

    function setError(element, message) {
        const formGroup = element.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message');

        if (!errorDisplay) {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            formGroup.appendChild(errorElement);
        } else {
            errorDisplay.textContent = message;
        }

        element.classList.add('error');
        element.classList.remove('success');
    }

    function setSuccess(element) {
        const formGroup = element.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message');

        if (errorDisplay) {
            errorDisplay.remove();
        }

        element.classList.add('success');
        element.classList.remove('error');
    }

    function resetValidation() {
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(formGroup => {
            const input = formGroup.querySelector('input, select, textarea');
            const errorDisplay = formGroup.querySelector('.error-message');

            if (errorDisplay) {
                errorDisplay.remove();
            }

            input.classList.remove('error', 'success');
        });
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhone(phone) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(String(phone));
    }
});