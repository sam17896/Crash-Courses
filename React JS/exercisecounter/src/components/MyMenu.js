import { Component, PropTypes } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon  from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDayIcon from 'react-icons/lib/fa/table';

export class MyMenu extends Component {
    render() {
      return (
        <nav className="menu">
        <NavLink to="/" activeClassName="selected">
            <HomeIcon />
        </NavLink>

        <NavLink to="/add-day" activeClassName="selected">
            <AddDayIcon />
        </NavLink>

        <NavLink to="/list-days" activeClassName="selected">
            <ListDayIcon />
        </NavLink>
    </nav>
      )
    }
  }