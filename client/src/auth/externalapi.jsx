import React, { useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import LoadingGif from '../components/LoadingGIF';
import axios from "axios";

const ExternalApi = () => {
    const [message, setMessage] = useState('');
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const { getAccessTokenSilently } = useAuth0();

    const callApi = async () => {
        try {      
            const res = await axios.get(`${serverUrl}/api/blogposts`);
            setMessage(JSON.stringify(res.data));
            console.log(message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    const callSecureApi = async () => {
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch(
                `${serverUrl}/api/message`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            const responseData = await response.json();

            console.log(responseData)
            setMessage(responseData.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="container">
            <h1>External API</h1>
            <p>
                Use these buttons to call an external API. The protected API call has an
                access token in its authorization header. The API server will validate
                the access token using the Auth0 Audience value.
            </p>
            <div
                className="btn-group mt-5"
                role="group"
                aria-label="External API Requests Examples"
            >
                <button type="button" className="btn btn-primary" onClick={callApi}>
                    Get Public Message
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={callSecureApi}
                >
                    Get Protected Message
                </button>
            </div>
            {message && (
                <div className="mt-5">
                    <h6 className="muted">Result</h6>
                    <div className="container-fluid">
                        <div className="row">
                            <code className="col-12 text-light bg-dark p-4">{message}</code>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default withAuthenticationRequired(ExternalApi, {
    onRedirecting: () => <LoadingGif />,
    returnTo: () => window.location.hash.substr(1),
  });