import React from "react";
import "./Table.css"


function Table(props) {

  const {handleSort, sortAscending, results}= props
  //const ascending = results.sort((a,b) => a.name.last - b.name.last);
  const ascending  = results.sort((a,b) => {
    return a.name.last < b.name.last ? 1 : -1;
  })
  console.log("Ascending results===>", ascending);
  //const descending = results.sort((b,a) =>  b.name.last - a.name.last)
  
  const descending  = results.sort((a,b) => {
    return a.name.last > b.name.last ? 1 : -1;
  })
  console.log("Descending results===>", ascending);

  // const ascending  = results.sort((function(a, b){return a-b}));
  // const descending  = results.sort((function(a, b){return b-a}));


  const ascendingMap = ascending.map(employee => {
    console.log(`last name ascending --> `, employee.name.last)
    return (
      <tr key={employee.phone}>
        <td><img alt="employee" src={employee.picture.thumbnail}/></td>
        <td>{employee.name.first + " " + employee.name.last}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
        <td>{employee.dob.date}</td> 
      </tr>
    )
  })
  const descendingMap = descending.map(employee => {
    console.log(`last name descending --> `, employee.name.last)
    return (
      <tr key={employee.phone}>
        <td><img alt="employee" src={employee.picture.thumbnail}/></td>
        <td>{employee.name.first + " " + employee.name.last}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
        <td>{employee.dob.date}</td> 
      </tr>
    )
  })
 
  return (

      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name
          <button className="sortBtnStyle" onClick ={()=>handleSort()}> Sort</button></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>

        {sortAscending ? ascendingMap :  descendingMap}
         
      </tbody>
    </table>
  );
  }



export default Table;





