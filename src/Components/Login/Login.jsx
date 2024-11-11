import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authprovider } from "../../Authcontext/Authcontext";

const Login = () => {

    const {signInhandle} = useContext(Authprovider)


    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password);

        signInhandle(email, password)
        .then(res => {
            console.log(res.user);
        })
        

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <h1>New to this website ? Place <Link to="/signup"><span className='text-blue-700'>Register</span></Link> </h1>
      </form>
    </div>
    );
};

export default Login;