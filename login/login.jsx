import React from "react";
import "./login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import  {app} from "../../firebase";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);


  const navigate = useNavigate();

async function handleSignIn() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.displayName)
    navigate("/dashboard")
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



  return (
    <div className="login">
       <img 
         alt=""
         src="https://openlearnlive-s3bucket.s3.eu-west-2.amazonaws.com/f0/74/f0747fb58da533eeb865e2c9beafd62203d074cd?response-content-disposition=inline%3B%20filename%3D%221_emil-widlund-xrbbXIXAWY0-unsplash.jpg%22&response-content-type=image%2Fjpeg&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4GIOSMQ5JGMSLFXY%2F20231118%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231118T233137Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21563&X-Amz-Signature=25c5be37064073d1a7241fc18e959f4e1c12da358c6726a23142bf1943a883aa"></img>
      <div className="login-cont">
        <div className="login-head">
        
         <h1>WELCOME</h1>
          <p>
          <br></br><br></br><br></br>
            <br></br><strong>ENJOY YOUR DREAM BOOK</strong> <br></br><br></br><br></br>
            
          </p>
         
        </div>
        <div className="login-button">
          
          <button onClick={handleSignIn} className="login-btn">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
            ></img>
            <p> Sign in with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}