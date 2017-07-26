const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.send('Hello World!');
});

//Respond to POST request on the root route (/), the application’s home page:
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

//Respond to a PUT request to the / route:
app.put('/', function (req, res) {
  res.send('Got a PUT request at /')
})

//Respond to a DELETE request to the / route:
app.delete('/', function (req, res) {
  res.send('Got a DELETE request at /')
})

app.listen(3000,function(){
    console.log('Hello app is listening on port3000!!!');
});