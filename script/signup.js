// toggle date

const month = [
  "january",
  "februari",
  "march",
  "april",
  "may",
  "juny",
  "july",
  "august",
  "september",
  "october",
  "november",
  "desember",
];

const select = document.querySelector("#month");
month.map((item) => {
    select.innerHTML += `<option value=${item}>${item}</option>`
})
