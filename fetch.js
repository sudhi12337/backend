fetch('https://dummyjson.com/products')

.then((res )=>res.json())
.then((data)=>{
    console.log(data.products);
    let con=document.getElementById('con');
    data.products.forEach(products => {
        let productscard=document.createElement('div')
 productscard.innerHTML=` 
 <div class ="pcard">
 <img src = "${products.images[0]}" alt=""
 <h3>${products.title}</h3>
 <h2> ${products.price}</h2>
 <h1>${products.discription}</h1>
 <button>Buynow</buttoon>
 </div>
 `
 con.append(productscard);

 
         
    });
    
})     