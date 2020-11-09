import React from 'react';
import  GoogleLogin  from 'react-google-login';

function Login()
{
    const responseSuccessGoogle = (response) =>
    {
        
       alert(response);
       console.log("succ");
    }
    const responseFailureGoogle = (response) =>
    {
        console.log("fail");
        console.log(response);
    }
    return (
        <>
        <h1>Login with Google</h1>
        <GoogleLogin
    clientId="285279186670-72f81u61t56jebkjfvfrfk7anq5f93jj.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseSuccessGoogle}
    onFailure={responseFailureGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </>
    )
}

export default  Login;