
import { Toaster } from "sonner"
import GameInput from "../components/GameInput"
import GridLayout from "../components/GridLayout"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <Header />
            <Toaster theme="dark" richColors />
            <div className="flex gap-10 lg:gap-0 items-center lg:flex-row flex-col">
                <GridLayout />
                <GameInput />
            </div>
        </>
    )
}

export default Layout