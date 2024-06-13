import { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios'

function Dashboard() {
  const[students,setStudents] =useState(0)
  const[admin,setAdmin] =useState(0)
  const[books,setBooks] =useState(0)
  useEffect(() => {
    (async function () {
      const json = await axios.get(
        `http://localhost:8080/dashboard/alldata`
      );
      console.log(json);
      if (json.data.success) {
        setStudents(json.data.student)
        setAdmin(json.data.admin)
        setBooks(json.data.book)
        // navigate("/books");
      }
    })();
  }, []);
  return (
    <div className='dashboard'>
      <div className="dashboard-box">
        <h2>Total Books</h2><br />
        <h2>{books}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Students</h2><br />
        <h2>{students}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Admins</h2><br />
        <h2>{admin}</h2>
      </div>
    </div>
  )
}

export default Dashboard