const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({expected: false}))

app.use(bodyParser.json())

app.listen(port, () => console.log(`Server started on port: ${port}`))