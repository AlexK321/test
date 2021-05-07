import React, { useState, useEffect } from 'react';
import axios from 'axios'

import ModalWindow from '../modal/modal'
import RemoveModalWindow from '../removeModal/removeModal'

import styles from "./employees.module.scss";

function Employees() {
  let [dataEmployees, setDataEmployees] = useState([])
  const url = 'https://reqres.in/api/users?per_page=12'

  useEffect(() => {
    axios.get(url)
      .then((res) => { setDataEmployees(res.data.data) })
  }, []);

  const addEmployee = (employee) => {
    setDataEmployees([
      ...dataEmployees, {
        id: Number(employee.id),
        email: employee.email,
        first_name: employee.firstName,
        last_name: employee.lastName
    }])
  }

  const removeEmployee = (id) => {
    const newEmployees = dataEmployees.filter(item => item.id !== Number(id))
    setDataEmployees(newEmployees)
  }

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
      <table className={styles.table}>
        <caption>
          <b>Employees</b>
        </caption>
        <tbody>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {tableBody}
        </tbody>
      </table>
      <div className={styles.btn_container}>
        <ModalWindow addEmployee={addEmployee} />
        <RemoveModalWindow removeEmployee={removeEmployee}/> 
      </div>
    </div>
  ) 
}

export default Employees;
