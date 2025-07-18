let promise = new Promise((res,rej)=>{
    setTimeout(() => {
        
    
    if(5<8){
        res("success")
    }
    else{
        rej("failure")
    }

}, 5000);
});
console.log(promise);

function process(){
    console.log('task started');
    promise.then((res)=> {console.log(res)})
.catch((rej)=>{console.log(rej)})
console.log('task ended');

    
}
process()
