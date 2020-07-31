const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const createNewGame = function (event) {
  event.preventDefault()
  // Create New Board when clicked
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const createNextGame = function (event) {
  event.preventDefault()
  // Create New Board when clicked
  api.nextGame()
    .then(ui.nextGameSuccess)
    .catch(ui.nextGameFailure)
}

const onSelect = function (event) {
  event.preventDefault()
  store.currentBox = event.target
  const cellIndex = $(store.currentBox).data('index')
  if ($(store.currentBox).text() === '') {
    const cellValue = store.player
    api.onClick(cellIndex, cellValue)
      .then(ui.clickSuccess)
      .catch(ui.clickFailure)
  } else {
    $('#message').text('Try another spot')
  }
}

const onHowMany = function (event) {
  event.preventDefault()
  api.howMany()
    .then(ui.howManySuccess)
    .catch(ui.howManyFailure)
}

module.exports = {
  createNewGame,
  createNextGame,
  onHowMany,
  onSelect
}
