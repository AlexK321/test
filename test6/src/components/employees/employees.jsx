import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Employees() {
  let [dataEmployees, setDataEmployees] = useState([])
  const url = 'https://reqres.in/api/users?per_page=12'
 
  useEffect(() => {
    axios.get(url)
      .then((res) => { setDataEmployees(res.data.data) })
  }, []);
   
  const tableBody = dataEmployees.map(({id, first_name,last_name, email}) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
  ))
  
  return (
    <div>
      <table className="table">
        <caption>
          <b>Employees</b>
        </caption>
        <tbody>
          <tr>
            <th>Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {tableBody}
        </tbody>
      </table>
    </div>
  ) 
}

export default Employees;
