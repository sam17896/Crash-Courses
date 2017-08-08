import React from 'react'
import { render } from 'react-dom'
import {SkiDayCount} from './components/SkiDayCount'


render(
	<SkiDayCount  total={50}
					powder={10}
					backcountry={20}
						goal={100}/>,
	document.getElementById('react-container')
)