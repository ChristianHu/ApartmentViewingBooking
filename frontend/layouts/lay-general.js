import React from 'react'
import ComFooter from '../components/com-footer'
import ComNav from '../components/com-nav'

const LayGeneral = (props) => {
	return (
		<>
			<ComNav></ComNav>
			{props.children}
			<ComFooter></ComFooter>
		</>
	)
}

export default LayGeneral