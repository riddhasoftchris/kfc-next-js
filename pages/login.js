import * as React from "react";
import ButtonComponent from "../components/buttons/button";
import InputComponent from "../components/formComponents/input_component";

export default function SignIn() {
  return (
    <div
      className="bg-blend-darken bg-cover bg-center relative "
      style={{
        backgroundImage: `url("https://images.deliveryhero.io/image/fd-th/LH/b0zg-hero.jpg")`,
      }}
    >
     <div className="absolute bg-dark opacity-60 w-100 h-100"/> 
      <div className="min-h-screen lg:flex md:flex xl:flex flex mx-0 justify-center">
        <div className="z-10 self-center p-10 hidden lg:flex md:flex xl:flex">
          <div className="self-start hidden lg:flex flex-col text-center text-white">
            <img
              src="https://www.freepnglogos.com/uploads/kfc-png-logo/camera-kfc-png-logo-0.png "
              className="mb-3 align-self-center h-80 w-80"
            />
            <h1 className="mb-3 font-bold text-5xl">Welcome Back KFC </h1>
            <p className="pr-3">
              Manage your contents all over branches Smart TV
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10 m-3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onLogin() {
    const formData = { username: username, password: password };
    console.log(formData);
  }

  return (
    <div className="p-10 bg-white mx-auto rounded-3xl w-100 ">
      <div className="mb-4">
        <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
        <p className="text-gray-500">Please sign in to your account.</p>
      </div>
      <div className="space-y-5">
        <InputComponent
          label={"Email"}
          hintText={"mail@gmail.com"}
          value={username}
          onChange={(e) => setUsername(e)}
        />
        <InputComponent
          label={"Password"}
          isPassword={true}
          hintText={"********"}
          value={password}
          onChange={(e) => setPassword(e)}
        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a href="#" className="text-red-400 hover:text-red-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <ButtonComponent onClick={() => onLogin()} title={"Sign In"} />
        </div>
      </div>
      <div className="pt-5 text-center text-gray-400 text-xs">
        <span>Copyright © 2021-2022 Riddhasoft</span>
      </div>
    </div>
  );
}
