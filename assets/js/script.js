
document.addEventListener('DOMContentLoaded',()=>{


    const plus =    document.getElementById('plus');
    let pieces =    document.getElementById('pieces'); 
    const minus =   document.getElementById('minus'); 
    const cartBtn = document.querySelector('.cartBtn'); 
    const cart =    document.querySelector('.cart'); 
    const cartContainer =   document.querySelector('.cart-container'); 
    const cartValue =    document.getElementById('cartPieces'); 
    const itemName =    document.getElementById('itemName'); 
    const itemCostElement =    document.getElementById('itemCost'); 
    const itemImage = document.getElementById('itemImage');
    let formattedCart = document.querySelector('.formattedCart');
    const deleteIcon = document.getElementById('delete');

    let itemCost = parseFloat(itemCostElement.innerHTML.replace('$',''));
    let shoePieces = parseInt(pieces.innerHTML) || 0;
    plus.addEventListener('click',()=>{
        shoePieces += 1;
        console.log('add 1 item', shoePieces)
        pieces.innerHTML = shoePieces; 
    });
    minus.addEventListener('click',()=>{
        if(pieces.innerHTML > 0){

        
        shoePieces -= 1;
        console.log('Less 1 item', shoePieces)
        pieces.innerHTML = shoePieces; 
        }
    });

    cart.addEventListener('click',()=>{
        cartContainer.classList.toggle('active');
    });
    cartBtn.addEventListener('click',()=>{
        let cartDetails = {
            productName: itemName.innerHTML,
            productQuantity: shoePieces,
            productImage: itemImage.src,
            productCost: itemCost
        };

        
        
        cartValue.innerHTML = shoePieces;
        let totalCost = cartDetails.productCost * cartDetails.productQuantity; 
        console.log('type of total cost', typeof(totalCost))
        formattedCart.innerHTML =
        `
                <div class="col" id="prodImg"><img src="${cartDetails.productImage}" alt="product-1-thumb"></div>
            <div class="col" id="prodDescp">
              <div class="row flex-column">
                <div class="col" id="productName">${cartDetails.productName}</div>
                <div class="col" id="quantityQuantity">$${cartDetails.productCost} * ${cartDetails.productQuantity}  =  $${totalCost}</div>
              </div>
            </div>
            <div class="col" id="delete"><img src="./images/icon-delete.svg" alt="" srcset=""></div>
        `
        ;

    });

    formattedCart.addEventListener('click',(e)=>{
        if(e.target.closest('#delete')){
            formattedCart.innerHTML =  `No content in cart.`
            cartValue.innerHTML = 0;
            shoePieces = 0;
        } 
    });
 
    });



