import React from "react";
import "./Table.css"

function Table(props) {
 
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name
            <button className = "sortBtnStyle" onClick={() => props.handleSort()}> Sort</button></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(employee => {
          return (
            <tr key={employee.phone}>
              <td><img alt="employee" src={employee.picture.thumbnail}/></td>
              <td>{employee.name.first + " " + employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
          <td>{employee.dob.date}</td>
            </tr>
          )
        })}
        
      </tbody>
    </table>
  )
}

export default Table;