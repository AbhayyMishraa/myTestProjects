const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors()); //enable cors for all the user

app.get("/sum",(req,res)=>{
    const a = parseFloat(req.query.a)
    const b = parseFloat(req.query.b)
    const c = a + b
    res.status(200).send(c.toString())
})
app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
})


// . By default, web browsers restrict web pages from making requests to a different
//  domain than the one that served the web page. In your case, your frontend is 
//running on http://127.0.0.1:5500, and it's trying to make a request to 
//http://localhost:3000 for the backend.

// To resolve this issue, you need to enable CORS on your Express server.
// You can use the cors middleware for this. Install it using: