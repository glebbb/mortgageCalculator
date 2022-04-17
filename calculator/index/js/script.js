
const openPopUp = document.getElementById('open_pop_up')
const closePopUp = document.getElementById('pop_up_close')
const popUp = document.getElementById('pop_up');
const bankCreate = document.getElementById('bank_create')
const newBank1 = document.getElementById('new_bank_1')
const newBank2 = document.getElementById('new_bank_2')
const newBank3 = document.getElementById('new_bank_3')
const deleteBtn1 = document.getElementById('button_delete_1')
const deleteBtn2 = document.getElementById('button_delete_2')
const deleteBtn3 = document.getElementById('button_delete_3')


let newBankCreate;
let i = 0;

window.onload = function(){
    
    newBank1.classList.add('inactive_1');
    newBank2.classList.add('inactive_2');
    newBank3.classList.add('inactive_3');
  
}

openPopUp.addEventListener('click', (e)=>{
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    confirm('Все несохранённые данные будут утеряны.');
    popUp.classList.remove('active');
    
})

bankCreate.addEventListener('click', () => {
    addNewBank();   

    popUp.classList.remove('active');


})

function addNewBank(){    
    
    let bankName = document.querySelector('.bank_name').value;
    let bankProc = document.querySelector('.bank_proc').value;
    let bankCred = document.querySelector('.max_cred').value;
    let bankPred = document.querySelector('.max_pred').value;
    let bankTerm = document.querySelector('.max_term').value;

    
    


    i++;

    let newBankName = document.createElement('div');
    newBankName.innerHTML = (`<p class = 'title_bank'>${bankName}</p>`);
    let newBankProc = document.createElement('div');
    newBankProc.innerHTML = (`<p><span class = 'bank_span'>Процентная ставка</span>: ${bankProc}%</p>`);
    let newBankCred = document.createElement('div');
    newBankCred.innerHTML = (`<p><span class = 'bank_span'>Максимальный кредит</span>: ${bankCred}$</p>`);
    let newBankPred = document.createElement('div');
    newBankPred.innerHTML = (`<p><span class = 'bank_span'>Минимальная предоплата</span>: ${bankPred}$</p>`);
    let newBankTerm = document.createElement('div');
    newBankTerm.innerHTML = (`<p><span class = 'bank_span'>Срок кредита</span>: ${bankTerm} month(s)</p>`);


    localStorage.setItem(`bank name ${i}`, bankName);
    localStorage.setItem(`bank procent ${i}`, bankProc);
    localStorage.setItem(`bank max credit ${i}`, bankCred);
    localStorage.setItem(`bank min predoplata ${i}`, bankPred);
    localStorage.setItem(`bank months ${i}`, bankTerm);


    removeStyles();



    newBankCreate = document.getElementById(`new_bank_${i}`);

     
    
    newBankCreate.append(newBankName);
    newBankCreate.append(newBankProc);
    newBankCreate.append(newBankCred);
    newBankCreate.append(newBankPred);
    newBankCreate.append(newBankTerm);

    deleteBtn1.addEventListener('click', ()=>{
    
        let isDelete = confirm(`Вы действительно хотите удалить этот банк?`)
        if(isDelete == true){
            newBank1.classList.add('inactive_1');
            localStorage.clear();
        }
    
    })

    deleteBtn2.addEventListener('click', ()=>{
    
        let isDelete = confirm(`Вы действительно хотите удалить этот банк?`)
        if(isDelete == true){
            newBank2.classList.add('inactive_2');
            localStorage.clear();
        }
    
    })

    deleteBtn3.addEventListener('click', ()=>{
    
        let isDelete = confirm(`Вы действительно хотите удалить этот банк?`)
        if(isDelete == true){
            newBank3.classList.add('inactive_3');
            localStorage.clear();
        }
    
    })



    


}

function removeStyles(){
    if (i == 1){
        newBank1.classList.remove('inactive_1');
    } else if (i == 2){
        newBank2.classList.remove('inactive_2');
    } else if (i == 3){
        newBank3.classList.remove('inactive_3');
    } else {
        alert('Вы создали максимальное количество банков.');
        popUp.classList.remove('active');
    }
}




function letterLimit (){  
    let bankName = document.querySelector('.bank_name');
    let bankProc = document.querySelector('.bank_proc');
    let bankCred = document.querySelector('.max_cred');
    let bankPred = document.querySelector('.max_pred');
    let bankTerm = document.querySelector('.max_term');


    bankName.addEventListener('mouseout', ()=>{
        bankName.value = bankName.value.substr(0, 10);
    })
    bankProc.addEventListener('mouseout', ()=>{
        bankProc.value = bankProc.value.substr(0, 3);
    })
    bankCred.addEventListener('mouseout', ()=>{
        bankCred.value = bankCred.value.substr(0, 7);
    })
    bankPred.addEventListener('mouseout', ()=>{
        bankPred.value = bankPred.value.substr(0, 7);
    })
    bankTerm.addEventListener('mouseout', ()=>{
        bankTerm.value = bankTerm.value.substr(0, 3);
    })
    
}

letterLimit();
