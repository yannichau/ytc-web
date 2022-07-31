// src/views/profile.js

import React from 'react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import LoadingGif from './LoadingGIF';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <br></br>
      <div className="row align-items-center">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <LoadingGif />,
  returnTo: () => window.location.hash.substr(1),
});

/*
Arguments
loginOptions: It behaves exactly like the configuration options you can pass to loginWithRedirect() 
to customize the login experience.

returnTo: Lets you specify a path for React to redirect a user after 
the login transaction that the user triggered in this component completes.

onRedirecting: It renders a component while your React application redirects the user to the login page.
*/