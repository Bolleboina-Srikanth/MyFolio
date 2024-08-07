$(document).ready(function(){
    // Typed Initiate
    if ($('.top-header h2').length == 1) {
        var typed_strings = $('.top-header p').text();
        var typed = new Typed('.top-header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    $('.progress-bar').each(function() {
        var percentage = $(this).data('percentage');
        $(this).css('width', percentage + '%');
    });

    document.addEventListener("DOMContentLoaded", function() {
        const headerOffset = document.querySelector(".navbar").offsetHeight;
        const links = document.querySelectorAll('a[href^="#"]');
    
        links.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;
    
                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            });
        });
    });
    
});
