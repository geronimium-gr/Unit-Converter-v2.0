//For Area Elements
const km = document.getElementById('km');
const met = document.getElementById('met');
const mil = document.getElementById('mil');
const yd = document.getElementById('yd');
const ft = document.getElementById('ft');
const inc = document.getElementById('inc');
const hc = document.getElementById('hc');
const ac = document.getElementById('ac');
var pi = Math.PI;

function movement()
{
    document.querySelectorAll('.accordion__button').forEach(button =>{
        button.addEventListener('click',() =>{
            
             button.classList.toggle('accordion__button--active');
        });
    });
}

movement();



km.addEventListener('input', kmToAll);

function kmToAll() 
{
    const s_km = parseFloat(km.value);
    
    var s_meter = s_km * 1e+6;
    var s_mile = s_km / 2.59;
    var s_yd = s_km * 1.196e+6;
    var s_ft = s_km * 1.076e+7;
    var s_in = s_km * 1.55e+9;
    var s_hc = s_km * 100;
    var s_ac = s_km * 247.105;

    met.value = s_meter.toExponential();
    mil.value = s_mile;
    yd.value = s_yd.toExponential(3);
    ft.value = s_ft.toExponential(3);
    inc.value = s_in.toExponential(3);
    hc.value = s_hc;
    ac.value = s_ac;
    
}

met.addEventListener('input', metToAll);

function metToAll() 
{
    const s_meter = parseFloat(met.value);
    
    var s_km = s_meter / 1e+6;
    var s_mile = s_meter / 2.59e+6;
    var s_yd = s_meter * 1.196;
    var s_ft = s_meter * 10.764;
    var s_in = s_meter * 1550;
    var s_hc = s_meter / 10000;
    var s_ac = s_meter / 4047;

    km.value = s_km.toExponential();
    mil.value = s_mile.toExponential(3);
    yd.value = s_yd;
    ft.value = s_ft;
    inc.value = s_in;
    hc.value = s_hc.toExponential();
    ac.value = s_ac;
    
}

mil.addEventListener('input', milToAll);

function milToAll() 
{
    const s_mile = parseFloat(mil.value);
    
    var s_meter = s_mile * 2.59e+6;
    var s_km = s_mile * 2.59;
    var s_yd = s_mile * 3.098e+6;
    var s_ft = s_mile * 2.788e+7;
    var s_in = s_mile * 4.014e+9;
    var s_hc = s_mile * 259;
    var s_ac = s_mile * 640;

    met.value = s_meter.toExponential();
    km.value = s_km;
    yd.value = s_yd.toExponential(3);
    ft.value = s_ft.toExponential(3);
    inc.value = s_in.toExponential(3);
    hc.value = s_hc;
    ac.value = s_ac;
    
}

yd.addEventListener('input', ydToAll);

function ydToAll() 
{
    const s_yd = parseFloat(yd.value);
    
    var s_meter = s_yd / 1.196;
    var s_mile = s_yd / 3.098e+6;
    var s_km = s_yd / 1.196e+6;
    var s_ft = s_yd * 9;
    var s_in = s_yd * 1296;
    var s_hc = s_yd / 11960;
    var s_ac = s_yd / 4840;

    met.value = s_meter;
    mil.value = s_mile.toExponential(3);
    km.value = s_km;
    ft.value = s_ft;
    inc.value = s_in;
    hc.value = s_hc;
    ac.value = s_ac;
    
}

ft.addEventListener('input', ftToAll);

function ftToAll() 
{
    const s_ft = parseFloat(ft.value);
    
    var s_meter = s_ft / 10.764;
    var s_mile = s_ft / 2.788e+7;
    var s_yd = s_ft / 9;
    var s_km = s_ft / 1.076e+7;
    var s_in = s_ft * 144;
    var s_hc = s_ft / 107639;
    var s_ac = s_ft / 43560;

    met.value = s_meter;
    mil.value = s_mile.toExponential(3);
    yd.value = s_yd;
    km.value = s_km.toExponential(3);
    inc.value = s_in;
    hc.value = s_hc;
    ac.value = s_ac;
    
}

inc.addEventListener('input', incToAll);

function incToAll() 
{
    const s_in = parseFloat(inc.value);
    
    var s_meter = s_in / 1550;
    var s_mile = s_in / 4.014e+9;
    var s_yd = s_in / 1296;
    var s_ft = s_in / 144;
    var s_km = s_in / 1.55e+9;
    var s_hc = s_in / 1.55e+7;
    var s_ac = s_in / 6.273e+6;

    met.value = s_meter;
    mil.value = s_mile.toExponential(4);
    yd.value = s_yd;
    ft.value = s_ft;
    km.value = s_km.toExponential(4);
    hc.value = s_hc.toExponential(4);
    ac.value = s_ac.toExponential(4);
    
}

hc.addEventListener('input', hcToAll);

function hcToAll() 
{
    const s_hc = parseFloat(hc.value);
    
    var s_meter = s_hc * 10000;
    var s_mile = s_hc / 259;
    var s_yd = s_hc * 11960;
    var s_ft = s_hc * 107639;
    var s_in = s_hc * 1.55e+7;
    var s_km = s_hc / 100;
    var s_ac = s_hc * 2.471;

    met.value = s_meter.toExponential(4);
    mil.value = s_mile;
    yd.value = s_yd.toExponential(4);
    ft.value = s_ft.toExponential(4);
    inc.value = s_in.toExponential(4);
    km.value = s_km;
    ac.value = s_ac;
    
}

ac.addEventListener('input', acToAll);

function acToAll() 
{
    const s_ac = parseFloat(ac.value);
    
    var s_meter = s_ac * 4047;
    var s_mile = s_ac / 640;
    var s_yd = s_ac * 4840;
    var s_ft = s_ac * 43560;
    var s_in = s_ac * 6.273e+6;
    var s_hc = s_ac /  2.471;
    var s_km = s_ac / 247; 

    met.value = s_meter;
    mil.value = s_mile;
    yd.value = s_yd.toExponential(3);
    ft.value = s_ft.toExponential(4);
    inc.value = s_in.toExponential(4);
    hc.value = s_hc;
    km.value = s_km;
    
}

