import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-app">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-xs-12 d-none d-lg-block d-md-block">
          <img src="./gedung-unj.png" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12">
          <div className="container">
            <h1 className="text-center">
              SISTEM PEMBIMBING AKADEMIK <br />
              ILMU KOMPUTER <br />
              UNIVERSITAS NEGERI JAKARTA
            </h1>
            <div class="formContainer">
              <form action="#">
                <div className="form-group mt-3">
                  <label className="mb-2 fs-5" for="username">
                    Email
                  </label>
                  <input
                    className="form-control form-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div className="form-group mt-3">
                  <div className="d-flex justify-content-between">
                    <label className="mb-2 fs-5" for="password">
                      Password
                    </label>
                    <Link className="fs-5" to="/Daftar">Lupa Password?</Link>
                  </div>
                  <input
                    className="form-control form-input mb-2"
                    id="password"
                    name="password"
                    placeholder="Masukan Password"
                  />
                </div>
                <Link className="fs-6" to="/Daftar">Buat akun</Link>
                <button className="btn btn-primary btn-lg w-100 mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
