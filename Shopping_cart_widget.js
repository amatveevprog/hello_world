


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
            TweenLite.to(cart, 1, {opacity:1, width:'50px'});
            var icon_div = document.createElement("div");
            icon_div.id = 'icondiv';
            icon_div.className = 'icondiv';
            
            var cart_icon = document.createElement("img");
            cart_icon.src = imagesrc;
            cart_icon.className = 'carticon';
            icon_div.appendChild(cart_icon);
            cart.appendChild(icon_div);
            var hr = document.createElement("hr");
            cart.appendChild(hr);
            
            cart.addEventListener("mouseenter",function(event)
                  {
                    
                     TweenLite.to(cart_icon, 0.3, {transform:'rotate(90deg)'});
                     TweenLite.to(cart, 1, {width:'120px'});
                     var blocks = document.getElementsByClassName('elem_div_open');
                     console.log(blocks);
                     for (var i in blocks)
                      {
                        TweenLite.to(blocks[i], 0.5, {opacity:1,onUpdate:show()});
                        function show()
                         {
                           //blocks[i].style.display = 'inline';
                         }
                      }
                     //TweenLite.to(cart_icon, 1, {background:'#FF851B'});
                   
                  });
                  
            cart.addEventListener("mouseleave",function(event)
                  {
                     TweenLite.to(cart, 1, {width:'50px'});
                     TweenLite.to(cart_icon, 0.3, {transform:'rotate(0deg)'});
                     
                 var blocks = document.getElementsByClassName('elem_div_open');
                     console.log(blocks);
                     for (var i in blocks)
                      {
                        
                        TweenLite.to(blocks[i], 0.5, {opacity:0, onUpdate:hide()});
                        function hide()
                         {
                           //blocks[i].style.display = 'none';
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
       var cart_elem_div = document.createElement("div");
       cart_elem_div.id = item.id;
       cart_elem_div.name = item.name;
       cart_elem_div.className = 'cartelemdiv';
       
       var cart_elem_icon = document.createElement("img");
       cart_elem_icon.className = 'elemicon';
       cart_elem_icon.src = teaimagesrc;
       cart_elem_div.appendChild(cart_elem_icon);
       
       
        var cart_elem_div1 = document.createElement("div");
        cart_elem_div1.className = 'elem_div_open';
        
        var cart_elem_title = document.createElement("p");
        cart_elem_title.innerHTML = item.name;
        cart_elem_title.className = 'elemtext';
        cart_elem_div1.appendChild(cart_elem_title);
        
       cart.appendChild(cart_elem_div);
       cart.appendChild(cart_elem_div1);
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
