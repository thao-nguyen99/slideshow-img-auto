var slideIndex=0;
showSlide();

function showSlide(){
 const slide=document.querySelectorAll('.slide');
 const dots=document.querySelectorAll('.dot');
 for (var i=0; i<slide.length; i++){
  slide[i].style.display='none';
 }
 for (i=0; i<slide.length; i++){
  dots[i].classList.remove('active');
 }
 if (slideIndex>slide.length-1){
  slideIndex=0;
 }
 slide[slideIndex].style.display="block";
 dots[slideIndex].className+=" active";
 slideIndex++;
 setTimeout(showSlide, 1500);
};