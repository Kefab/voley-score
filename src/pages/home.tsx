import { useState } from "react";
import Stack from './../backend/stack';

class Scoreboard {
    scoreTeam1: number;
    scoreTeam2: number;
    serve: boolean | null;

    constructor(scoreTeam1: number, scoreTeam2: number, serve: boolean | null) {
        this.scoreTeam1 = scoreTeam1;
        this.scoreTeam2 = scoreTeam2;
        this.serve = serve;
    }
}

var stack = new Stack<Scoreboard>();
stack.push(new Scoreboard(0, 0, null));

function Home() {

    const [scoreTeam1, setScoreteam1] = useState<number | undefined>(0);
    const [scoreTeam2, setScoreteam2] = useState<number | undefined>(0);
    const [serve, setServe] = useState<boolean | null | undefined>(null);
    const [teamName1, setTeamName1] = useState<string>("Equipo 1");
    const [teamName2, setTeamName2] = useState<string>("Equipo 2");    

    const point = (team: number) => {
        const newScore = new Scoreboard(scoreTeam1!, scoreTeam2!, serve!);
        if (serve == null && team == 1) {
            setServe(true)
            newScore.serve = true;
        } else if (serve == null && team == 2) {
            setServe(false)
            newScore.serve = false;
        } else if (serve && team == 1) {
            setScoreteam1(scoreTeam1! + 1)
            newScore.scoreTeam1 = scoreTeam1! + 1
        } else if (!serve && team == 2) {
            newScore.scoreTeam2 = scoreTeam2! + 1
            setScoreteam2(scoreTeam2! + 1)
        } else {
            setServe(!serve)
            newScore.serve = !serve;
        }
        stack.push(newScore);
    }

    const restart = () => {
        setScoreteam1(0);
        setScoreteam2(0);
        setServe(null)
        stack.clear();
        stack.push(new Scoreboard(0, 0, null));
    }

    const revert = () => {
        if (stack.size() != 1) {
            stack.pop();
            const prevScore: Scoreboard | undefined = stack.peek();
            setScoreteam1(prevScore?.scoreTeam1);
            setScoreteam2(prevScore?.scoreTeam2);
            setServe(prevScore?.serve)
        }
    }

    return (
        <div className="w-full flex items-center flex-col h-screen justify-around flex-wrap">
            <div className="flex justify-around w-full">

                <div className="h-10 p-2 border-4 border-black flex items-center justify-center" onClick={() => {
                    setTeamName1(prompt("Ingrese el nombre del primer equipo")!)
                }}>
                    <p>{teamName1}</p>
                </div>
                <div className="h-10 p-2 border-4 border-black flex items-center justify-center" onClick={() => {
                    setTeamName2(prompt("Ingrese el nombre del segundo equipo")!)
                }}>
                    <p>{teamName2}</p>
                </div>
            </div>
            {(serve != null && serve) && <div className="flex justify-around w-full">

                <div className="h-20 w-20 bg-service bg-cover">
                </div>
                <div className="h-20 w-20  bg-cover">
                </div>

            </div>
            }
            {(serve != null && !serve) && <div className="flex justify-around w-full">

                <div className="h-20 w-20 bg-cover">
                </div>
                <div className="h-20 w-20 bg-service bg-cover">
                </div>

            </div>
            }
            <div className="flex justify-around w-full">
                <div className="h-20 w-20 border-4 border-black flex items-center justify-center">
                    <p className="text-4xl font-bold">{scoreTeam1}</p>
                </div>
                <div className="h-20 w-20 border-4 border-black flex items-center justify-center">
                    <p className="text-4xl font-bold"> {scoreTeam2}</p>
                </div>
            </div>
            <div className="flex justify-around w-full">
                <button className="h-20 w-20 rounded-full p-0 m-0 bg-cover bg-ball hover:border-2 border-red-600"
                    onClick={() => {
                        point(1);
                    }} />
                <button className="h-20 w-20 rounded-full p-0 m-0 bg-cover bg-ball hover:border-2 border-red-600"
                    onClick={() => {
                        point(2);
                    }} />

            </div>
            <button className="rounded border border-black p-2 text-lg" onClick={revert}>Deshacer</button>
            <button className="rounded border border-black p-2 text-lg" onClick={restart}>Reiniciar</button>

        </div>
    )
}

export default Home;