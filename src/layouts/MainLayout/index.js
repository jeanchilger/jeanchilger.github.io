import React, { Component } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"


export default class MainDefault extends Component {
    render() {
        return (
            <div>
                <Header />

                { this.props.children }

                <Footer />
            </div>
        )
    }
}