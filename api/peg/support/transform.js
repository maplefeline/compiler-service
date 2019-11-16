const Ajv = require('ajv')
const jsonpath = require('jsonpath')

const ajv = new Ajv()

function array (result) {
  var array = result.array.map(lower)
  return function (input) {
    return array.map(function (code) {
      return code(input)
    })
  }
}
function join (result) {
  var code = lower(result.join)
  return function (input) {
    var output = code(input)
    return Array.isArray(output[0]) ? output.reduce(function (acc, value) {
      return acc.concat(value)
    }) : output.join()
  }
}
function map (result) {
  var code = lower(result.map)
  return function (input, recurse) {
    return code(input).map(recurse)
  }
}
function object (result) {
  var object = Object.keys(result.object).map(function (key) {
    return { key: key, code: lower(result.object[key]) }
  })
  return function (input) {
    var output = {}
    object.forEach(function (code) {
      output[code.key] = code.code(input)
    })
    return output
  }
}
function path (result) {
  return function (input) {
    return jsonpath.query(input, result.path)
  }
}
function recurse (result) {
  var code = lower(result.recurse)
  return function (input, recurse) {
    return recurse(code(input))
  }
}
function lower (result) {
  if (result.array) {
    return array(result)
  } else if (result.join) {
    return join(result)
  } else if (result.map) {
    return map(result)
  } else if (result.object) {
    return object(result)
  } else if (result.path) {
    return path(result)
  } else if (result.recurse) {
    return recurse(result)
  } else {
    throw Error({ error: result })
  }
};

function compile (code) {
  var processor = code.map(function (value) {
    return {
      validate: ajv.compile(value.schema).validate,
      lower: lower(value.result)
    }
  })
  function recurse (input) {
    var code = processor.find(function (validate) {
      try {
        return validate.validate(input)
      } catch (e) {
        console.log(JSON.stringify(e))
      }
      return false
    })
    if (code) {
      return code.lower(input, recurse)
    }
    throw Error('invalid input')
  }
  return recurse
};

module.exports = compile
