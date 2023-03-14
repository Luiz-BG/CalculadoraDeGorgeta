// FUNÇÃO DE CALCULO DE GORJETA
function calculateTip(event) {
    //previne o comportamento base do evento
    event.preventDefault();
    //cria vars e pega os valores que o usuário colocou
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;
    //se esta vazia 
    if(bill == '' | serviceQual == 0){
        alert("Por favor, preencha os valores")
        return;
    }
    //se numero de pessoas igual a 1 ou não foi colocado o número, 
    if(numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    } else{
        document.getElementById('each').style.display = "block"
    }
    //valor total da gorjeta
    let total = (bill * serviceQual) / numOfPeople;
    //colocar numero em duas casas
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}
// FAZER AQUELES TEXTO NO FINAL NÃO APARECEREM, DEPOIS SERÁ NECESSÁRIO MUDAR ISSO
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
// adiciona um Listener para o evento de submit, após o submit ele chamara a função calculateTip
document.getElementById('tipsForm').addEventListener('submit', calculateTip);



