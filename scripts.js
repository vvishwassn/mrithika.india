document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 500); // Delay before showing the next image
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const productGrid = document.querySelector('.product-grid');
    const productItems = Array.from(document.querySelectorAll('.product-item'));

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const matchingItems = productItems.filter(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            return productName.includes(query);
        });

        const nonMatchingItems = productItems.filter(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            return !productName.includes(query);
        });

        // Clear the product grid and append matching items first
        productGrid.innerHTML = '';
        matchingItems.forEach(item => productGrid.appendChild(item));
        nonMatchingItems.forEach(item => productGrid.appendChild(item));
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'cart.html'; // Redirect to the cart section page
        });
    });
});
