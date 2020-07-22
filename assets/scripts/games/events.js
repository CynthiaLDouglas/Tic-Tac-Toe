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
// next game and board erase
// const createNextGame = function (event) {
//   event.preventDefault()
//   // Create New Board when clicked
//   api.nextGame()
//     .then(ui.nextGameSuccess)
//     .catch(ui.nextGameFailure)
// }

module.exports = {
  createNewGame,
  // createNextGame,
  onSelect
}
// if ('<what can I put here?>' === 'X' || 'O') {
//   store.game.over = !store.game.over
// }
// if (store.game.over === true) {
//   $('#message').text('Game Over')
