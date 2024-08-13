import { useState } from "react";
import { useGameContext } from "../ContextProvider";

const GameInput = () => {
    const [inputWord, setInputWord] = useState<string>("Hello");
    const [inputTime, setInputTime] = useState<number>(1);
    const { word, time, setTime, setWord } = useGameContext();

    const handleWordChange = () => {
        if (inputWord.trim() === "") return;
        setWord(inputWord);
        setInputWord("");
    };

    const handleTimeChange = () => {
        if (inputTime < 0) return;
        setTime(inputTime);
        setInputTime(1);
    };

    return (
        <div className="w-full h-full flex flex-col gap-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-xl text-cyan-400">Input Word</h1>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="p-[6px] bg-black border border-cyan-400 rounded-md"
                        value={inputWord}
                        onChange={(e) => setInputWord(e.target.value)}
                    />
                    <button
                        className="border p-1 px-2 border-cyan-400 rounded-md"
                        onClick={handleWordChange}
                    >
                        Submit
                    </button>
                </div>
                <h1 className="text-cyan-600">Current Word: {word}</h1>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="text-xl text-cyan-400">Increase speed</h1>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="p-[6px] bg-black border border-cyan-400 rounded-md"
                        onChange={(e) => setInputTime(Number(e.target.value))}
                    />
                    <button
                        className="border p-1 px-2 border-cyan-400 rounded-md"
                        onClick={handleTimeChange}
                    >
                        Submit
                    </button>
                </div>
                <h1 className="text-cyan-600">Current Speed: {time}</h1>
            </div>
        </div>
    );
};

export default GameInput;
