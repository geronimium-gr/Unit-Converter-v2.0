//For Length Elements
const km = document.getElementById('km');
const met = document.getElementById('met');
const cen = document.getElementById('cen');
const mil = document.getElementById('mil');
const mic = document.getElementById('mic');
const nan = document.getElementById('nan');

km.addEventListener('input', kmToAll);

function kmToAll() 
{
    const l_km = parseFloat(km.value);
    
    var l_m = l_km * 1000;
    var l_cm = l_km * 100000;
    var l_mm = l_km * 1e+6;
    var l_mc = l_km * 1e+9;
    var l_nc = l_km * 1e+12;

    met.value = l_m;
    cen.value = l_cm;
    mil.value = l_mm.toExponential();
    mic.value = l_mc.toExponential();
    nan.value = l_nc.toExponential();
    
}

met.addEventListener('input', mToAll);

function mToAll() 
{
    const l_m = parseFloat(met.value);
    
    var l_km = l_m / 1000;
    var l_cm = l_m * 100;
    var l_mm = l_m * 1000;
    var l_mc = l_m * 1e+6;
    var l_nc = l_m * 1e+9;

    km.value = l_km;
    cen.value = l_cm;
    mil.value = l_mm;
    mic.value = l_mc.toExponential();
    nan.value = l_nc.toExponential();
    
}

cen.addEventListener('input', cenToAll);

function cenToAll() 
{
    const l_cm = parseFloat(cen.value);
    
    var l_m = l_cm / 100;
    var l_km = l_cm / 100000;
    var l_mm = l_cm * 10;
    var l_mc = l_cm * 10000;
    var l_nc = l_cm * 1e+7;

    met.value = l_m;
    km.value = l_km;
    mil.value = l_mm;
    mic.value = l_mc.toExponential();
    nan.value = l_nc.toExponential();
    
}

mil.addEventListener('input', mmToAll);

function mmToAll() 
{
    const l_mm = parseFloat(mil.value);
    
    var l_m = l_mm / 1000;
    var l_cm = l_mm / 10;
    var l_km = l_mm / 1e+6;
    var l_mc = l_mm * 1000;
    var l_nc = l_mm * 1e+6;

    met.value = l_m;
    cen.value = l_cm;
    km.value = l_km.toExponential();
    mic.value = l_mc;
    nan.value = l_nc.toExponential();
    
}

mic.addEventListener('input', micToAll);

function micToAll() 
{
    const l_mc = parseFloat(mic.value);
    
    var l_m = l_mc / 1e+6;
    var l_cm = l_mc / 10000;
    var l_mm = l_mc / 1000;
    var l_km = l_mc / 1e+9;
    var l_nc = l_mc * 1000;

    met.value = l_m.toExponential();
    cen.value = l_cm;
    mil.value = l_mm;
    km.value = l_km.toExponential();
    nan.value = l_nc;
    
}

nan.addEventListener('input', nanToAll);

function nanToAll() 
{
    const l_nc = parseFloat(nan.value);
    
    var l_m = l_nc / 1e+9;
    var l_cm = l_nc / 1e+7;
    var l_mm = l_nc / 1e+6;
    var l_mc = l_nc / 1000;
    var l_km = l_nc / 1e+12;

    met.value = l_m.toExponential();
    cen.value = l_cm.toExponential();
    mil.value = l_mm.toExponential();
    mic.value = l_mc;
    km.value = l_km.toExponential();
    
}