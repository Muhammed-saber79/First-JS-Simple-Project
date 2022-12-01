const btn=document.querySelector('.btn');
btn.style.background='red';

const form=document.querySelector('#my-form');
const msg=document.querySelector('.msg');
const nameData=document.querySelector('#name');
const emailData=document.querySelector('#email');

form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameData.value === '' || emailData.value === ''){
        msg.innerHTML='Please Type The Reuired Data...';
        setTimeout(()=>msg.remove(),3000);
        //alert('wrong enter data again...!');
    }else{
        alert('u are signed in successfully...');
    }

    nameData.value='';
    emailData.value='';
}





