//to enable tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//copy text
const copyEmail = document.getElementById("copyEmail")
const copyPhone = document.getElementById("copyPhone")
const copyEmail2 = document.getElementById("copyEmail2")
const copyPhone2 = document.getElementById("copyPhone2")

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

copyEmail2.addEventListener('click',()=>{
    const emailCopy = document.getElementById("emailCopy")
    navigator.clipboard.writeText(emailCopy.innerText)
    console.log(emailCopy.innerText,'1');  
})

copyPhone2.addEventListener('click',()=>{
    const phoneCopy = document.getElementById("phoneCopy")
    navigator.clipboard.writeText(phoneCopy.innerText)
    console.log(phoneCopy.innerText);
})

document.getElementById("sendMail").addEventListener('click',()=>{
    let name = document.getElementById("name").value
    // let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let msg = document.getElementById("message").value
    let message = msg.charAt(0).toUpperCase()+msg.slice(1)
    let body = `Hai Binil Iam ${name}, ${message}`   
    
    window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
})