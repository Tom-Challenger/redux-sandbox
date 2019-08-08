import { createStore } from 'redux'

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
    case 'DEC':
      return state - 1
    case 'RND':
      return state + action.payload

    default:
      return state
  }
}

const store = createStore(reduser)

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch({type:'INC'})
  })


document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch({type:'DEC'})
  })

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10)
    store.dispatch({
      type:'RND',
      payload
    })
  })

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
}

store.subscribe(update)