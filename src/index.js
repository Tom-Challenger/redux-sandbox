import { createStore, bindActionCreators } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './counter'

import reducer from './reducer'
import * as actions from './actions'

const store = createStore(reducer)
const { dispatch } = store

// Реализация логики связывания функции создающей action и механизма отправки события dispatch()
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

/*
Аргумент actions - является объектом, 
где ключ - это имя обернутой функции, 
а значение - это функция-action (функция возвращающая объект action)*/
const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

const update = () => {
  ReactDOM.render(
    <Counter 
      counter={store.getState()} 
        inc={inc} 
        dec={dec} 
        rnd={() => {
          const value = Math.floor(Math.random()*10)
          rnd(value)
        }} />, 
    document.getElementById('root'))
}

update()
store.subscribe(update)