const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
      bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign in
          <span className="text-blue-500"> MERN Chat App</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username:</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password:</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block transition duration-300"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
