import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
const [users, setUsers] = useState <any>([]);
const [input,setInput] = useState("");
const [output,setOutput] = useState <any>([]);
const [error,setError] = useState(null);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw Error("Check Your Fetch data");
        
      }
      return res.json(); 
    })
    .then((data) => setUsers(data))
    .catch((err) => setError(err.message));
}, []);


  useEffect(() => {
    if (input === "") {
        setOutput(users); 
    } 
    else {
        const userfilter = users.filter((val: any) =>
        val.name.toLowerCase().includes(input.toLowerCase())
        );
        setOutput(userfilter);
    }
    }, [input, users]);


    function Userlists(){

        if (users.length === 0 && error === null) { 
            return (
            <div className="bg-black h-screen text-white flex justify-center pt-10">
                <p>Loading...</p>
            </div>
            );
        }
        if (error !== null) { 
            return (
            <div className="bg-black h-screen text-white flex justify-center pt-10">
                <p className="text-red-500">{error}</p>
            </div>
            );
        }
        return(
            <>
            <div className="flex flex-wrap">
            {output.map((user: any) => (
            <Link to={`/Userdeatails/${user.id}`}>
              <li key={user.id} className="mt-10 ml-10">
                <div className="group block max-w-xs border-2 border-indigo-500 ml-8 mx-auto rounded-lg p-6 bg-slate-800 ring-1 ring-slate-900/5 shadow-lg shadow-indigo-500/50 space-y-3 hover:bg-indigo-500 hover:ring-blue-700">
                  <div className="flex">
                    <i className="fa-solid fa-user text-white group-hover:text-black"></i>
                    <h3 className="text-indigo-400 group-hover:text-yellow-500 text-sm font-semibold ml-2">
                      {user.name}
                    </h3>
                  </div>
                  <p className="text-slate-400 group-hover:text-white text-sm">
                    Click the user, then see their details.
                  </p>
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
                </div>
              </li>
              </Link>
            ))}
              </div>
        </>
        )
    }

  return (
    <>
    <nav className='bg-indigo-500 p-4 drop-shadow-lg'>
      <ul className='flex'>
        <h1 className='text-black font-bold font-mono text-xl'>User Directory</h1>
        <div className='ml-auto'>
            <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input onChange={e => setInput(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-indigo-500 rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
            </label>
        </div>
      </ul>
    </nav>
    <div className='bg-black h-full'>
        <div className='p-10 '>
            <h1 className='font-sans text-white font-medium text-2xl '>Get Started With User Directory...</h1>
            <h4 className='mt-2 font-sans text-slate-400'>Select the user and see the thad user information,Its just a sample for user directory of then.</h4>
            <h2 className='mt-3 font-sans text-indigo-500 text-2xl font-medium'>Users List</h2>
        </div>
        <div className='pl-10 pb-10'>
            <ul className='h-screen'>
                <Userlists />
            </ul>
        </div>
    </div>
    </>
  )
}

export default Home