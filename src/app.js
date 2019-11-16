const app = require('express')()

require('run-middleware')(app)

app.get('/', function (req, res) { res.render('index.pug') })
app.get('/api', function (req, res) { res.render('api.pug') })
app.get('/api/peg/ast', require('./api/peg/ast'))
app.get('/api/peg/ast/schema.json', require('./api/peg/ast/schema.json'))
app.get('/api/peg/peg', require('./api/peg/peg'))
app.get('/api/peg/peg/schema.json', require('./api/peg/peg/schema.json'))
app.get('/api/peg/peg/schema/schema.json', require('./api/peg/peg/schema/schema.json'))
app.get('/resources/peg.peg', require('./resources/peg.peg'))

module.exports = app
