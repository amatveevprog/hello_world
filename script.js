//ANIMATIONS
console.log('ok...');





$("#mitem1").on({
    mouseenter: function () {
        //stuff to do on mouse enter
        var pot = document.getElementById("pot1");
        TweenLite.to(pot, 2, {opacity:1, transform:'rotate(30deg)'});
        
        var dv = document.getElementById("mitem1");
        TweenLite.to(dv, 0.5, {background:'rgba(255, 255, 0, 0.4);', opacity:1, width:'50%'});
        
        console.log('ok...!2');
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        var pot = document.getElementById("pot1");
        TweenLite.to(pot, 1, {opacity:0, transform:'rotate(0deg)'});
        
         var dv = document.getElementById("mitem1");
        TweenLite.to(dv, 0.5, {background:'rgba(255, 255, 0, 0);', width:'100%'});
        
        
        
        console.log('ok...!3');
    }
});



$("#mitem2").on({
    mouseenter: function () {
        //stuff to do on mouse enter
        var pot = document.getElementById("pot2");
        TweenLite.to(pot, 2, {opacity:1, transform:'rotate(30deg)'});
        
          var dv = document.getElementById("mitem2");
        TweenLite.to(dv, 0.5, {background:'rgba(255, 255, 0, 0.4);', opacity:1, width:'50%'});
  
        console.log('ok...!2');
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        var pot = document.getElementById("pot2");
        TweenLite.to(pot, 1, {opacity:0, transform:'rotate(0deg)'});
        
           var dv = document.getElementById("mitem2");
        TweenLite.to(dv, 0.5, {background:'rgba(255, 255, 0, 0);', width:'100%'});
        
        console.log('ok...!3');
        
    }
});




$("#mitem3").on({
    mouseenter: function () {
        //stuff to do on mouse enter
        var pot = document.getElementById("pot3");
        TweenLite.to(pot, 2, {opacity:1, transform:'rotate(30deg)'});
        
          var dv = document.getElementById("mitem3");
        TweenLite.to(dv, 0.5, {background:'rgba(255, 255, 0, 0.4);', opacity:1, width:'50%'});
  
        console.log('ok...!2');
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        var pot = document.getElementById("pot3");
        TweenLite.to(pot, 1, {opacity:0, transform:'rotate(0deg)'});
        
           var dv = document.getElementById("mitem3");
        TweenLite.to(dv, 0.5, {background:'rgba(255, 255, 0, 0);', width:'100%'});
        
        console.log('ok...!3');
    }
});


//Scroll animation


$(document).ready(function(){
    $('a[href^="#"]').click(function(){ //берем все ссылки атрибут href которых начинается с #
      if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 800); // анимируем скролл к элементу
      }     
      return false;
    });
});


  
var thisCircles = document.getElementsByClassName("teabar-circle-img");
for(var k=0;k<thisCircles.length;k++)
    {
      //console.log(thisCircles[i]);
      var elem=thisCircles[k];
      thisCircles[k].addEventListener("mouseenter",function(event){
        TweenLite.to(event.target,0.5,{width:'280px',height:'280px',borderRadius:'999px', opacity:1});
        TweenMax.to(event.target,0.5,{boxShadow:'6px 6px 9px 1px #001'});
      });
      thisCircles[k].addEventListener("mouseleave",function(event){
        TweenLite.to(event.target,1,{width:'250px',height:'250px',borderRadius:'999px',opacity:0.8});
        TweenMax.to(event.target,1,{boxShadow:'1px 1px 1px 1px #000'});
      });
      //TweenLite.to(thisCircles[i],1,{width:'200%',background:'red',transform:'rotate(30deg)'});
    }


