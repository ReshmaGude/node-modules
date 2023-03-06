// creating a server
const http = require("http");
// console.log(http)
const server = http.createServer((req,res)=>{

    //ssending Response
    res.write("this is response")
    //loading should end
    res.end();
});

//listening to the port
server.listen(1234,()=>{
    console.log("Up and Running")
})