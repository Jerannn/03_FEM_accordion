const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const accordionContainer = accordion.parentElement;
    updateAccordionUI(accordionContainer);
  });
});

function updateAccordionUI(currAccordion) {
  const accordions = document.querySelectorAll(".main__accordion");

  const controlAccordionHeight = (accordion, accordionBody) =>
    (accordionBody.style.maxHeight = accordion.classList.contains("active")
      ? `${accordionBody.scrollHeight}px`
      : "0");

  accordions.forEach((accordion) => {
    const accordionBody = accordion.querySelector(".accordion__body");

    if (currAccordion === accordion && accordion.classList.contains("active")) {
      accordion.classList.remove("active");
      controlAccordionHeight(accordion, accordionBody);
      return;
    }

    currAccordion === accordion
      ? accordion.classList.add("active")
      : accordion.classList.remove("active");
    controlAccordionHeight(accordion, accordionBody);

    accordion.querySelector(".accordion__btn").src = `./assets/images/icon-${
      accordion.classList.contains("active") ? "minus" : "plus"
    }.svg`;
  });
}
