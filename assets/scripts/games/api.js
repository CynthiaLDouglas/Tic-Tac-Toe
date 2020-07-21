const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
    // ,
    // data: {
    //   game: {
    //     cells: ['', '', '', '', '', '', '', '', ''],
    //     over: false
    //   }
    // }
  })
}

const onClick = function (index, value) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  onClick
}
