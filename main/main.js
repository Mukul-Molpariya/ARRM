document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const moreInfo = this.nextElementSibling;
            if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
                moreInfo.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                moreInfo.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});