//For Mass or Weight Elements
const kg = document.getElementById('kg');
const gr = document.getElementById('gr');
const mg = document.getElementById('mg');
const mcg = document.getElementById('mcg');

kg.addEventListener('input', kgToAll);

function kgToAll()
{
    const kgs = parseFloat(kg.value);
    
    var ans_gr = kgs * 1000;
    var ans_mg = kgs * 1e+6; 
    var ans_mcg = kgs * 1e+9;

    gr.value = ans_gr;
    mg.value = ans_mg.toExponential();
    mcg.value = ans_mcg.toExponential();
}

gr.addEventListener('input', grToAll);

function grToAll()
{
    const grs = parseFloat(gr.value);
    
    var ans_kg = grs / 1000;
    var ans_mg = grs * 1000; 
    var ans_mcg = grs * 1e+6;

    kg.value = ans_kg;
    mg.value = ans_mg.toExponential();
    mcg.value = ans_mcg.toExponential();
}

mg.addEventListener('input', mgToAll);

function mgToAll()
{
    const mgs = parseFloat(mg.value);
    
    var ans_kg = mgs / 1e+6;
    var ans_gr = mgs / 1000; 
    var ans_mcg = mgs * 1000;

    kg.value = ans_kg.toExponential();
    gr.value = ans_gr;
    mcg.value = ans_mcg;
}

mcg.addEventListener('input', mcgToAll);

function mcgToAll()
{
    const mcgs = parseFloat(mcg.value);
    
    var ans_kg = mcgs / 1e+9;
    var ans_gr = mcgs / 1e+6; 
    var ans_mg = mcgs / 1000;

    kg.value = ans_kg.toExponential();
    gr.value = ans_gr.toExponential();
    mg.value = ans_mg;
}

