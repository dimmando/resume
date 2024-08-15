function sendMail(contactForm) {
    emailjs.send("service_ndmogbx", "template_yl8pohb", {
        "from_name": contactForm.name.value,
        "emailaddress": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}