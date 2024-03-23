import "./login.css"
import Data from "./Data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Login(props) {
  var navigate = useNavigate();
  const [inputValu, setinputValu] = useState("");
  const [passWord, setpassword] = useState("");

  function getIN() {
    var user = Data.find(
      (user) => user.userName === inputValu && user.password === passWord
    );
    if (user) {
      toast.success("Login Success");
      navigate("/Examination");
    } else {
      toast.error("Invalid UseName or Password");
    }
  }

  return (
    <div className="log-in">
      <div className="Welcome">
        <h1>Welcome</h1>
      </div>
      <div className="login-input">
        <div>
          <span>User Name</span>
          <input type="text" onChange={(e) => setinputValu(e.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button onClick={() => getIN()}>
          Submit
          <ToastContainer />
        </button>
      </div>
    </div>
  );
}

export default Login;
