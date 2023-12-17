import axios from "axios";
const baseURL = "https://zendesk-backend-6et2.onrender.com/"

const authInstance = axios.create({
    baseURL: baseURL,
  });
  const protecdInstance = axios.create({
    baseURL:baseURL
  })
  
  protecdInstance.interceptors.request.use(config => {
    const User = sessionStorage.getItem('User');
    if (User) {
      const authToken = JSON.parse(User).token;
      config.headers['Authorization']=`Bearer ${authToken}`
    }
    return config;
  })
  
  export {authInstance,protecdInstance}