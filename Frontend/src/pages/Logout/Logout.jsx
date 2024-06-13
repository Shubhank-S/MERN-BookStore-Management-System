import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout({ setRolee }) {
  const navigate = useNavigate();
  useEffect(() => {
    (async function () {
      try {
        const json = await axios.get(`http://localhost:8080/admin/logout`);
        console.log(json);
        if (json.data.success) {
          setRolee("");
          toast.success(json.data.message)
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [toast]);
  return <div>Logout</div>;
}

export default Logout;
