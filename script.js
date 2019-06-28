const state = [{
    name: "",
    phone: "",
    email: "",
    address: ""
}]

function render (state) {
    let contact = ""

    for (let i=0; i<state.length; i++) {
        contact += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${state[i].name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${state[i].phone}</li>
                    <li class="list-group-item">${state[i].email}</li>
                    <li class="list-group-item">${state[i].address}</li>
                </ul>
                
            </div>`

    }
    return contact;
}

function paint () {
    const contactlist = document.getElementById('contactList')
    contactlist.innerHTML = render (state)
}

const addContact = document.getElementById('addContact')
addContact.addEventListener('click', function (){
    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const email = document.getElementById('email')
    const address = document.getElementById('address')
    state.push ({
        name: name.value,
        phone: phone.value,
        email: email.value,
        address: address.value
    })
    paint ()
    name.value =""
    phone.value =""
    email.value =""
    address.value =""
})
paint ()

const close = document.getElementById('close')
// const cross = document.getElementById('cross')

close.addEventListener('click', function (){
    document.getElementById('cross').click();
})