const http=require('http');
const url= require('url');

let server = http.createServer((req,res)=>{
    let parseul=url.parse(req.url,true);
    console.log(parseul);
    let path = parseul.pathname;
    let query= parseul.query;

    res.setHeader('content-type','text/html');

    
    if(path==='/'){
        res.end('<h1>home page</h1>');

    }
    else if( path === '/about'){
        res.end('')
    }
    else{
        res.end('<h1>404 page not found</h1>');
    }
})

    server.listen(5000,()=>{
        console.log('server is running on port 3000');

        
    })

