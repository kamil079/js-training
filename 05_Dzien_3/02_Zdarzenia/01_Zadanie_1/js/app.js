document.addEventListener("DOMContentLoaded", () => {
  let parentEls = document.querySelectorAll(".parent");
  let childrenEls = document.querySelectorAll(".children");

  parentEls.forEach((el) =>
    el.addEventListener("mouseover", el.classList.add("show"))
  );

  //   for (let i = 0; i < parentEls.length; i++) {
  //     parentEls[i].addEventListener(
  //       "mouseover",
  //       childrenEls[i].classList.add("show")
  //     );
  //   }
});
