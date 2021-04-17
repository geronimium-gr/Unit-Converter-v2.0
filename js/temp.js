//For Temp Elements
const cel = document.getElementById('cel');
const fah = document.getElementById('fah');
const kel = document.getElementById('kel');

var pi = Math.PI;

cel.addEventListener('input', celToFahKel);

function celToFahKel()
{
    const ce = parseFloat(cel.value);
    
    var ans_fah = (ce * 9/5) + 32;
    var ans_kel = ce + 273.15; 

    fah.value = ans_fah;
    kel.value = ans_kel;
}

fah.addEventListener('input', fahToCelKel);

function fahToCelKel()
{
    const fa = parseFloat(fah.value);
    
    var ans_cel = (fa - 32) * 5/9;
    var ans_kel = (fa - 32) * 5/9 + 273.15; 

    cel.value = ans_cel;
    kel.value = ans_kel;
}

kel.addEventListener('input', kelToCelFah);

function kelToCelFah()
{
    const ke = parseFloat(kel.value);

    var ans_cel = ke - 273.15;
    var ans_fah = (ke - 273.15) * 9/5 + 32; 

    cel.value = ans_cel;
    fah.value = ans_fah;

}