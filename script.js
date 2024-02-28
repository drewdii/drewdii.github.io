document.addEventListener("DOMContentLoaded", function() {
  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
  accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
      // Close the currently active accordion item if it's not the one being clicked
      const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
      if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
        currentlyActiveAccordionItemHeader.classList.remove("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      // Toggle the active class and maxHeight for the clicked accordion item
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
});