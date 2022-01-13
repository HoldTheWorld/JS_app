let container = document.querySelector('.items_block')
const form =  document.getElementsByTagName('form')[0]
const submit = document.getElementsByTagName('button')[0]

submit.addEventListener('click', function addItem() {
  const itemName = document.querySelector('#item_name').value
  const itemDescription = document.querySelector('#item_description').value
  const imgLink = document.querySelector('#img_link').value
  const itemPrice = document.querySelector('#item_price').value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  container.insertAdjacentHTML("beforeend", 
  `<div class="item_container">
  <img src="${imgLink}">
  <div class='description'>
    <h4>${itemName}</h4>
    <p> ${itemDescription}</p>
    <p> ${itemPrice} руб. </p> 
  </div>
  </div>`)
  form.reset()
  submit.disabled = true
})

