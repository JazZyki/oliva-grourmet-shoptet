const isCookiePopup = document.querySelector('.siteCookies');
if (isCookiePopup) {
    const cookieSetup = isCookiePopup.querySelector('.siteCookies__links');
    const otherButtons = isCookiePopup.querySelector('.siteCookies__buttonWrap');
    if (cookieSetup) {
        otherButtons.insertAdjacentElement('beforeend', cookieSetup);
    }
}
