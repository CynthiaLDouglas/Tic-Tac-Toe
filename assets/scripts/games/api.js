const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const nextGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
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

<<<<<<< HEAD
const nextGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

=======
>>>>>>> logicRetry
const howMany = function (game) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: game,
      over: false
    }
  })
}

module.exports = {
  howMany,
  newGame,
  nextGame,
<<<<<<< HEAD
=======
  howMany,
>>>>>>> logicRetry
  onClick
}
