import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Userdeatails = () => {
  const { userid } = useParams();
  const [user, setUser] = useState<any>(null);


  useEffect(() => {
    let userurl = "https://jsonplaceholder.typicode.com/users/" + userid;
    fetch(userurl)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [userid]);

  function Specficuser(){
    if (!user) {
    return (
      <div className="bg-black h-screen text-white flex justify-center pt-24">
        Loading...
      </div>
    );
  }
    return(
      <>
      <div className="flex justify-center">
        <div className="group block w-1/4 border-2 border-indigo-500 rounded-lg p-6 bg-slate-800 ring-1 ring-slate-900/5 shadow-lg shadow-indigo-500/50 space-y-3 hover:bg-indigo-500 hover:ring-blue-700">
          <div className="flex">
            <i className="fa-solid fa-user text-white group-hover:text-black"></i>
            <h3 className="text-indigo-400 group-hover:text-yellow-500 text-sm font-semibold ml-2">
              {user.name}
            </h3>
          </div>
          <div className="flex">
            <i className="fa-solid fa-envelope text-white group-hover:text-black pt-1"></i>
            <p className="text-slate-300 group-hover:text-white text-sm ml-2">
              {user.email}
            </p>
          </div>
          <div className="flex">
            <i className="fa-solid fa-phone text-white group-hover:text-black pt-1"></i>
            <p className="text-slate-300 group-hover:text-white text-sm ml-2">
              {user.phone}
            </p>
          </div>
          <div className="flex">
            <i className="fa-solid fa-earth-asia text-white group-hover:text-black pt-1"></i>
            <p className="text-slate-300 group-hover:text-white text-sm ml-2">
              {user.website}
            </p>
          </div>
          <div className="flex">
            <i className="fa-solid fa-location-dot text-white group-hover:text-black pt-1"></i>
            <p className="text-slate-300 group-hover:text-white text-sm ml-2">
              {user.address?.street}, {user.address?.city}
            </p>
          </div>
          <div className="flex">
            <i className="fa-solid fa-briefcase text-white group-hover:text-black pt-1"></i>
            <p className="text-slate-300 group-hover:text-white text-sm ml-2">
              {user.company?.name}
            </p>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <nav className="bg-indigo-500 p-4 drop-shadow-lg">
        <ul className="flex">
          <h1 className="text-black font-bold font-mono text-xl">
            User Information
          </h1>
        </ul>
      </nav>
      <div className="bg-black h-full">
        <div className="p-5">
          <Link to="/" className="text-white">
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
        </div>
      </div>
      <div className="bg-black h-screen ">
        <Specficuser />
      </div>
    </>
  );
};

export default Userdeatails;
