module.exports = function (req, res) {
  res.json({
    $id: 'https://' + req.hostname + req.originalUrl,
    $schema: 'http://json-schema.org/draft-07/schema#',
    description: 'A PEG abstract syntax tree',
    type: 'object'
  })
}
