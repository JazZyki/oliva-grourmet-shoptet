const isProductsTitle = document.querySelector('.homepage-products-heading-1')

if (isProductsTitle) {
    isProductsTitle.textContent = 'Lidé u nás nejvíce nakupují'
    const productsSlider = document.querySelector('.products-wrapper');
    if (productsSlider) {
        productsSlider.insertAdjacentElement('afterbegin', isProductsTitle);
    }
}
