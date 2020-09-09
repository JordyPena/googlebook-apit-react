import React from 'react'
import Book from "./Book"

class Display extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.data.map((item, idx) => {
          console.log(item)
          return ( 
            
            <Book item={item}/>
              
            )
          })}
        </ul>
      </div>
    )
  }
}



export default Display
