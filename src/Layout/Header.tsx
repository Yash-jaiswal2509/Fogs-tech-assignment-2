
const Header = () => {
    return (
        <div className="border-b-[1px] border-cyan-400 shadow-md shadow-cyan-400/50 flex items-center justify-between px-4">
            <div className="flex items-center p-4 gap-2">
                <img src="/Gaming website logo.jpeg" alt="Website Logo" className="h-16 aspect-square rounded-full shadow-sm shadow-cyan-400" />
                <h1 className="text-cyan-400 text-3xl font-mono font-semibold">GridWave</h1>
            </div>
            <div>
                <ul className="flex items-center text-cyan-400 gap-6 text-lg font-mono">
                    <li className="cursor-pointer  hover:text-cyan-700">Home</li>
                    <li className="cursor-pointer  hover:text-cyan-700">Products</li>
                    <li className="cursor-pointer  hover:text-cyan-700">About</li>
                    <li className="cursor-pointer  hover:text-cyan-700">Contact</li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <img className="h-8 cursor-pointer" src="/assets/notification.svg" alt="Notification" />
                <img className="h-8 cursor-pointer" src="/assets/user.svg" alt="User" />
            </div>
        </div>
    )
}

export default Header