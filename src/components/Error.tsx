import { Link } from "react-router-dom"

export const Error = () => {
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
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-indigo-500 rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
            </label>
        </div>
      </ul>
    </nav>
    <div className='bg-black h-screen'>
        <div className="p-5">
            <Link to="/" className="text-white"><span ><i className="fa-solid fa-arrow-left"></i></span> Back to Home</Link>
        </div>
        <div className='p-10 '>
            <h1 className='font-sans text-white font-medium text-2xl '>Get Started With User Directory...</h1>
            <h4 className='mt-2 font-sans text-slate-400'>Select the user and see the thad user information,Its just a sample for user directory of then.</h4>
            <h2 className='mt-3 font-sans text-indigo-500 text-2xl font-medium'>Users List</h2>
        </div>
        <div className='pl-10 pb-10'>
            <ul className='flex flex-wrap'>
                <h1 className="text-red-500">404 Error User Not Found</h1>
            </ul>
        </div>
    </div>
    </>
  )
}
