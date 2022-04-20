let form = document.querySelector('.modal-content')
let password = form.querySelector('.psw')
let login = form.querySelector('.uname')
let fields = form.querySelectorAll('.field')

    form.addEventListener('submit', function (event){
        event.preventDefault();

        let errors = form.querySelectorAll('.error')

        for (let i = 0;i< errors.length; i++){
            errors[i].remove()
        }
        let sendForm = false;

        for(let i = 0; i< fields.length; i++){
            if(!fields[i].value){
                let error = document.createElement('div')
                error.className = 'error'
                error.style.color = 'red'
                error.style.backgroundColor = 'white'
                error.innerHTML = 'Cannot be blank'
                fields[i].parentElement.insertBefore(error, fields[i])
            }
        }

            loginRegExp = /^[A-Z][a-z0-9_-]{3,19}$/
        let validLogin = loginRegExp.test(login.value)
        if(!validLogin){
            var error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.style.backgroundColor = 'white'
            error.innerHTML = 'This username is not allowed'
            login.parentElement.insertBefore(error, login)
        }
        passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        let validPass = passwordRegExp.test(password.value)
        if(!validPass){
            let error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.style.backgroundColor = 'white'
            error.innerHTML = 'This password is not allowed'
            password.parentElement.insertBefore(error, password)
        }
        if (validPass && validLogin)
            sendForm = true
       if(sendForm){
            form.submit();
       }

    })
