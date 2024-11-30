const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const email = document.querySelector("input[type ='email']");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;


form.addEventListener('submit', function (e) {
    e.preventDefault();
    input.forEach(inp => {
        if (inp.value.length === 0) {
            isEmpty(inp);
        } else {
            checkField(inp);
            if (email.value.length === 0) {
                isEmpty(email)
            } else if (!emailPattern.test(email.value)) {
                emailCheck();
            } else {
                email.style.color = 'black';
            }
        }
    })
})

function isEmpty(field) {
    field.nextElementSibling.textContent = `${field.placeholder} cannot be empty`;
    field.nextElementSibling.style.color = 'red';
    field.style.backgroundImage = 'url(images/icon-error.svg)';
    field.style.backgroundRepeat = 'no-repeat';
    field.style.backgroundPosition = 'right 20px center';
}

function checkField(field) {
    field.nextElementSibling.textContent = '';
    field.style.backgroundImage = '';
}

function emailCheck() {
    email.value = 'email@example/com';
    email.style.color = 'red';
    email.nextElementSibling.textContent = `Looks like this is not an email`;
    email.nextElementSibling.style.color = 'red';
    email.style.backgroundImage = 'url(images/icon-error.svg)';
    email.style.backgroundRepeat = 'no-repeat';
    email.style.backgroundPosition = 'right 20px center';
}

