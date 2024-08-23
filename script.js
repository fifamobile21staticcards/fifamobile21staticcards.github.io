const nav=document.getElementById('nav');
const tog=document.getElementById('toggle');
tog.ondblclick=()=>{
    tog.classList.toggle('active');
    nav.classList.toggle('active');
}

var cxzw=document.getElementsByTagName("img");
    var jds=0,counter=0;
    var g=setInterval(func,1);
    var mc = document.getElementById('mCard');
    var lder=document.getElementById('lder');
    
    var urll=`https://cdn-p2.frzdb.net/fifamobile/images/backgrounds_21/backgrounds_B0.png`;

    mc.onclick=()=>{
        var prog=document.getElementById('player-prog').value;
        var categ=document.getElementById('player-vers').value;
        urll=`https://cdn-p2.frzdb.net/fifamobile/images/backgrounds_21/backgrounds_${prog}${categ}.png`;
        cxzw[0].src=urll;
        lder.style.cssText='display:block';
        cxzw[0].style.cssText='display:none';
    }
    mc.ondblclick=()=>{
        alert("Por favor espera a que se cargue la carta,\ No olvides suscribirte a mi canal de youtube😊")
    }
    function func(){
        if(counter>=1){
            counter=0;
            jds=0;
        }   
        cxzw[0].style=`left: ${jds}px`;
        jds-=256;
        counter++;
    };

    cxzw[0].addEventListener('load',()=>{
        lder.style.cssText='display:none';
        cxzw[0].style.cssText='display:block';
    });
