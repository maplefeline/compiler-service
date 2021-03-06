const Bacon = require('baconjs').Bacon
const peg = require('./support/peg')
const request = require('superagent')

module.exports = function (req, res) {
  if (!req.query.src) {
    return res.status(400).json({ error: 'Request Failed. No query src.' })
  }

  Bacon.fromPromise(request.get(req.query.src)).flatMap(function (res) {
    const statusCode = res.statusCode

    if (statusCode !== 200) {
      res.resume()
      return new Bacon.Error({ error: `Request Failed. ${statusCode}` })
    }

    return (!res.buffered ? Bacon.combineAsArray(
      Bacon.fromEvent(res, 'data').takeUntil(Bacon.fromEvent(res, 'end'))
    ).map(function (body) {
      return Buffer.concat(body).toString('utf8')
    }) : Bacon.once(res.text)).flatMap(Bacon.try(peg.parse))
  }).subscribe(function (event) {
    if (event.isError()) {
      res.status(400).json(event.error)
    } else if (event.hasValue()) {
      res.json(event.value())
    }
  })
}
