import {useState } from "react";
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { login, loginwithgoogle, signup } from "../../../backend/firebase";


const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber]= useState("");
  const [name, setName] = useState("");
  
  const user_auth=async (event)=>{
    event.preventDefault();
    
    if(isSignUp==="Sign In"){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
   
  }
  const user_auth_google=async(event)=>{
    event.preventDefault();
    
    if(isSignUp==="Sign Up")
    {
      await loginwithgoogle();
    }
    if(isSignUp==="Sign In")
        {
          await loginwithgoogle();
        }
  }

  const handleToggle = () => setIsSignUp("Sign Up");

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f4f8",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          borderRadius: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.35)",
          overflow: "hidden",
          width: "800px",
          maxWidth: "100%",
          minHeight: "500px",
          display: "flex",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {/* Sign In Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            transition: "opacity 0.5s ease-in-out",
            opacity: isSignUp ? 0 : 1,
            pointerEvents: isSignUp ? "none" : "auto",
          }}
        >
          <img
            src="public\logo.svg"
            alt="Logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
          <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Sign In</h1>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <button
              onClick={user_auth_google}
              style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }}
            >
              <FaGoogle />
            </button>
            <a
              href="#fb"
              style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }}
            >
              <FaFacebook />
            </a>
            <a
              href="#github"
              style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }}
            >
              <FaGithub />
            </a>
            <a 
              href="#linkedin"
              style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }}
            >
              <FaLinkedin />
            </a>
          </div>
          <p style={{ fontSize: "14px", marginBottom: "10px" }}>
            Or use your email for login
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          <a
            href="#forgot"
            style={{
              fontSize: "13px",
              color: "#036666",
              marginBottom: "20px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forget your password?
          </a>
          <button
            type="submit"
            style={{
              backgroundColor: "#036666",
              color: "white",
              padding: "10px 45px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }} onClick={user_auth}
          >
            Sign In
          </button>
        </div>

        {/* Sign Up Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            transition: "opacity 0.5s ease-in-out",
            opacity: isSignUp ? 1 : 0,
            pointerEvents: isSignUp ? "auto" : "none",
          }}
        >
          <img
            src="public\logo.svg"
            alt="Logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
          <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
            Create an Account
          </h1>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <button onClick={user_auth_google}>
  <FaGoogle />
</button>

            <a
              href="#fb"
              style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }}
            >
              <FaFacebook />
            </a>
            <a
              href="#github"
              style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }}
            >
              <FaGithub />
            </a>
            <a
              href="#linkedin"
              style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }}
            >
              <FaLinkedin />
            </a>
          </div>
          <p style={{ fontSize: "14px", marginBottom: "10px" }}>
            Or provide us with your info!
          </p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}            
            placeholder="Name"

            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          <input
            type="number"
            value= {number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone number"
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          <input
            type="password"

            value ={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password"

            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#036666",
              color: "white",
              padding: "10px 45px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Toggle Panel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "50%",
            height: "100%",
            backgroundColor: "#036666",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            transition: "transform 0.5s ease-in-out",
            transform: isSignUp ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>
            {isSignUp ? "Already a member?" : "New here?"}
          </h1>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            {isSignUp
              ? "Back for more? Let’s dive into the action!"
              : "Join us to get started!"}
          </p>
          <button
            onClick={handleToggle}
            style={{
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;    