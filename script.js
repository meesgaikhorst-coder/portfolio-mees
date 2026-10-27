let knop = document.querySelector("#knop");
knop.addEventListener('click', myFunc); 

function myFunc() {
    alert("You clicked the button! ):<"); 
}

document.addEventListener('click', function(func2) {
  let muziek = document.getElementById('walen-paris-chanson');
if (muziek) {
    muziek.play();
}

let deDiv = func2.target.closest('.mijndivs');
if (deDiv) {
    deDiv.style.backgroundColor = 'yellow';
}

let deTekst = deDiv.querySelector('p');
if (deTekst) {
    deTekst.style.color = 'green';

    if (deTekst.innerHTML === 'You clicked me! :D') {
        deTekst.innerHTML = 'You clicked me again! :D';
    } else {
        deTekst.innerHTML = 'You clicked me! :D';
    }
}

});