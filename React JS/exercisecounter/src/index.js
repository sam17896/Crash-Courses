import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import {HashRouter, Route} from 'react-router-dom';

window.React = React

render(
	<HashRouter>
       <div> 
			<Route exact path="/" component={App}/>
			<Route path="/list-days" component={App}/>
			<Route path="/add-day" component={App}/>
			<Route path="/*" component={Whoops404}/>
		</div>
	</HashRouter>,
	document.getElementById('react-container')
)