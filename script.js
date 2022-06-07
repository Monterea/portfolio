//vytvoreni promenne buttons,ktera ma jako hodnotu referenci na nase tlacitko v HTML kodu
const buttons = document.querySelectorAll("[data-carousel-button]")

//klasicka forEach smycka
buttons.forEach(button => {
  //pridani eventListeneru, ktery ceka az na tlacitko v tomto pripadne kliknete, aby vykonal nejakou cinnost
  button.addEventListener("click", () => {
    //podmink, ktera kontroluje zda klikame na tlacitko next nebo prev a podle toho bud dochazi k inkrementaci nebo dekrementaci indexu
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    //querySelector, ktery rika, ze nase promenna slides je list[data-slides] v nejblizsim carouselu[data-carusel] ke tlacitku na ktere klikame
    //toto je dulezite ve chvili, kdy byste meli carouselu na strane vice
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    // nastaveni active slidu, tady by melo byt v tuto chvili uz pomerne jasne co se zde deje
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})