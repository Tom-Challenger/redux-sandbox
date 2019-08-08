
//Начальное значение можно передавать в пераметре по-умолчанию
//const initialState = 0

// Если значение поля .type не удалось распознать,
// то state возвращается неизменно

// Если state изначально не задан,
// то он определяется значением по-умолчанию

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'RND':
      return state + action.payload

    default:
      return state
  }
}

export default reducer