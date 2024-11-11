
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authprovider } from '../../Authcontext/Authcontext';





const Signup = () => {
    
    const {signupHanlde} = useContext(Authprovider)

    const handleSignup =(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signupHanlde(email,password)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.log(error);
        })


    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
        <form onSubmit={handleSignup} className="card-body">
        <h1 className="text-3xl font-bold text-center">Sign up now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign up</button>
          </div>

          <h1>Already Have an Account ? Place <Link to="/login"><span className='text-blue-700'>Login in</span></Link> </h1>
        </form>
      </div>
    );
};

export default Signup;