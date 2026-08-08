

const ourPartnersPageFromHome = document.getElementById("ourPartnersMainPage")

ourPartnersPageFromHome.addEventListener("click", ourPartnersRedirect)

function ourPartnersRedirect() {
    window.location.href = 'https://wowe.vercel.app/partners.html'
}

const gunsLolImagePartnersPage = document.getElementById("gunsDotLolImgPartners")

gunsDotLolImgPartners.addEventListener("click", redirectToGunsLolPartnersPage)

function redirectToGunsLolPartnersPage() {
    window.location.href = 'https://guns.lol'
}
