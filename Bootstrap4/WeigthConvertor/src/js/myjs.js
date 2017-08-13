document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input',function(e){
    if(e.target.value.length > 0){
        document.getElementById('output').style.visibility = 'visible';
    } else {
        document.getElementById('output').style.visibility = 'hidden';
    }
    var pounds = e.target.value;
    document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
    document.getElementById('kilogramOutput').innerHTML = pounds/2.2046;
    document.getElementById('ouncesOutput').innerHTML = pounds*16;
});