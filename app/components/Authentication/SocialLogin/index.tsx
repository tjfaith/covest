"use client";
import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import useSocialLogin from "./useSocialLogin";

const SocialLogin = () => {
  const { GOOGLE_LOGIN_CLIENT_ID, googleSignUpFailure, googleSignUpSuccess } =
    useSocialLogin();
  return (
    <GoogleOAuthProvider clientId={GOOGLE_LOGIN_CLIENT_ID as string}>
      <GoogleLogin
        theme="filled_black"
        text="continue_with"
        ux_mode="popup"
        type="standard"
        logo_alignment="center"
        onSuccess={(credentialResponse) => {
          googleSignUpSuccess(credentialResponse);
        }}
        onError={() => {
          googleSignUpFailure();
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default SocialLogin;
