const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
    interval: 3,
    circle
})

var contador = 0;

function AddProducts(){
  contador ++;
  document.getElementById('contador').innerHTML = contador;
}

function RemoveProducts(){
  if(contador > 0){
    contador --;
  }
  document.getElementById('contador').innerHTML = contador;
}