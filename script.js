function validateEmail() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
        alert("Subscribed successfully!");
    } else {
        alert("Please enter a valid email address.");
    }
}