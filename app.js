const amount_1 = document.querySelector('.amount-1');
const amount_2 = document.querySelector('.amount-2');
const amount_3 = document.querySelector('.amount-3');
const amount_4 = document.querySelector('.amount-4');
const amount_5 = document.querySelector('.amount-5');
const amount_6 = document.querySelector('.amount-6');
const amount_7 = document.querySelector('.amount-7');

const barcharts = document.querySelectorAll('.bar')

async function showSpendings(){
    const response = await axios.get('data.json');
    const data = response.data;

    setTimeout(animateBars,1000,data)

    amount_1.textContent = `$${data[0].amount}`;
    amount_2.textContent = `$${data[1].amount}`;
    amount_3.textContent = `$${data[2].amount}`;
    amount_4.textContent = `$${data[3].amount}`;
    amount_5.textContent = `$${data[4].amount}`;
    amount_6.textContent = `$${data[5].amount}`;
    amount_7.textContent = `$${data[6].amount}`;

}

showSpendings();

function animateBars(data){
    barcharts.forEach( (bar,index)=>{
        bar.style.height = `${data[index].amount * 1.5}%`
    });
       
}

