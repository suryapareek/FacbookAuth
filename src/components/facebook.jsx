import React, { useEffect } from "react";

const FacebookLoginButton = () => {
  useEffect(() => {
    // Initialize FB SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1155209669981202",
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });
    };
  }, []);

  const handleFBLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          window.FB.api(
            "/me",
            { fields: "name,email,picture" },
            (userInfo) => {
              console.log("User info:", userInfo);
              // Handle user info (e.g., send to your backend)
            }
          );
        } else {
          console.log("User cancelled login.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <button onClick={handleFBLogin} className="px-4 py-2 bg-blue-600 text-white rounded">
      Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;
