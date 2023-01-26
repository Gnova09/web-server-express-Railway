const express = require('express')
require('dotenv').config()


const app = express()
const port = process.env.PORT;


app.set('view engine', 'hbs');
app.use( express.static('template'))
/* 
app.get('/', (req, res)=> {
  
    res.render('template/static/index')

})
app.get('*', (req, res)=> {
  
    res.status(404).sendFile(__dirname+'/public/404.html')

})
 */

app.listen(port,()=>{
    console.log(`Listening at http://web-server-express-railway-production.up.railway.app:${port}`)
})