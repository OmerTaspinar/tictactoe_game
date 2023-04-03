//Başlat Button'u
var baslat=document.querySelector("#b")

//Karelerin seçilmesi
var kare=document.querySelectorAll(".kutu")

//oyuncu sırası seçilmesi
var oyuncu_sira=document.querySelector(".oyuncu_sira")
var sonuc=document.querySelector("h3")

var oyuncu="X"
var oyun_bitti=false
var kazanan

//Tüm karelerin temizlenmesi

function temizle(){
    for(var i=0;i<kare.length;i++){
        kare[i].textContent=""
        kare[i].style.pointerEvents="auto"
    }
    oyuncu_sira.textContent="X"
    oyuncu="X"
    oyun_bitti=false
    /*sonuc.innerHTML="<h3>Sıra: Oyuncu <span class='oyuncu_sira'>X</span></h3>"*/
    window.location.reload()
}

function oyun_baslangici(){
    oyuncu_sira.textContent=oyuncu
    for(var i=0;i<kare.length;i++){
        kare[i].addEventListener("click",isaretle)
    }
}

function isaretle(){
    if(this.textContent==""){
        this.textContent=oyuncu
        if(oyuncu=="O"){
            this.style.color="#931fde"
        }else{
            this.style.color="aquamarine"
        }
    oyuncu_degistir()
    }else{
        alert("Kutu Dolu")
        this.style.border="2px solid red"
        setTimeout(() => {
            this.style.border="5px solid white"
        }, 2500);
    }
    
    
    kazanan_kontrol()
    beraberlik_kontrol()

    if(oyun_bitti){
        sonuc.textContent="Oyun Bitti. "+"Kazanan: "+kazanan
        sonuc.style.color="#1fde6f"
        sonuc.style.fontSize="50px"
        tiklama_engelle()   
    }
}
function tiklama_engelle(){
    for(var i=0;i<kare.length;i++){
        kare[i].style.pointerEvents="none"
    }
}

function oyuncu_degistir(){
    if (oyuncu==="X") {
        oyuncu="O"
        oyuncu_sira.textContent=oyuncu
        return
    } else if (oyuncu==="O") {
        oyuncu="X"
        oyuncu_sira.textContent=oyuncu
        return
    }
}

function kazanan_kontrol(){
    satir_kontrol()
    sutun_kontrol()
    capraz_kontrol()
}
function beraberlik_kontrol(){
    var degerler=[]
    for(var i=0;i<kare.length;i++){
        degerler.push(kare[i].textContent)
    }
    if(!degerler.includes("")){
        sonuc.textContent="Oyun Berabere Bitti"
        tiklama_engelle()
    }
}
function satir_kontrol(){
    var satir1=kare[0].textContent==kare[1].textContent && kare[0].textContent==kare[2].textContent && kare[0].textContent!==""
    var satir2=kare[3].textContent==kare[4].textContent && kare[3].textContent==kare[5].textContent && kare[3].textContent!==""
    var satir3=kare[6].textContent==kare[7].textContent && kare[6].textContent==kare[8].textContent && kare[6].textContent!==""
    if(satir1 || satir2 || satir3){
        oyun_bitti=true
    }
    if(satir1) return kazanan=kare[0].textContent
    if(satir2) return kazanan=kare[3].textContent
    if(satir3) return kazanan=kare[6].textContent
}
function sutun_kontrol(){
    var sutun1=kare[0].textContent==kare[3].textContent && kare[0].textContent==kare[6].textContent && kare[0].textContent!==""
    var sutun2=kare[1].textContent==kare[4].textContent && kare[1].textContent==kare[7].textContent && kare[1].textContent!==""
    var sutun3=kare[2].textContent==kare[5].textContent && kare[2].textContent==kare[8].textContent && kare[2].textContent!==""
    if(sutun1 || sutun2 || sutun3){
        oyun_bitti=true
    }
    if(sutun1) return kazanan=kare[0].textContent
    if(sutun2) return kazanan=kare[1].textContent
    if(sutun3) return kazanan=kare[2].textContent
}
function capraz_kontrol(){
    var capraz1=kare[0].textContent==kare[4].textContent && kare[0].textContent==kare[8].textContent && kare[0].textContent!==""
    var capraz2=kare[2].textContent==kare[4].textContent && kare[2].textContent==kare[6].textContent && kare[2].textContent!==""
    if(capraz1 || capraz2){
        oyun_bitti=true
    }
    if(capraz1) return kazanan=kare[0].textContent
    if(capraz2) return kazanan=kare[2].textContent
}

baslat.addEventListener("click",temizle)
oyun_baslangici()