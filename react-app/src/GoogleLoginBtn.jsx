import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const GoogleLoginBtn = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = async (response) => {
        console.log(response);

        try {
            const res = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.credential}`);
            const userInfo = await res.json();
            console.log(userInfo);

            // 로그인 성공 시 대시보드 페이지로 이동
            navigate('/dashboard');
        } catch (error) {
            console.error("Error verifying ID token:", error);
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
                console.log("Login Failed");
            }}
            width={"500px"}
        />
    );
};

export default GoogleLoginBtn;
