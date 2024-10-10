import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens";

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-none d-lg-block content-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duancanhan-47862.appspot.com/o/lavulogo.png?alt=media&token=b67a9f1b-77a2-46fc-af74-530ccc5b6a56"
              className="w-80 h-80"
              alt="logo"
            />
            <h1 className="text-orange-500 mt-2">Lavu’s shoesshop</h1>
          </div>
        </div>

        <div className="col flex justify-center items-center h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
