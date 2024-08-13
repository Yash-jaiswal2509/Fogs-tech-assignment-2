import { useEffect, useState } from "react";
import { pattern } from "../utils/pattern";
import { useGameContext } from "../ContextProvider";

type GridCell = {
    color: string;
};

const GridLayout = () => {
    const { word, time } = useGameContext();
    // console.log(word, time);

    const createGrid = () => {
        return Array(15).fill(null).map(() => (
            Array(20).fill(null).map(() => ({ color: "black" }))
        ));
    };

    const [grid, setGrid] = useState<GridCell[][]>(createGrid());
    const [position, setPosition] = useState<number>(grid[0].length);
    const [cellColor, setCellColor] = useState<string>("red");

    const newPattern = () => {
        const newGrid = createGrid();
        let currentCol = position;

        for (let w = 0; w < word.length; w++) {
            const patternToUse = pattern[word[w] as keyof typeof pattern];
            const patternHeight = patternToUse.length;
            const patternWidth = patternToUse[0].length;

            for (let i = 0; i < patternHeight; i++) {
                for (let j = 0; j < patternWidth; j++) {
                    const colIndex = currentCol + j;


                    if (colIndex >= 0 && colIndex < newGrid[i].length && patternToUse[i][j] === 1) {
                        newGrid[i][colIndex].color = `${cellColor}`;
                    }
                }
            }
            currentCol += patternWidth + 2;
        }
        setGrid(newGrid);
    };

    const getRandomColor = (): string => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        if (time == 0) {
            return;
        }
        const interval = setInterval(() => {
            setPosition((prev) => (prev > -word.length * 10 ? prev - 1 : grid[0].length));
        }, (20 - time) * 100);

        return () => clearInterval(interval);
    }, [time]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCellColor(getRandomColor());
        }, 2000)

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        newPattern();
    }, [position]);

    return (
        <div className="bg-black flex mt-10">
            <div className="grid-container text-cyan-200 mx-4 shadow-md shadow-cyan-500/50">
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="border border-cyan-400 w-full h-full"
                            style={{ backgroundColor: cell.color }}
                        >
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default GridLayout;
