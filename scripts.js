document.getElementById('whatsappIcon').addEventListener('click', function (event) {
    var callOptions = document.getElementById('callOptions');
    event.stopPropagation(); // Prevent the click on the button from triggering the document click event
    if (callOptions.style.display === "block") {
        callOptions.style.display = "none";
    } else {
        callOptions.style.display = "block";
    }
});

// Close the call options when clicking outside
document.addEventListener('click', function (event) {
    var callOptions = document.getElementById('callOptions');
    var whatsappIcon = document.getElementById('whatsappIcon');
    
    // Check if the click is outside both the call options and WhatsApp icon
    if (callOptions.style.display === "block" && !callOptions.contains(event.target) && !whatsappIcon.contains(event.target)) {
        callOptions.style.display = "none";
    }
});





 // Function to handle the redirect based on the selected country
 function redirect() {
    const selectedUrl = document.getElementById("countrySelect").value;
    if (selectedUrl) {
        window.location.href = `https://${selectedUrl}`;
    } else {
        alert("Please select a country.");
    }
}

// Function to close popup
function closePopup(event) {
    const popup = document.getElementById("popup");
    popup.style.display = 'none';
}




function toggleMobileNav() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    menuIcon.classList.toggle('active'); // Toggle animation for menu icon
    mobileNav.classList.toggle('active'); // Toggle mobile nav visibility
    overlay.classList.toggle('active'); // Toggle overlay
}

function toggleSubmenu(event) {
    event.preventDefault();
    const submenu = event.currentTarget.nextElementSibling;
    submenu.classList.toggle('active');
}





    // JavaScript to change the modal image source
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-bs-img-src');
            document.getElementById('modal-image').src = imgSrc;
        });
    });











    const journeySections = document.querySelectorAll('.journey-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { 
        root: document.querySelector('.our-journey-container'), 
        threshold: 0.5 
    });
    
    journeySections.forEach(section => observer.observe(section));
    








    let currentIndex = 0;
    const slides = document.querySelectorAll('.service-slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        // Ensure the index loops correctly within bounds
        currentIndex = (index + totalSlides) % totalSlides;
        const offset = -currentIndex * 100; // Set offset for the slider
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }
    
    // Button Event Listeners
    document.querySelector('.next-slide').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
    
    document.querySelector('.prev-slide').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
    
    // Initialize the first slide
    showSlide(currentIndex);
    
    
    











