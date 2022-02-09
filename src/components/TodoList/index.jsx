import React, { Component } from 'react'
import Header from './Header/'
import List from './List/'
import Fotter from './Fotter/'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                todolist
                <Header/>
                <List/>
                <Fotter/>
            </div>
        )
    }
}
