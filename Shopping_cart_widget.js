


//document.onreadystatechange = cartinit();
var cart;
 
function cartinit()
{
 cart = new Shopping_Cart();
 cart.show_cart();

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
                    
                    
                     var a = TweenLite.to(cart, 1.5,{width:'200px',onStart:showdiv});
                     
                     
                    function showdiv()
                      {
                          var b =  TweenLite.to(cart_icon, 0.3, {transform:'rotate(90deg)'});
                          var blocks = document.getElementsByClassName('cartelemdiv');
                          console.log(blocks);
                          
                          
                           for (var i in blocks)
                            {       
                                  blocks[i].style.background = '#FF851B';
                                  var c = TweenLite.to(blocks[i], 0.5, {width: '200px',paddingTop:'14px',paddingBottom:'6px',onComplete:ShowContent});
                                  

                            }
                            
                            
                
                      }  
                      
                      //ShowContent();
                     
                      
                      // Show Content
                      function ShowContent()
                       {
                          var blocks_right = document.getElementsByClassName('elem_div_right');
                          console.log(blocks_right);
                           for (var i in blocks_right)
                            {     console.log(blocks_right[i].style.display);
                                  blocks_right[i].style.display = 'inline';
                                 // var c = TweenLite.to(blocks[i], 0.5, {width: '200px',paddingTop:'14px',paddingBottom:'6px',onComplete:ShowContent});
                                  

                            }
                       }
                      
                      
                     //TweenLite.to(cart_icon, 1, {background:'#FF851B'});
                   
                  });
                  
            cart.addEventListener("mouseleave",function(event)
                  {
                   
                       
                     var a2 =  TweenLite.to(cart_icon, 0.3, {transform:'rotate(0deg)'()});
                  hideelems();
                     function hidecart()
                     {
                      var a1 =  TweenLite.to(cart, 1, {width:'50px',onStart: HideContent});
                     }
                     
                     
                     function hideelems()
                     {
                     var blocks = document.getElementsByClassName('cartelemdiv');
                          console.log(blocks);
                           for (var i in blocks)
                            {
                               var a3 =  TweenLite.to(blocks[i], 0.3, {paddingBottom:'0px',paddingTop:'0px'});

                              blocks[i].style.background= '#FFDC00';
                              blocks[i].style.width = '0px';
  
                            }
                     }
                     
                    
                     
                    
                       var a2 =  TweenLite.to(cart_icon, 0.3, {transform:'rotate(0deg)',onStart:hidecart});
                     function hidecart()
                     {
                      var a1 =  TweenLite.to(cart, 1, {width:'50px'});
                     }
                       
                     function HideContent()
                       {
                          var blocks_right = document.getElementsByClassName('elem_div_right');
                          console.log(blocks_right);
                           for (var i in blocks_right)
                            {     console.log(blocks_right[i].style.display);
                                  blocks_right[i].style.display = 'none';
                                 // var c = TweenLite.to(blocks[i], 0.5, {width: '200px',paddingTop:'14px',paddingBottom:'6px',onComplete:ShowContent});
                                  

                            }
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
       
       
        var cart_elem_title = document.createElement("p");
        cart_elem_title.innerHTML = item.name;
        cart_elem_title.className = 'elemtext';
       
       
       
       var cart_elem_div = document.createElement("div");
       cart_elem_div.id = item.id;
       cart_elem_div.name = item.name;
       cart_elem_div.className = 'cartelemdiv';
       
       var cart_elem_icon = document.createElement("img");
       cart_elem_icon.className = 'elemicon';
       cart_elem_icon.src = teaimagesrc;
       cart_elem_div.appendChild(cart_elem_icon);
       
       
        var cart_elem_div_right = document.createElement("div");
        cart_elem_div_right.id = item.id+'divright';
        cart_elem_div.name = item.name+'rightdiv';
        cart_elem_div_right.className = 'elem_div_right';
        
        
        var cart_elem_div_up = document.createElement("div");
        cart_elem_div_up.className = 'elem_div_up';
        
        
        cart_elem_div_up.appendChild(cart_elem_title);
        
        var cart_elem_div_down = document.createElement("div");
        cart_elem_div_down.className = 'elem_div_down';
        
        
        cart_elem_div_right.appendChild( cart_elem_div_up);
        cart_elem_div_right.appendChild( cart_elem_div_down);
        
        
       
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
    item.name = 'tea '+i;
    cart.add_item(item);
 }
