function smartATM()  {
    const amount = parseInt(document.getElementById("amount").value);
    const ouutput = document.getElementById("output");
    ouutput.innerHTML = "";

    if (isNaN(amount) || amount <= 0){
        ouutput.innerHTML = "<p class='error'> Please enter a valid amount. </p>  ";
        return;
    }

    const denominations = [5000, 1000, 500, 100, 50, 20, 10 ];
    const notes = {};
    let remaining = amount;

    if (amount % 10 !== 0){
  ouutput.innerHTML = " <p class='error'>Cannot dispense the exact amount with available denominations.</p> ";
  return;    
}

let reserve = amount > 1000 ? 700 : 0;
let largePart = amount - reserve;

for (let denom of denominations){
    if(denom >= 500 && largePart >= denom){
        notes[denom] = Math.floor(largePart / denom);
        largePart = largePart % denom;
    } else {
        notes[denom] = 0;
    }
}

    remaining = largePart + reserve;

    for (let denom of denominations){
        if(denom < 500 && remaining >= denom) {
            notes[denom] += Math.floor(remaining / denom);
            remaining = remaining % denom;
        }
    }

    if (remaining !== 0) {
    output.innerHTML = "<p class='error'> Cannot dispense the exact amount with available denominations. </p>";
    return;
    }
    
    let html = `<h3> Withdrawn Amount: ${amount}</h3><ul style="list-style-type:none; padding:10px;">`;
    let totalNotes = 0;

    denominations.forEach(denom => {
        html += `<li> ${denom} : ${notes[denom]} </li>`;
        totalNotes += notes[denom];
    });

    html += `<ul/><strong> Total Notes: ${totalNotes}</strong>`;
    output.innerHTML = html;
    
}