import { useEffect } from 'react';
import './Login.css';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = `986537667210-c7o39l95n3l1mi813k1uheh4t4fm6joq.apps.googleusercontent.com`;

const Login = () => {
  return (
    <div class='LoginDiv'>
      <GoogleButton />
    </div>
  )
}

const GoogleButton = () => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const onSuccess = ( res ) => {
    console.log(res);
  }

  const onFailure = (err) => {
    console.log(err);
  }
  
  return (
    <GoogleLogin clientId={clientId} responseType={"id_token"} onSuccess={onSuccess} onFailure={onFailure} />
  );
}

export default Login;