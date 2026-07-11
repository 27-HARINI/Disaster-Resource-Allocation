import { useState } from "react";
import "./../styles/Login.css";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaGlobe,
  FaBell
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { toast } from "react-toastify";

function Login() {

    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);

   const handleLogin = (e) => {

    e.preventDefault();

    loginUser({

        email,

        password

    })

    .then((res)=>{

        toast.success(res.data.message);

        localStorage.setItem("isLoggedIn","true");

        navigate("/dashboard");

    })

    .catch(()=>{

        toast.error("Invalid Email or Password");

    });

};

    return(

        <div className="login-page">

            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>

            <div className="left-panel">

                <div className="brand">

                    <h1>🌍 ResQNet AI</h1>

                    <h2>Disaster Resource Allocation System</h2>

                    <p>

                        Smart Emergency Response Platform powered by
                        Artificial Intelligence for Disaster Monitoring,
                        Resource Allocation and Relief Management.

                    </p>

                    <div className="feature">

                        <FaShieldAlt/>

                        <span>AI Assisted Decision Making</span>

                    </div>

                    <div className="feature">

                        <FaGlobe/>

                        <span>Real-Time Disaster Monitoring</span>

                    </div>

                    <div className="feature">

                        <FaBell/>

                        <span>Instant Emergency Alerts</span>

                    </div>

                </div>

            </div>

            <div className="login-card">

                <h2>Welcome Back 👋</h2>

                <p>Login to continue</p>

                <form onSubmit={handleLogin}>

                    <div className="input-group-custom">

                        <FaEnvelope className="icon"/>

                        <input

                            type="email"

                            placeholder="Email Address"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                            required

                        />

                    </div>

                    <div className="input-group-custom">

                        <FaLock className="icon"/>

                        <input

                            type={showPassword?"text":"password"}

                            placeholder="Password"

                            value={password}

                            onChange={(e)=>setPassword(e.target.value)}

                            required

                        />

                        <span

                            className="eye"

                            onClick={()=>setShowPassword(!showPassword)}

                        >

                            {

                                showPassword

                                ?<FaEyeSlash/>

                                :<FaEye/>

                            }

                        </span>

                    </div>

                    <button className="login-btn">

                        Sign In

                    </button>

                </form>

            </div>

        </div>

    )

}

export default Login;