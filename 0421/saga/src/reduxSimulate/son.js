import React, { Component } from 'react'
import ChildOne from "./childOne"
import ChildTow from "./childTwo"

export default class Son extends Component {
    render() {
        return (
            <div>
                Son
           
                <ChildTow age="26"/>
            </div>
        )
    }
}
