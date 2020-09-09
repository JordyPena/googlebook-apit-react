import React from 'react'

function Form(props) {

  return (
    <div>
      <form onSubmit={props.handleSubmit} className="form">
        Search:<input
         type="text"
         placeholder="Book Name"
         name="searchInput"
         value={props.searchInput}
         className="search-bar"
         onChange={props.handleChange}
        />
        <button className="button">Search</button>
        <br/>
        Print Type:
        <select 
        name="printSelect" 
        className="print-type"
        onChange={props.handleChange}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
           
        <br/>
          Book Type: 
          <select 
          name="bookSelect" 
          className="book-type"
          onChange={props.handleChange}>
            <option value="partial">Partial</option>
            <option value="free-ebooks">Free Ebooks</option>
            <option value="paid-ebooks">Paid Ebooks</option>
          </select>
          

      </form>

     
    </div>
  )
}

export default Form
