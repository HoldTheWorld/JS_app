function onPageLoaded() {

  let container = document.querySelector('.items_block')
  const form =  document.getElementsByTagName('form')[0]
  const submit = document.getElementsByTagName('button')[0]
  
  function createItem() {
    const itemName = document.querySelector('#item_name').value
    const itemDescription = document.querySelector('#item_description').value
    const imgLink = document.querySelector('#img_link').value
    const itemPrice = document.querySelector('#item_price').value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    
    const item = document.createElement("div")
    item.classList.add("item_container")

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deletebutton")
    deleteBtn.innerHTML = '<i class="fa fa-trash">'

    const img = document.createElement("img")
    img.setAttribute("src", imgLink)

    const description = document.createElement("div")
    description.classList.add("description")

    const itemNameH = document.createElement('h4')
    itemNameH.append(itemName)

    const itemDescriptionP = document.createElement('p')
    itemDescriptionP.append(itemDescription)

    const itemPriceP = document.createElement('p')
    itemPriceP.append(`${itemPrice} руб.`)

    description.append(itemNameH,itemDescriptionP, itemPriceP)

    item.append(img, description, deleteBtn)

    container.appendChild(item)

    listenDeleteTodo(deleteBtn)
    form.reset()
    submit.disabled = true
   
    sessionStorage.setItem('items', container.innerHTML)

  }

  function listenDeleteTodo(element) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
        sessionStorage.setItem('items', container.innerHTML)
    });
}

function loadTodos() {
  const data = sessionStorage.getItem("items");
  if (data) {
      container.innerHTML = data;
  }
  const deleteButtons = document.querySelectorAll(".deletebutton");
  for (const button of deleteButtons) {
      listenDeleteTodo(button);
  }
}

loadTodos();
  submit.addEventListener('click', () => createItem())

}

document.addEventListener("DOMContentLoaded", onPageLoaded);

