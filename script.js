const form = document.querySelector("form")
const input = form.querySelector("input")
const list = document.querySelector(".todo-list")
const footer = document.querySelector("footer");
const closeBtn = footer.querySelector(".close-btn");

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const value = input.value.trim()
  if(value === '') return

  const li = document.createElement('li')

  li.innerHTML = `    
    <label>
      <input type="checkbox">
      <span class="checkbox-icon"></span>
      <p>${value}</p>
    </label>
    <button class="trash-btn"><img src="assets/trash.svg" alt=""></button>
    `

  const trashBtn = li.querySelector(".trash-btn")

  trashBtn.addEventListener("click", () => {
    const allItems = document.querySelectorAll(".todo-list li")

    let atLeastOneRemoved = false

    allItems.forEach((item) => {
      const checkbox = item.querySelector('input[type="checkbox"]')
      if(checkbox && checkbox.checked) {
        item.remove()
        atLeastOneRemoved = true
      }
    })

    if(atLeastOneRemoved) {
      footer.style.display = "flex"

      setTimeout(() => {
        footer.style.display = "none";
      }, 3000);
    }
  })

  list.appendChild(li)
  input.value = ''
})

closeBtn.addEventListener("click", () => {
  footer.style.display = "none"
})