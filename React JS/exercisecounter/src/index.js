import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import {App} from './components/App'
import {Whoops404} from './components/Whoops404'
import { BrowserRouter as Router, Route } from 'react-router-dom'



render(
// 	<SkiDayCount />,
	<Router>
		<div>
			<Route exact={true} path="/" component={App}/>
		</div>
	</Router>,
	document.getElementById('react-container')
)