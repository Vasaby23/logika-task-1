window.onload = function(){
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}




var clickCount = 0;

function showErrorOverlay() {
    clickCount++;

    if (clickCount === 2) {
        var overlay = document.getElementById('overlay');
        var errorText = document.getElementById('errorText');

        errorText.textContent = 'Навіщо жмеш? Я ж сказав я лінивий, тут нічого не буде';

        setTimeout(function () {
            overlay.style.top = '-80px';
        }, 5000);

        setTimeout(function () {
            errorText.style.opacity = '0';
        }, 7000);

        setTimeout(function () {
            errorText.textContent = 'Давай допоможу';
            errorText.style.opacity = '1';
        }, 8000);

    } else if (clickCount === 3) {
        var fullscreenImage = document.getElementById('fullscreenImage');
        var bottomImage = document.getElementById('bottomImage');

        fullscreenImage.style.display = 'block';
        bottomImage.style.display = 'block';

        document.documentElement.requestFullscreen(); // Викликаємо повноекранний режим

        setTimeout(function () {
            rotateImages();
        }, 1000);
    } else {
        var overlay = document.getElementById('overlay');
        overlay.style.top = '0';

        setTimeout(function () {
            overlay.style.top = '-80px';
        }, 7000);
    }
}

function rotateImages() {
    var fullscreenImage = document.getElementById('fullscreenImage');
    var bottomImage = document.getElementById('bottomImage');

    fullscreenImage.style.animation = 'spin 2s linear infinite';
    bottomImage.style.animation = 'spin 2s linear infinite';
}

document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.learn-button');
    button.addEventListener('click', showErrorOverlay);
});


document.addEventListener("DOMContentLoaded", function() {
    var products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        product.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1)";
        });

        product.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var productItems = document.querySelectorAll(".product-item");

    productItems.forEach(function(item) {
        item.style.cursor = "pointer";
        item.addEventListener("click", function() {
            window.location.href = "index2.html";
        });
    });
});

