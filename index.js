
const cards = (["Guadalupe", "Ollie", "Aki"], "surprise");
function writeCards(cards, event) {
    const outputArray = []
    for (let c = 0; c < cards.length; c++) {
        outputArray.push(`Thank you, ${cards[c]}, for the wonderful ${event} gift!`);
        
    }
    return outputArray 
}
function countDown (number) {
    while (number >= 0) {
        console.log(number--)
    }
}
