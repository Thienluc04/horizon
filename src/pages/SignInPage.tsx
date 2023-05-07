import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

export interface SignInPageProps {}

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "The password must be more than 8 characters"),
});

export default function SignInPage(props: SignInPageProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  useEffect(() => {
    if (errors) {
      const error = Object.values(errors);
      const errorMessage: String | undefined = error[0]?.message?.toString();

      toast.error(errorMessage);
    }
  }, [errors]);

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleSignIn: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    console.log(values);
  };

  return (
    <>
      <div className="mx-auto md:w-[500px] w-[350px] pt-[150px] md:px-0 px-3">
        <div className="text-center mb-5 flex justify-center">
          <Link to={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(handleSignIn)}
          noValidate
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              control={control}
              name="email"
              placeholder="Please enter your email"
              type={"email"}
            ></Input>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              control={control}
              name="password"
              placeholder="Please enter your password"
              type={passwordShow ? "text" : "password"}
              passwordShow={passwordShow}
              setPasswordShow={setPasswordShow}
              hasEye
            ></Input>
          </div>
          <p>
            Do you not have an account?{" "}
            <Link to={"/register"} className="text-primary">
              Register
            </Link>
          </p>
          <Button
            isLoading={isSubmitting}
            type="submit"
            className="w-[150px] mx-auto"
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
