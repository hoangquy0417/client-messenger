const Login = () => {
    // note edit back ground glassmorphism: https://tailwindcss-glassmorphism.vercel.app/
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30
">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
        <span className="text-green-900"> ChatApp</span></h1>
        <form>
            <div>
            <label className="label p-2">
                <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
            </div>
            <div>
            <label className="label">
                <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
            </div>
            <a className="link link-accent">{"Don't"} have an account?</a>
            <div>
            <button className="btn btn-block btn-active btn-neutral btn-sm mt-2">Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login;

// Starter Code
{/* <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30
">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
        <span className="text-green-900"> ChatApp</span></h1>
        <form>
            <div>
            <label className="label p-2">
                <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
            </div>
            <div>
            <label className="label">
                <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
            </div>
            <a className="link link-accent">{"Don't"} have an account?</a>
            <div>
            <button className="btn btn-block btn-active btn-neutral btn-sm mt-2">Login</button>
            </div>
        </form>
</div> */}