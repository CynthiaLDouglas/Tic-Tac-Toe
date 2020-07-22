curl "https://tic-tac-toe-api-development.herokuapp.com/sign-out/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
