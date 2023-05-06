//to enable tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//copy text
const copyEmail = document.getElementById("copyEmail")
const copyPhone = document.getElementById("copyPhone")

copyEmail.addEventListener('click',()=>{
    const emailCopy = document.getElementById("emailCopy")
    navigator.clipboard.writeText(emailCopy.innerText)
    console.log(emailCopy.innerText,'1');  
})

copyPhone.addEventListener('click',()=>{
    const phoneCopy = document.getElementById("phoneCopy")
    navigator.clipboard.writeText(phoneCopy.innerText)
    console.log(phoneCopy.innerText);
})
