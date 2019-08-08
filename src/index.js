//Начальное значение можно передавать в пераметре по-умолчанию
//const initialState = 0

// Если значение поля .type не удалось распознать,
// то state возвращается неизменно

// Если state изначально не задан,
// то он определяется значением по-умолчанию

const reduser = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1

    default:
      return state
  }
}

let state = reduser( undefined, {})
console.log(state)

state = reduser(state, {type: 'INC'})
console.log(state)

state = reduser(state, {type: 'INC'})
console.log(state)