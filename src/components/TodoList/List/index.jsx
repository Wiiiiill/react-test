import React, { Component } from 'react'
import Item from './Item/'

export default class List extends Component {
    render() {
        return (
            <div>
                list
                    <Item/>
                    <Item/>
                    <Item/>
            </div>
        )
    }
}
