const api = require('./api')
const ui = require('./ui')
const store = require('../store')



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
// goal combine create new game and create next game and have them count
// how many times a game is created.

const createNewGame = function (event) {
  event.preventDefault()
  // Create New Board when clicked
  const game = event.target
  // Use jquery to on click (event.target) add one to the count of games
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
//  next game and board erase
const createNextGame = function (event) {
  event.preventDefault()
  $('.cell').empty()
  //numOfGames(game)
  // Create New Board when clicked
  api.nextGame()
    .then(ui.nextGameSuccess)
    .catch(ui.nextGameFailure)
}

//  goal: this would pull the number of games played above and
// be displayed on the user.
const onHowMany = function (event) {
  event.preventDefault()
  let numOfGames = store.counter
  api.howMany(numOfGames)
    .then(ui.howManySuccess)
    .catch(ui.howManyFailure)
}

module.exports = {
  createNewGame,
  createNextGame,
  onHowMany,
  onSelect
}
// if ('<what can I put here?>' === 'X' || 'O') {
//   store.game.over = !store.game.over
// }
// if (store.game.over === true) {
//   $('#message').text('Game Over')
