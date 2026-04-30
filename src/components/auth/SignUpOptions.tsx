import facebookIcon from "@/assets/icons/facebook2.png";
import githubIcon from "@/assets/icons/github.png";
import googleIcon from "@/assets/icons/google.png";
import { baseURL } from "@/services/api/axiosClient";
import { Box } from "@mui/material";

const SignUpOptions = () => {
  return (
    <Box className="py-2 flex border-gray-200 items-center justify-center space-x-3">
      <a href={`${baseURL}/auth/google`}>
        {" "}
        <img
          src={googleIcon}
          alt="google signup"
          className="w-10 h-10 rounded-md cursor-pointer border p-2"
        />
      </a>
      <a href={`${baseURL}/auth/facebook`}>
        <img
          src={facebookIcon}
          alt="Facebook signup"
          className="w-10 h-10 rounded-md cursor-pointer border p-2"
        />
      </a>
      <a href={`${baseURL}/auth/github`}>
        <img
          src={githubIcon}
          alt="github signup"
          className="w-10 h-10 rounded-md cursor-pointer border p-2"
        />
      </a>
    </Box>
  );
};

export default SignUpOptions;
