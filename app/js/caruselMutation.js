function carouselMutation() {
    const isCarousel = document.querySelector('body.has-carousel');
    if(isCarousel) {
        const carouselItems = document.querySelectorAll('.carousel .item');
        carouselItems.forEach(item => {
            const link = item.querySelector('a img');
            if(link) {
                const additiveAltText = link.getAttribute('alt')
                if(additiveAltText) {
                    item.setAttribute('aria-label', additiveAltText);
                    const bannerTitle = item.querySelector('.extended-banner-title');
                    const preTitleText = document.createElement('span');
                    preTitleText.classList.add('extended-banner-pretitle');
                    preTitleText.textContent = additiveAltText;
                    bannerTitle.insertAdjacentElement('beforebegin', preTitleText);
                    
                }
            }
        });
    }
}
carouselMutation();