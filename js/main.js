let elForm = document.querySelector(".form-input");
let elInput = document.querySelector(".input_typing");
let elCard = document.querySelector("#cards");
let label = document.querySelector("#name");
let lebel2 = document.querySelector("#phone");
let lebel3 = document.querySelector("#adress");
let elLebel = document.querySelector("#content");
let size = document.getElementsByName("btnradio");
let list = document.querySelector("#list");
const Arr = [];

let Arryorder = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.dir(evt.target[0].value);
  const elInputVal = evt.target[0].value;
  const lebel2 = evt.target[1].value;
  const lebel3 = evt.target[2].value;

  let selectedList = list.value;
  let pizzaSize = "";
  for (i = 0; i < size.length; i++) {
    if (size[i].checked) {
      pizzaSize = size[i];
    }
  }
  let pizzaSizeInSm = pizzaSize.value;

  const Cards = {
    id: Arr[Arr.length - 1]?.id + 1 || 0,
    task: elInputVal,
    phone: lebel2,
    Adres: lebel3,
    thicknes: selectedList,
    pZ: pizzaSizeInSm,
    isCompleted: false,
    isSubmit: false,
  };
  Arr.push(Cards);
  RenderOrder();
  // console.log(Arr);
  elInput.values = "";
});

function RenderOrder() {
  cards.innerHTML = "";
  let newOrder = [];
  for (let i = 0; i < Arr.length; i++) {
    const templete = `  
    <div class="card border-success mb-3" style="max-width: 18rem; border: 1px solid white ; background: #fff; padding: 1rem;">
    <div class="card-header bg-transparent border-success">Order1</div>
    <div class="card-body text-success">
       <div class="user">
        <strong>Name:${Arr[i].task}</strong> 
        <strong>phone: ${Arr[i].phone}</strong>
        <strong>Address:${Arr[i].Adres}</strong>
       </div>
  <hr >
       <div class="newadd">
        <strong> Dough thickeness:${Arr[i].thicknes}</strong>
        <strong>Size:${Arr[i].pZ}</strong>
        <strong>On pizza:</strong>
        <strong>Add:</strong>
       </div>
    <hr>
    </div>
    <div class="card-footer bg-transparent border-success">Total:$</div>
  </div>`;
    cards.innerHTML = cards.innerHTML + templete;
  }
}
