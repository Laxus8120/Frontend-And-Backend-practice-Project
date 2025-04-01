console.log("hello inside js");

document.addEventListener('DOMContentLoaded', () =>{
    
const Name = document.getElementById('Name');
const PhoneNo = document.getElementById('PhoneNo');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');

const signInButton = document.getElementById('signInButton');




signInButton.addEventListener('click', ()=>{

    const data = {
        name: Name.value,
        contactNumber: PhoneNo.value,
        emailId: Email.value,
        password: Password.value,
        success: true   
    };
    console.log(data);

    if(data.success === true){
        signInButton.href = 'http://127.0.0.1:5500/loginPage/homepage.html'
    }
//     fetch('http://localhost:3000/', { 
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//         if(data.success === true){
//             location.href == 'http://127.0.0.1:5500/loginPage/homepage.html'
//         }
//         else{
//             console.error("Error:",data)
//         }
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

})
})
