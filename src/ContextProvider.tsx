import { createContext, useContext, useState } from "react";

type ContextType = {
    time: number;
    setTime: (time: number) => void;
    word: string;
    setWord: (word: string) => void;
}

const initialState = {
    time: 0,
    setTime: () => { },
    word: "Hello",
    setWord: () => { },
}

const gameContext = createContext<ContextType>(initialState);

export const useGameContext = () => {
    const context = useContext(gameContext);
    if (!context) {
        throw new Error("useGameContext must be used within a GameProvider");
    }
    return context;
}

type GameContextProviderProps = {
    children: React.ReactNode;
}

const GameContextProvider = ({ children }: GameContextProviderProps) => {
    const [time, setTime] = useState<number>(0);
    const [word, setWord] = useState<string>("Hello");

    const contextValue = {
        time,
        setTime: (time: number) => setTime(time),
        word,
        setWord: (word: string) => setWord(word),
    }

    return (
        <gameContext.Provider value={contextValue}>
            {children}
        </gameContext.Provider>
    )
}

export default GameContextProvider;