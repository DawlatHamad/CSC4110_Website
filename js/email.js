function sendMail() {
    let parms = {
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_9fk8n3q", "template_6alx8dv", parms).then(alert("Email Sent!"))
}