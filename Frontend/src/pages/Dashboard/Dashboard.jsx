import { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function Dashboard() {
  const [students, setStudents] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [books, setBooks] = useState(0);
  useEffect(() => {
    (async function () {
      const json = await axios.get(`http://localhost:8080/dashboard/alldata`);
      console.log(json);
      if (json.data.success) {
        setStudents(json.data.student);
        setAdmin(json.data.admin);
        setBooks(json.data.book);
        // navigate("/books");
      }
    })();
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard</title>
        </Helmet>

        <Bar
          data={{
            labels: ["Total Books", "Total Students", "Total Admin"],
            datasets: [
              {
                label: "Numbers",
                data: [books, students, admin],
                backgroundColor: ["navy", "maroon", "red"],
                borderRadius: "10",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
