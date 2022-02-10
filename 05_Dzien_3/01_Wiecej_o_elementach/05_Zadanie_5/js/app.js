/*
  Poniżej napisz kod rozwiązujący zadania
 */
let elements = document.querySelectorAll(".exercise ul li");

for (let i = 0; i < elements.length; i++) {
    elements[i].dataset.id = i+1;
}
