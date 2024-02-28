const contactForm = document.getElementById("contact-email");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    }).then(()=> {
        //url
        window.location.href="/thankyou.html";
    }).catch((e) => alert('Error Thank You'))
})