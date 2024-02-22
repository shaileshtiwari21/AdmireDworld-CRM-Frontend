import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api/auth";
import toast from "react-hot-toast";
import { useState } from "react";
const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
function Main() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loginUser] = useLoginUserMutation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const response: any = await loginUser(data);

      console.log("res", response);

      if (response?.data?.success) {
        localStorage.setItem("token", response?.data?.token);
        toast.success("Login Successfully!");

        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        toast.error(response?.error?.data?.message);
      }
    } catch (err) {
      toast.error("Somthing went wrong");
      console.log("err", err);
    }
  };
  return (
    <>
      <div
        className={clsx([
          "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <DarkModeSwitcher />
        {/* <MainColorSwitcher /> */}
        <div className="container relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex">
              <a href="" className="flex items-center pt-5 -intro-x">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-6"
                  src={logoUrl}
                />
                <span className="ml-3 text-lg text-white"> AdmireDworld </span>
              </a>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-1/2 -mt-16 -intro-x"
                  src={illustrationUrl}
                />
                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                  A few more clicks to <br />
                  sign in to your account.
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                  Manage all your CRM data in one place
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                  Sign In
                </h2>
                <div className="mt-2 text-center intro-x text-slate-400 xl:hidden">
                  A few more clicks to sign in to your account. Manage all your
                  CRM data in one place
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-8 intro-x">
                    <FormInput
                      type="text"
                      className="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <p className="text-red-500 mt-2">{errors.email?.message}</p>
                    <FormInput
                      type="password"
                      className="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                      placeholder="Password"
                      {...register("password")}
                    />
                    <p className="text-red-500 mt-2">
                      {errors.password?.message}
                    </p>
                  </div>
                  <div className="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                    {/* <div className="flex items-center mr-auto">
                      <FormCheck.Input
                        id="remember-me"
                        type="checkbox"
                        className="mr-2 border"
                      />
                      <label
                        className="cursor-pointer select-none"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div> */}
                    {/* <a href="">Forgot Password?</a> */}
                  </div>
                  <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                    <Button
                      disabled={isLoading}
                      variant="primary"
                      className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                    >
                      {isLoading && (
                        <div
                          className="mr-4 inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                          role="status"
                        ></div>
                      )}{" "}
                      Login
                    </Button>
                    {/* <NavLink to="/register">
                      <Button
                        variant="outline-secondary"
                        className="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
                      >
                        Register
                      </Button>
                    </NavLink> */}
                  </div>
                </form>

                {/* <div className="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-left">
                  By signin up, you agree to our{" "}
                  <a className="text-primary dark:text-slate-200" href="">
                    Terms and Conditions
                  </a>{" "}
                  &{" "}
                  <a className="text-primary dark:text-slate-200" href="">
                    Privacy Policy
                  </a>
                </div> */}
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
