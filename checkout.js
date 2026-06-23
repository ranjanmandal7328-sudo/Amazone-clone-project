const form = document.getElementById("shippingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    window.location.href = "paymentsucc.html";
});