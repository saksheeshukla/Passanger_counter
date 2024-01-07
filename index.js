//document.getElementById("count-ele").innerText=5
let count = 0; // Declare count outside the functions

function increment() {
    count = parseInt(document.getElementById('count-ele').innerText);
    count = count + 1;
    document.getElementById('count-ele').innerText = count;
};

function save() {
    let countStr = count + " - ";
    document.getElementById('count-ele').innerText = 0;
    document.getElementById('save-el').textContent += countStr;
}


/* let welcomeEl = document.getElementById('welcom-el');
let name = "Sakshi";
welcomeEl.innerText = `Welcome ${name}`;
 */