const express  = require('express');
const cors = require ("cors");
const bodyParser = require ("body-parser");

const schemaToTable = require('./models/model');
const controller = require('./src/app/service/controller')

const app = express();
const port = 3000;
schemaToTable.sync()
app.use(cors())
app.use(bodyParser.json())

app.get('/compounds', controller.getAllPagination)
app.get('/compounds/:id', controller.getCompound)
app.put('/upsert', controller.updateOrInsertCompound)
app.delete('/delete/:id', controller.deleteCompound)


app.listen(port, () => {
    console.log('Server running on port ', port)
})