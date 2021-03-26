export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.jwt) {

    // For Spring Boot back-end
    //headers["Authorization"] = "Bearer " + user.accessToken;
     return { Authorization: "Bearer " + user.jwt };

    // for Node.js Express back-end
    //return { "x-access-token": user.jwt };
    
  } else {
    return {};
  }
}
