//For Time Elements
const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hr = document.getElementById('hr');
const day = document.getElementById('day');
const wk = document.getElementById('wk');
const mon = document.getElementById('mon');
const yr = document.getElementById('yr');

var pi = Math.PI;


function checkTime(i)
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('time').innerHTML = "<strong>Time today: </strong>" + h + ":" + m + ":" + s;

    t = setTimeout(function() {
        startTime()
    }, 500);
}

startTime();

sec.addEventListener('input', secsToAll);

function secsToAll()
{
    const in_sec = parseFloat(sec.value);
    
    var ans_min = in_sec / 60;
    var ans_hr = in_sec / 3600;
    var ans_day = in_sec / 86400;
    var ans_wk = in_sec / 604800;
    var ans_mon = in_sec / 2.628e+6; 
    var ans_yr = in_sec / 3.154e+7;

    min.value = ans_min.toExponential(4);
    hr.value = ans_hr.toExponential(4);
    day.value = ans_day.toExponential(4);
    wk.value = ans_wk.toExponential(4);
    mon.value = ans_mon.toExponential(4);
    yr.value = ans_yr.toExponential(4);
}

min.addEventListener('input', minToAll);

function minToAll()
{
    const in_min = parseFloat(min.value);
    
    var ans_sec = in_min * 60;
    var ans_hr = in_min / 60; 
    var ans_day = in_min / 1440;
    var ans_wk = in_min / 10080;
    var ans_mon = in_min / 43800; 
    var ans_yr = in_min / 525600;

    sec.value = ans_sec.toExponential(4);
    hr.value = ans_hr.toExponential(4);
    day.value = ans_day.toExponential(4);
    wk.value = ans_wk.toExponential(4);
    mon.value = ans_mon.toExponential(4);
    yr.value = ans_yr.toExponential(4);
}

hr.addEventListener('input', hrToAll);

function hrToAll()
{
    const in_hr = parseFloat(hr.value);
    
    var ans_min = in_hr * 60;
    var ans_sec = in_hr * 3600; 
    var ans_day = in_hr / 24;
    var ans_wk = in_hr / 168;
    var ans_mon = in_hr / 730; 
    var ans_yr = in_hr / 8760;

    min.value = ans_min;
    sec.value = ans_sec;
    day.value = ans_day.toExponential(4);
    wk.value = ans_wk.toExponential(4);
    mon.value = ans_mon.toExponential(4);
    yr.value = ans_yr.toExponential(4);
}

day.addEventListener('input', dayToAll);

function dayToAll()
{
    const in_day = parseFloat(day.value);
    
    var ans_min = in_day * 1440;
    var ans_hr = in_day * 24; 
    var ans_sec = in_day * 86400;
    var ans_wk = in_day / 7;
    var ans_mon = in_day / 30.417; 
    var ans_yr = in_day / 365;

    min.value = ans_min;
    hr.value = ans_hr;
    sec.value = ans_sec;
    wk.value = ans_wk.toExponential(4);
    mon.value = ans_mon.toExponential(4);
    yr.value = ans_yr.toExponential(4);
}

wk.addEventListener('input', wkToAll);

function wkToAll()
{
    const in_wk = parseFloat(wk.value);
    
    var ans_min = in_wk * 10080;
    var ans_hr = in_wk * 168; 
    var ans_day = in_wk * 7;
    var ans_sec = in_wk * 604800;
    var ans_mon = in_wk / 4.345; 
    var ans_yr = in_wk / 52.143;

    min.value = ans_min;
    hr.value = ans_hr;
    day.value = ans_day;
    sec.value = ans_sec.toExponential(3);
    mon.value = ans_mon.toExponential(3);
    yr.value = ans_yr.toExponential(3);
}

mon.addEventListener('input', monToAll);

function monToAll()
{
    const in_mon = parseFloat(mon.value);
    
    var ans_min = in_mon * 43800;
    var ans_hr = in_mon * 730; 
    var ans_day = in_mon * 30.417;
    var ans_wk = in_mon * 4.345;
    var ans_sec = in_mon * 2.628e+6; 
    var ans_yr = in_mon / 12;

    min.value = ans_min;
    hr.value = ans_hr;
    day.value = ans_day;
    wk.value = ans_wk.toExponential(3);
    sec.value = ans_sec.toExponential(3);
    yr.value = ans_yr.toExponential(3);
}

yr.addEventListener('input', yrToAll);

function yrToAll()
{
    const in_yr = parseFloat(yr.value);
    
    var ans_min = in_yr *  525600;
    var ans_hr = in_yr * 8760;
    var ans_day = in_yr * 365;
    var ans_wk = in_yr * 52.143;
    var ans_mon = in_yr * 12; 
    var ans_sec = in_yr * 3.154e+7;

    min.value = ans_min.toExponential(3);
    hr.value = ans_hr;
    day.value = ans_day;
    wk.value = ans_wk;
    mon.value = ans_mon;
    sec.value = ans_sec.toExponential(3);
}
