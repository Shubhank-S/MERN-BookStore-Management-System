import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddStudent from "./pages/AddStudent/AddStudent";
import AddBook from "./pages/AddBook/AddBook";
import EditBook from "./pages/EditBook/EditBook";
import DeleteBook from "./pages/DeleteBook/DeleteBook";
import Logout from "./pages/Logout/Logout";
import Error from "./pages/Error/Error";

function App() {
  const[role,setRolee] = useState('')
  return (
    <main>
      
      <BrowserRouter>
      <Navbar role={role} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/books" element={<Books />}/>
          <Route path="/login" element={<Login setRolee={setRolee}/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/addstudent" element={<AddStudent />}/>
          <Route path="/addbook" element={<AddBook />}/>
          <Route path="/updatebook/:id" element={<EditBook />}/>
          <Route path="/deletebook/:id" element={<DeleteBook />}/>
          <Route path="/logout" element={<Logout setRolee={setRolee}/>}/>
          <Route path="*" element={<Error />}/>
          <Route />
        </Routes>

      </BrowserRouter>
    </main>
  );
}

export default App;
