function menuMutation() {
    const isNavigation = document.getElementById('navigation')
    if(isNavigation) {
        const isObchodBtn = isNavigation.querySelector('a[href="/obchod/"]');
        const isAboutShopBtn = isNavigation.querySelector('a[href="/o-nakupu/"]');
        if(isObchodBtn || isAboutShopBtn) {
            isObchodBtn.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            isAboutShopBtn.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
        }
    }
}

menuMutation();