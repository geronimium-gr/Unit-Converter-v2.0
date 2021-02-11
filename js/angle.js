//For Angles
const deg = document.getElementById('deg');
const rad = document.getElementById('rad');
const gra = document.getElementById('gra');
const tur = document.getElementById('tur');

var pi = Math.PI;

deg.addEventListener('input', degToRadGra);

function degToRadGra()
{
    const de = parseFloat(deg.value);
    
    var ans_rad = de * (pi/180);
    var ans_gra = de * 200/180; 
    var ans_tur = de / 360;

    rad.value = ans_rad;
    gra.value = ans_gra;
    tur.value = ans_tur;
}

rad.addEventListener('input', radToDegGra);

function radToDegGra()
{
    const ra = parseFloat(rad.value);
    var ans_deg = ra * (180/pi);
    var ans_gra = ra * (200/pi);
    var ans_tur = ra / (2*pi)

    deg.value = ans_deg;
    gra.value = ans_gra;
    tur.value = ans_tur;
}

gra.addEventListener('input', graToRadDeg);

function graToRadDeg()
{
    const gr = parseFloat(gra.value);
    var ans_deg = gr * (180/200);
    var ans_rad = gr * (pi/200);
    var ans_tur = gr / 400;

    deg.value = ans_deg;
    rad.value = ans_rad;
    tur.value = ans_tur;
}

tur.addEventListener('input', turtoAll);

function turtoAll()
{
    const tr = parseFloat(tur.value);
    var ans_deg = tr * 360;
    var ans_rad = tr * (2*pi);
    var ans_gra = tr * 400;

    deg.value = ans_deg;
    rad.value = ans_rad;
    gra.value = ans_gra;
}

//gradians = radians x 63.661977
//radians = gradians / 63.661977
    
//gradians = degrees x 1.1111
//degrees = gradians / 1.1111

//turn formula
//1𝞽 × 2π = 6.283rad - turn to rad
//1 t x 360 = 360deg - turn to deg
//1 t x 400 = 400gon - turn to gra

//2rad / (2π) = 0.3183𝞽 - rad to turn
//1deg / 360 = 0.00277778 t - deg to turn
//1gon / 400 = 0.0025 t - gra to turn  
