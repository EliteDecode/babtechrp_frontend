import { signUpInputs } from "@/utils/authContents";
import { Box, InputAdornment, IconButton } from "@mui/material";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "../ui/button";
import useRegisterForm from "@/hooks/form-hooks/useRegisterForm";
import { Typography } from "antd";
import ButtonSpinners from "@/helpers/ButtonSpinners";

const RegisterForm = () => {
  const { formik, handleTogglePasswordVisibility, showPassword, isLoading } =
    useRegisterForm();
  return (
    <Box>
      <form onSubmit={formik.handleSubmit} className="space-y-1.5">
        {signUpInputs?.map((item, index) => (
          <Box key={index}>
            <Label className="text-[11px] text-[#0009]" htmlFor={item.id}>
              {item?.label}
            </Label>
            <Input
              className={`text-[12px] ${
                formik.touched[item.id as keyof typeof formik.touched] &&
                formik.errors[item.id as keyof typeof formik.errors] &&
                "border-red-500 border"
              }`}
              id={item?.id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={
                item.type === "password" && showPassword ? "text" : item.type
              }
              placeholder={item?.placeholder}
              icon={
                item?.type === "password" && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end">
                      {showPassword ? (
                        <VisibilityOff style={{ fontSize: "14px" }} />
                      ) : (
                        <Visibility style={{ fontSize: "14px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
            <Box className="relative">
              {formik.touched[item.id as keyof typeof formik.touched] &&
                formik.errors[item.id as keyof typeof formik.errors] && (
                  <Typography className="text-[10px]  text-red-600 ">
                    {formik.errors[item.id as keyof typeof formik.errors]} (*)
                  </Typography>
                )}
            </Box>
          </Box>
        ))}
        <Box className="mt-3">
          <Button
            disabled={isLoading}
            className="w-full"
            style={{ fontFamily: "eczar" }}>
            {isLoading ? <ButtonSpinners /> : "Sign Up"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
