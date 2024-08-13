import GameInput from "../components/GameInput"
import GridLayout from "../components/GridLayout"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <Header />
            <div className="flex gap-5 items-center">
                <GridLayout  />
                <GameInput />
            </div>
        </>
    )
}

export default Layout