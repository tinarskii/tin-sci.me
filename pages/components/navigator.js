export default function Navigator() {
  return (
    <div className={"flex flex-col md:flex-row md:gap-0 gap-2"}>
    <button onClick={() => location.href = "/me"} className={"px-4 py-2 md:m-2 flex-grow-0 w-full bg-blue-500 text-white font-bold hover:bg-blue-700 transform transition duration-200 active:scale-90 rounded-md"}>
      About Me
    </button>
    <button onClick={() => location.href = "https://github.com/tinvv?tab=repositories"} className={"px-4 py-2 md:m-2 flex-grow-0 w-full bg-blue-400 text-white font-bold hover:bg-blue-600 transform transition duration-200 active:scale-90 rounded-md"}>
      All Projects
    </button>
    <button onClick={() => location.href = "https://tinnaphat.medium.com"} className={"px-4 py-2 md:m-2 flex-grow-0 w-full bg-blue-300 text-white font-bold hover:bg-blue-500 transform transition duration-200 active:scale-90 rounded-md"}>
      Blog
    </button>
    <button onClick={() => location.href = "/contact"} className={"px-4 py-2 md:m-2 flex-grow-0 w-full bg-blue-200 text-white font-bold hover:bg-blue-400 transform transition duration-200 active:scale-90 rounded-md"}>
      Contact
    </button>
    </div>
  )
}
