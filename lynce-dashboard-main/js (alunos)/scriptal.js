//Sidebar toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive")
    }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

/*-------FORM---------*/

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sTelefone = document.querySelector('#m-telefone')
const sEmail = document.querySelector('#m-email')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sTelefone.value = itens[index].telefone
    sEmail.value = itens[index].email
    id = index
  } else {
    sNome.value = ''
    sTelefone.value = ''
    sEmail.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.telefone}</td>
    <td>${item.email}</td>
    <td class="acao1">
      <button onclick="editItem(${index})"><img src="img (funcionarios)/edit.png"></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><img src="img (funcionarios)/delet.png" ></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sTelefone.value == '' || sEmail.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].telefone = sTelefone.value
    itens[id].email = sEmail.value
  } else {
    itens.push({'nome': sNome.value, 'telefone': sTelefone.value, 'email': sEmail.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('lyncedb.cdsmk6a6ill0.us-east-2.rds.amazonaws.com')) ?? [] /*adicionar banco de dados*/
const setItensBD = () => localStorage.setItem('lyncedb.cdsmk6a6ill0.us-east-2.rds.amazonaws.com', JSON.stringify(itens))  /*adicionar banco de dados*/

loadItens()


