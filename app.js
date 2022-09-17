// https://www.omnicalculator.com/conversion/liter-cc

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ccRadio = document.getElementById('ccRadio');
const literRadio = document.getElementById('literRadio');

let cc;
let liter = v; 

// labels of the inpust
const variable = document.getElementById('variable');

ccRadio.addEventListener('click', function() {
  variable.textContent = 'Liter';
  liter = v;
  result.textContent = '';
});

literRadio.addEventListener('click', function() {
  variable.textContent = 'cc';
  cc = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ccRadio.checked)
    result.textContent = `cc = ${computecc().toFixed(5)}`;

  else if(literRadio.checked)
    result.textContent = `Liter = ${computeliter().toFixed(5)}`;
})

// calculation

function computecc() {
  return Number(liter.value) * 1000;
}

function computeliter() {
  return Number(cc.value) / 1000;
}