
let buttonClear = document.getElementById('clear_btn');
let finalCalculation = document.getElementById('calculation');
let buttonCount = document.getElementById('count_btn');
let finalValues = document.getElementById('values');
let monthlyPayment = document.getElementById('monthly');
            
buttonClear.addEventListener('click', ()=>{
    finalCalculation.innerHTML = "";
    monthlyPayment.innerHTML = "";
    finalValues.innerHTML = "";
})

buttonCount.addEventListener('click', ()=>{
    calculation();
})



function calculation(){

    let amount = document.querySelector('.amount').value;
    let percent = document.querySelector('.percent').value;
    let months = document.querySelector('.months').value;

    let firstMessage = `<div class = 'first_message'>Сумма займа: <strong>${amount}$</strong><br>Годовой процент: <strong>${percent}%</strong><br>Срок займа <strong>${months} месяц(ев).</strong><br></div>`;
        
    finalValues.innerHTML = firstMessage;
        
    calculation = ((amount*(percent/12)*(1+(percent/12))**months)/(((1+(percent/12))**months)-1));
        
    let payment = ((calculation - amount)/months);

    calculation = Math.ceil(calculation);
    payment = Math.ceil(payment);
    monthlyPayment.innerHTML = `<br><span class = 'monthly'>Ежемесячный платёж: <span class = 'payment_num'>${payment}$</span></span>`;
        
    finalCalculation.innerHTML = `<br><span class = 'final_value'>Итого выплатить: <span class = 'calculation_num'>${calculation}$</span></span>`; 
}
