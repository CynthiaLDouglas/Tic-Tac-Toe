curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
        "cells": "'"["${0}","${1}","${2}","${3}","${4}","${5}","${6}","${7}","${8}"]"'",
        "over": "'"${OVER}"'"
    }
  }'

echo
