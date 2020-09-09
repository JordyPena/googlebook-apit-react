import React, {Component} from 'react';
import Header from "./Components/Header";
import Form from "./Components/Form";
import Display from "./Components/Display";



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: "",
      printSelect: "all",
      bookSelect: "partial",

    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.searchInput)
    const {searchInput, printSelect, bookSelect} = this.state
    const url = encodeURI(`https://www.googleapis.com/books/v1/volumes?filter=${bookSelect}&printType=${printSelect}&q=intitle:${searchInput}&key=AIzaSyBgGCKGge7Pe5wkELxYSRg3il5J7nJlsXc`)
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.setState({
          data: responseJson.items
        })
       
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  

  render() {
    let content
    if (this.state.data) {
      content = <Display data={this.state.data}/>
    } 
      
    return (
      <div>
        <Header/>
        <Form handleChange={this.handleChange} searchInput={this.state.searchInput} handleSubmit={this.handleSubmit}/>
        {content}
      </div>
    )
  }
}

export default App




