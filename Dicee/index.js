 var randomNumber1 = Math.floor(Math.random()*6)+1; //Untuk merandom angka 1 - 6
 var randomDiceImage = `dice${randomNumber1}.png`; //memasukan nilai random ke file img
 var imageSet = "images/"+randomDiceImage; // memasukan nilai img ke folder images

//  set atribute di image 1
 var img1 = document.querySelector('.img1');
 img1.setAttribute('src',imageSet);



 var randomNumber2 = Math.floor(Math.random()*6)+1;
 var imageSet2 = `images/dice${randomNumber2}.png`;

//  set atribute di image2
 var img2 = document.querySelector('.img2');
 img2.setAttribute('src',imageSet2);

//  fungsi untuk menampilkan hasil
 function tampil(){
    var title = document.querySelector('h1');
    if(randomNumber1 > randomNumber2){
        title.innerHTML = `Player 1 wins`
    } else if (randomNumber2 > randomNumber1){
        title.innerHTML = ` Player 2 wins`
    } else {
        title.innerHTML = `Draw`;
    }
 }

 tampil();


//  event button untuk merefresh halaman
 var btn = document.querySelector('button');
 btn.addEventListener("click", function btnClick() {
    location.reload();
 })

 btnClick();