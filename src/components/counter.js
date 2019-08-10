import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({counter, inc, dec, rnd}) => {
	return(
		<div className="jumbotron">
	    	<h2>{counter}</h2>
	    	<button onClick={dec} className="btn btn-primary btn-lg">DEC</button>
	    	<button onClick={inc} className="btn btn-primary btn-lg">INC</button>
	    	<button onClick={rnd} className="btn btn-primary btn-lg">RND</button>
	    </div>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
// 	return {
// 		inc,
// 		dec,
// 		rnd: () => {
// 			const randomValue = 
// 			rnd(randomValue)
// 		} 
// 	}
// }

// connect - это HOC,
// connect - внутри себя создает новый компонент
// Новый компонент - оборачивает переданный компонент
// Внутри компонента, используя Context API - мы получаем доступ ко всему 'store'
// для того чтобы получить значения из stare и передать в наш компонент
// мы используем функцию которая называется mapStateToProps
// В итоге значение counter из state передастья под именем counter в компонент Counter
export default connect(mapStateToProps, actions)(Counter)