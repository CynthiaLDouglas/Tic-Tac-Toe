const store = require('../store')
//  let turn = true

const newGameSuccess = function (response) {
  $('#gamearea').show()
  $('#start-game').hide()
  store.game = response.game
}

const newGameFailure = function () {
  $('#message').text('try again.')
  $('#gamearea').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
  store.game = response.game
  $(event.target).text('X')
      // if (response.game === store.player[0]) {
      //   $('.cell')[index].text('X')
      // } else if (response.game !== store.player[0]) {
      //   console.log('O')
      // }
}

  // if (response.game = store.player[0]) {
  //   $('.cell').text('X')
  // } else if (response.game !== store.player[0]) {
  //   console.log('O')
  // }

const clickFailure = function () {
  $('#message').text('It\'s not your turn.')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickSuccess,
  clickFailure
}
