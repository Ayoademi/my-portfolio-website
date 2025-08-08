document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  fetch(this.action, {
    method: "POST",
    body: new FormData(this),
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("successMessage").style.display = "block";
      this.reset();
    }
  })
  .catch(error => console.error("Error:", error));
});



// Dynamically update the copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();


// Animate skill bars when they come into view
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card').forEach(card => {
            observer.observe(card);
        });

        // Add smooth scrolling for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });