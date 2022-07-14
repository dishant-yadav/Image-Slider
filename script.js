let prev = document.getElementsByClassName("prev");
let next = document.getElementsByClassName("next");

let imgNo = 0;
function control(count) {
  imgNo += count;
  slideShow(imgNo);
}

slideShow(imgNo);
function slideShow(num) {
  let slides = document.getElementsByClassName("slide");

  if (imgNo == slides.length) {
    imgNo = 0;
    num = 0;
  }
  if (imgNo < 0) {
    imgNo = slides.length - 1;
    num = slides.length - 1;
  }
  for (let slideNO of slides) {
    slideNO.style.display = "none";
  }
    console.log(num);
  slides[num].style.display = "block";
}
