
let buttonClear = document.querySelector('.clear_btn');
let finalCalculation = document.querySelector('.calculation');
let buttonCount = document.querySelector('.count_btn');
let finalValues = document.querySelector('.values');
let monthlyPayment = document.querySelector('.monthly');
let option1 = document.querySelector('.option_1');
let option2 = document.querySelector('.option_2');
let option3 = document.querySelector('.option_3');
let select = document.querySelector('.form_select');
let selectBtn = document.querySelector('.select_btn');

            
buttonClear.addEventListener('click', ()=>{
    finalCalculation.innerHTML = "";
    monthlyPayment.innerHTML = "";
    finalValues.innerHTML = "";
})

buttonCount.addEventListener('click', ()=>{
    calculation();
})


option1.value = `${localStorage.getItem('bank name 1')}`;
option2.value = `${localStorage.getItem('bank name 2')}`;
option3.value = `${localStorage.getItem('bank name 3')}`;
option1.innerHTML = `${localStorage.getItem('bank name 1')}`;
option2.innerHTML = `${localStorage.getItem('bank name 2')}`;
option3.innerHTML = `${localStorage.getItem('bank name 3')}`;

selectBtn.addEventListener('click', ()=>{
    
    let data = select.value;
    const amount = document.querySelector('.amount')
    const minPred = document.querySelector('.min_pred')
    
    const percent = document.querySelector('.percent');
    const months = document.querySelector('.months');
    const getPred1 = localStorage.getItem('bank min predoplata 1')/100;
    const getPred2 = localStorage.getItem('bank min predoplata 2')/100;
    const getPred3 = localStorage.getItem('bank min predoplata 3')/100;

    if(data == `${localStorage.getItem('bank name 1')}`){       
        percent.value = "";
        months.value = "";     
        amount.value = "";
        minPred.value = "";
        minPred.value = `${localStorage.getItem(`bank min predoplata 1`)}`; 
        percent.value = `${localStorage.getItem('bank procent 1')}`;
        months.value = `${localStorage.getItem(`bank months 1`)}`;
        amount.addEventListener('input', (e)=>{
            minPred.value = (e.target.value*getPred1).toFixed(2);
        })
        
    } else if (data == `${localStorage.getItem('bank name 2')}`){
        percent.value = "";
        months.value = "";
        amount.value = "";
        minPred.value = "";
        minPred.value = `${localStorage.getItem(`bank min predoplata 2`)}`;
        percent.value = `${localStorage.getItem('bank procent 2')}`;
        months.value = `${localStorage.getItem(`bank months 2`)}`;
        amount.addEventListener('input', (e)=>{
            minPred.value = (e.target.value*getPred2).toFixed(2);
        })
    } else if(data == `${localStorage.getItem('bank name 3')}`){
        percent.value = "";
        months.value = "";   
        amount.value = "";
        minPred.value = "";
        minPred.value = `${localStorage.getItem(`bank min predoplata 3`)}`;  
        percent.value = `${localStorage.getItem('bank procent 3')}`;
        months.value = `${localStorage.getItem(`bank months 3`)}`;
        amount.addEventListener('input', (e)=>{
            minPred.value = (e.target.value*getPred3).toFixed(2);
        })
    }

    
})

function calculation(){
    let data = select.value;
    let amount = document.querySelector('.amount').value;
    let percent = document.querySelector('.percent').value;
    let months = document.querySelector('.months').value;
    

    let firstMessage = `<div class = 'first_message'>Сумма займа: <strong>${amount}$</strong><br>Годовой процент: <strong>${percent}%</strong><br>Срок займа <strong>${months} месяц(ев).</strong><br></div>`;
   
    let monthPercent = Number(0);

    finalValues.innerHTML = firstMessage;
    
    amount = Number(amount);

    let finalValue = Number(0);
    let payment = Number(0);
    

    for(let i = 1; i <= months; i++){
        
        monthPercent = amount*((percent/12)/100);
        
        finalValue = (monthPercent*100)/100;
        
        payment = payment+finalValue;   
    
    }

    payment = payment + amount;
    
    payment = payment.toFixed(2);
    finalValue = finalValue.toFixed(2);


    monthlyPayment.innerHTML = `<br><span class = 'monthly'>Ежемесячный платёж: <span class = 'payment_num'>${finalValue}$</span></span>`;
        
    finalCalculation.innerHTML = `<br><span class = 'final_value'>Итого выплатить: <span class = 'calculation_num'>${payment}$</span></span>`; 

    if ((data === `${localStorage.getItem('bank name 1')}`) && (amount < `${localStorage.getItem('bank min predoplata 1')}` || amount > `${localStorage.getItem('bank max credit 1')}`)){
        amount = '';
        finalCalculation.innerHTML = "";
        monthlyPayment.innerHTML = "";
        finalValues.innerHTML = "";  
        alert(`Сумма кредита не должна быть меньше минимальной предоплаты или выше максимального кредита! Для этого банка такие значения: Минимальная предоплата = ${localStorage.getItem('bank min predoplata 1')}. Максимальный кредит = ${localStorage.getItem('bank max credit 1')}.`);
    } else if ((data === `${localStorage.getItem('bank name 2')}`) && (amount < `${localStorage.getItem('bank min predoplata 2')}` || amount > `${localStorage.getItem('bank max credit 2')}`)){
        amount = '';
        finalCalculation.innerHTML = "";
        monthlyPayment.innerHTML = "";
        finalValues.innerHTML = "";  
        alert(`Сумма кредита не должна быть меньше минимальной предоплаты или выше максимального кредита! Для этого банка такие значения: Минимальная предоплата = ${localStorage.getItem('bank min predoplata 2')}. Максимальный кредит = ${localStorage.getItem('bank max credit 2')}.`);
    } else if ((data === `${localStorage.getItem('bank name 3')}`) && (amount < `${localStorage.getItem('bank min predoplata 3')}` || amount > `${localStorage.getItem('bank max credit 3')}`)){
        
        amount = '';
        finalCalculation.innerHTML = "";
        monthlyPayment.innerHTML = "";
        finalValues.innerHTML = "";  
        alert(`Сумма кредита не должна быть меньше минимальной предоплаты или выше максимального кредита! Для этого банка такие значения: Минимальная предоплата = ${localStorage.getItem('bank min predoplata 3')}. Максимальный кредит = ${localStorage.getItem('bank max credit 3')}.`);
    }    
    data = "";
}




