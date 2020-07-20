const store = require('../store')
let turn = true

const newGameSuccess = function (response) {
  $('#gamearea').show()
  $('#start-game').hide()
  store.game = response.game
  console.log(response)
}

const newGameFailure = function () {
  $('#message').text('try again.')
  $('#gamearea').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
  console.log(response)
  const player = turn ? 'x' : 'o'
  console.log(player)
//   for (i = 0; i < response.game.cells.length; i++){
//   $('.cell')[i].text = response.game.cells[i]
// }
}

const clickFailure = function () {
  $('message').text('Try Again')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickSuccess,
  clickFailure
}
