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


