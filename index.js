const express = require('express')
const port = 8081
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

let tasks = ['Faizan', 'Sufiyan']


app.get('/', (req, res) => {
    return res.render('todoList', {
        tasks
    })
})
app.post('/insartTask',(req,res)=>{
    tasks.push(req.body.task)
    return res.redirect('/')
})
app.get('/editTask',(req,res)=>{
    const Id=req.query.Id
    let data=tasks.filter((task,index)=>{
        return Id==index
    })
    console.log(data[0]);
    return res.render('edit',{
        data
    })
})
app.get('/deletTask', (req, res) => {
    const Id = req.query.Id
    let data = tasks.filter((task, index) => {
        return Id != index
    })
    tasks = data
    console.log(data);
    return res.redirect('back')
})

app.listen(port, (err) => {
    if (err) {
        console.log("server not start in port");
        return false;
    }
    console.log("server start http://localhost:" + port);
})