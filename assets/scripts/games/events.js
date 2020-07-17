const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const toMakeMove = function (event) {
  event.preventDefault()
  // I need to have this cycle through x, o and <blank>
  api.makeMove()
    .then(ui.makeMoveSuccess)
    .catch(ui.makeMoveFailure)
}
