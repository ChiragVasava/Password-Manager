const Navbar = () => {
    return (
        <nav className="bg-slate-800 text-white">
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold gap-1.5 text-2xl">
                    <span className="text-green-500">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-500">OP/&gt;</span>
                </div>

                <ul className="flex items-center">
                    <li className="mr-4"><a href="/" className="hover:text-green-500 transition-colors hover:font-bold inline-block px-1">Home</a></li>
                    <li className="mr-4"><a href="/about" className="hover:text-green-500 transition-colors hover:font-bold inline-block px-1">About</a></li>
                    <li className="mr-4"><a href="/profile" className="hover:text-green-500 transition-colors hover:font-bold inline-block px-1">Profile</a></li>
                    <li className="mr-4"><a href="/settings" className="hover:text-green-500 transition-colors hover:font-bold inline-block px-1">Settings</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
