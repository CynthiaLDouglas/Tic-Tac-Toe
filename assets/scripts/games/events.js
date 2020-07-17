const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const toMakeMove = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.makeMoveSuccess)
    .catch(ui.makeMoveFailure)
}
