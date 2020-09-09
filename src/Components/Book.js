import React, { Component } from 'react'

class Book extends Component {

  constructor(props) {
    super(props)
    this.state = {
        liDisplay: false
    }
  }

  handleClick = () => {
    this.setState({
      liDisplay: !this.state.liDisplay
    })  
  }

  render() {
    return (
      <li onClick={this.handleClick}>
                <h3>{this.props.item.volumeInfo.title}</h3>
                {this.props.item.volumeInfo.authors?.map((author) => <p>{author}</p>)}
                { this.state.liDisplay && 
                <>
                <p>{this.props.item.saleInfo.retailPrice?.amount || "No price found."}</p>
                <p>{this.props.item.searchInfo?.textSnippet || null}</p>
                </>
                }
  
              </li>
    )
  }
}

export default Book