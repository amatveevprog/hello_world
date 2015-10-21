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

var dotsArray = [];
for(var i=0;i<5;i++)
{
	var newDiv = document.createElement("img");
	newDiv.className="trail";
	newDiv.src="http://culture-club.ru/teatime/images/Kitchen%20Teapot.ico";
	document.body.appendChild(newDiv);
	dotsArray.push(newDiv);
}
var changeCoords=function(event)
{
	//меняем координаты точек последовательно
	for(var i=dotsArray.length-1;i>0;i--)
	{
		dotsArray[i].style.top=dotsArray[i-1].style.top;
		dotsArray[i].style.left=dotsArray[i-1].style.left;
	}
	dotsArray[0].style.top=event.pageY;
	dotsArray[0].style.left=event.pageX;
}
var scheduled=false;
var lastEvent;
addEventListener("mousemove",function(event)
{
	lastEvent=event;
	if(scheduled==false)
	{
		scheduled=true;
		setTimeout(function()
		{
			scheduled=false;
			changeCoords(lastEvent);
			
		},50);
	}
});





document.addEventListener("DOMContentLoaded", function () {
    var X = Y = 0;

    function move() {
        document.getElementById('x').style.left = X + 'px';
        document.getElementById('x').style.top = Y + 'px';
    }
    document.addEventListener("mousemove", function (e) {
        X = e.clientX;
        Y = e.clientY;
    }, false);

    setInterval(move, 100);
});

