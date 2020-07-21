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

const onSelect = function (event) {
  event.preventDefault()
  store.currentBox = event.target
  const cellIndex = $(store.currentBox).data('index')
  if ($(store.currentBox).text() === '') {
    const choiceValue = function (choice) {
      if (choice === 'X') {
        store.player = 'O'
      } else {
        store.player = 'X'
      }
      return store.player
    }
    const cellValue = choiceValue(store.player)
    api.onClick(cellIndex, cellValue)
      .then(ui.clickSuccess)
      .catch(ui.clickFailure)
  } else {
    $('#message').text('Try another spot')
  }
}

module.exports = {
  createNewGame,
  onSelect
}
