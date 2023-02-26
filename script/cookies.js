function showCookieConsentPopup() {
    var cookieConsentPopup = document.getElementById("cookie-consent-popup");
    cookieConsentPopup.style.display = "block";
}

function hideCookieConsentPopup() {
    var cookieConsentPopup = document.getElementById("cookie-consent-popup");
    cookieConsentPopup.style.display = "none";
}

function setCookieConsent() {
    hideCookieConsentPopup();
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function checkCookieConsent() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("cookieConsent=")) {
            return cookie.substring("cookieConsent=".length, cookie.length) === "true";
        }
    }
    return false;
}

if (!checkCookieConsent()) {
    showCookieConsentPopup();
    document.getElementById("cookie-consent-button").addEventListener("click", setCookieConsent);
    document.getElementById("cookie-no-consent-button").addEventListener("click", setCookieConsent);
}
