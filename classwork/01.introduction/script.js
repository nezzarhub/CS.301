

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const myForm = document.querySelector('#myForm')



myForm.addEventListener('submit', (e) => { 
    e.preventDefault()
    const user = {
        username: username.value,
        email: email.value,
        password: password.value
    }
console.log(user) 

})