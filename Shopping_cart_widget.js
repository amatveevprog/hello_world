


//document.onreadystatechange = cartinit();
var cart;
 
function cartinit()
{
 cart = new Shopping_Cart();
 cart.show_cart();

}



function showwidgetcontent()
 {
    var blocks = document.getElementsByClassName('cartelemdivright');
    for (var i in blocks)
      {       
          var tween = TweenLite.to(blocks[i], 0.5,{opacity:1, display:'inline'});
          //blocks[i].style.display = 'inline';
      }
 }

function hidewidgetcontent()
 {
    var blocks = document.getElementsByClassName('cartelemdivright');
    
    for (var i in blocks)
      {   
          var tween = TweenLite.to(blocks[i], 0.2,{opacity:0,display:'none'});
          //blocks[i].style.display= 'none';
      }
 }




function Shopping_Cart()
{
 
  
  var cart = document.createElement("div");
  cart.className = "cartdiv";
  cart.id = 'cart';
  var imagesrc = 'https://cdn.shopify.com/s/files/1/0363/2857/t/68/assets/shopping_bag.png?1380437768496362973';
  var teaimagesrc = 'https://cdn1.iconfinder.com/data/icons/hotel-and-restaurant-volume-1/48/005-256.png';
  var goods = [];
  this.show_cart = function()
    {
      if(document.body != null)
         {
            document.body.appendChild(cart); 
            TweenLite.to(cart, 2, {opacity:1, width:'50px'});
            var icon_div = document.createElement("div");
            icon_div.id = 'icondiv';
            icon_div.className = 'icondiv';
            
            var cart_icon = document.createElement("img");
            cart_icon.src = imagesrc;
            cart_icon.className = 'carticon';
            icon_div.appendChild(cart_icon);
            cart.appendChild(icon_div);
            var hr = document.createElement("div");
            hr.className = 'delimeter';
            
            
            
             cart.appendChild(hr);
            
            cart.addEventListener("mouseenter",function(event)
                  {
                    //hidewidgetcontent();
                    
                     var a = TweenLite.to(cart, 1.5,{width:'213px', paddingLeft:'7px',boxShadow: '0 0 4px rgba(0,0,0,0.2)',onStart:showdiv, onComplete:showwidgetcontent});
                     
                     
                    function showdiv()
                      {
                          var b =  TweenLite.to(cart_icon, 0.3, {transform:'rotate(90deg)'});
                          var blocks = document.getElementsByClassName('cartelemdiv');
                          console.log(blocks);
                          
                          
                           for (var i in blocks)
                            {       
                                  blocks[i].style.background = '#F7DD72';
                                  var c = TweenLite.to(blocks[i], 0.5, {width: '200px',paddingTop:'25px',paddingBottom:'16px'});
                            }
                            
                          
                      }  
                      
                      //ShowContent();
                     
                      
                      // Show Content
                  
                      
                     //TweenLite.to(cart_icon, 1, {background:'#FF851B'});
                   
                  });
                  
            cart.addEventListener("mouseleave",function(event)
                  {
                     var a2 =  TweenLite.to(cart_icon, 0.3, {transform:'rotate(0deg)',onStart:hideelems});
                    
                
                     
                 
                     function hideelems()
                     {
                     var blocks = document.getElementsByClassName('cartelemdiv');
                          console.log(blocks);
                           for (var i in blocks)
                            { 
                               var a3 =  TweenLite.to(blocks[i], 0.6, {paddingBottom:'0px',paddingTop:'0px',background:'#648381',onStart:hidewidgetcontent,width:'0px', onComplete:hidecart});

                              //blocks[i].style.background= '#FFDC00';
                             // blocks[i].style.width = '0px';
  
                            }
                     }
                     
                    
                     
                    
                      var a2 =  TweenLite.to(cart_icon, 0.3, {transform:'rotate(0deg)'});
                      
                     function hidecart()
                     {
                      var a1 =  TweenLite.to(cart, 1, {width:'50px'});
                     }
                       
                     
                      
                      
                      
                      
                      
                  });
            
            
            console.log(cart_icon.src);
         }
       else
         {
              console.log('=(');
         }
  
     
    }
    
    
    
    this.add_item = function(item)
     {
       goods.push(item);
       console.log(goods);
       
       
       
       var cart_elem_div = document.createElement("div");
       cart_elem_div.className = 'cartelemdiv_general';
       
       
       
       var cart_elem_div = document.createElement("div");
       cart_elem_div.id = item.id;
       cart_elem_div.name = item.name;
       cart_elem_div.className = 'cartelemdiv';
       
       
       
       
       var cart_elem_icon = document.createElement("img");
       cart_elem_icon.className = 'elemicon';
       cart_elem_icon.src = teaimagesrc;
       cart_elem_div.appendChild(cart_elem_icon);
       
       
       
       
       var cart_elem_div_right = document.createElement("div");
       cart_elem_div_right.className = 'cartelemdivright';
       
       //CONTENT BLOCKS
       var cart_elem_div_right_up = document.createElement("div");
       cart_elem_div_right_up.className = 'cartelemdivright_up';
       
       
       var cart_elem_div_right_down = document.createElement("div");
       cart_elem_div_right_down.className = 'cartelemdivright_down';
       
          // _______________________________________TEXT BLOCKS________________________________________
        var item_name = document.createElement("p");
        item_name.innerHTML = item.name;
        item_name.className = 'carttitle';
        cart_elem_div_right_up.appendChild(item_name);
        
         var delete_item = document.createElement("button");
         delete_item.className = 'deleteitem';
         delete_item.innerText = 'x';
          cart_elem_div_right_up.appendChild(delete_item);
       
        var item_Number = document.createElement("p");
        item_Number.innerHTML = ' 5 ';
        item_Number.className = 'carttitle';
        cart_elem_div_right_down.appendChild(item_Number);
        
       
       
       
        var addbutton = document.createElement("button");
        addbutton.innerText = '+';
        addbutton.className = 'plusbutton';
       
        var minusbutton = document.createElement("button");
        minusbutton.innerText = '-';
        minusbutton.className = 'plusbutton';
        
        
        
        
       
        var cart_elem_div_buttons = document.createElement("div");
        cart_elem_div_buttons.className = 'plusminusbtns';
        
       
        cart_elem_div_buttons.appendChild(minusbutton);
         cart_elem_div_buttons.appendChild(addbutton);
         
        
          cart_elem_div_right_down.appendChild(cart_elem_div_buttons);
        
        
        var item_Price= document.createElement("p");
        item_Price.innerHTML = ' 676 RUB';
        item_Price.className = 'carttitle';
        cart_elem_div_right_down.appendChild(item_Price);
       
       
       
       
       
       cart_elem_div_right.appendChild(cart_elem_div_right_up);
       cart_elem_div_right.appendChild(cart_elem_div_right_down);
       
       cart_elem_div.appendChild(cart_elem_div_right);
       cart.appendChild(cart_elem_div);
       
       

       //cart.appendChild(cart_elem_div1);
       TweenLite.to(cart_elem_icon, 0.5, {opacity:1, width:'30px'});
     }
    
    
    
    
}






//Oncick Events
















var i =1;






function additem()
 {
    i = i+1;
    var item = new Object();
    item.id = i+'a';
    item.name = 'Чай Син Лин Хао Фен Ши  '+i;
    cart.add_item(item);
 }
