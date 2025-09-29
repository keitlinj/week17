
const fNameSpan = document.querySelector('#fName');const lNameSpan = document.querySelector('#lName');

const ageSpan = document.querySelector('#age');
const aadressSpan = document.querySelector('#aadress');
const epostSpan = document.querySelector('#epost');
const telefonSpan = document.querySelector('#telefon');

window.onload = () => {


    fetch('profile.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        fNameSpan.textContent = data.fName;
        lNameSpan.textContent = data.lName;
      
        ageSpan.textContent = data.age;
        aadressSpan.textContent = data.aadress;
        epostSpan.textContent = data.epost;
        telefonSpan.textContent = data.telefon;
    
    
    })
};