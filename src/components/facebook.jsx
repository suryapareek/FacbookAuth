import React, { useEffect } from "react";

const FacebookLoginButton = () => {
  useEffect(() => {
    // Load Facebook SDK script
    if (!window.FB) {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "1155209669981202", // your FB app id here
          cookie: true,
          xfbml: true,
        version: "v18.0", 
        });
      };

      // Load the SDK asynchronously
      (function (d, s, id) {
        const element = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        element.parentNode.insertBefore(js, element);
      })(document, "script", "facebook-jssdk");
    }
  }, []);

  const handleLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          console.log("Welcome! Fetching your information...");
          window.FB.api(
            "/me",
            { fields: "name,email,picture" },
            (userInfo) => {
              console.log("User Info:", userInfo);
            }
          );
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <button onClick={handleLogin} style={{ padding: "10px", fontSize: "16px" }}>
      <i className="fab fa-facebook" style={{ marginRight: "8px" }}></i> Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;
