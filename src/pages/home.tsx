import { useState } from "react";

function Home() {

    const [scoreTeam1, setScoreteam1] = useState<number>(0);
    const [scoreTeam2, setScoreteam2] = useState<number>(0);
    const [teamName1, setTeamName1] = useState<string>("Equipo 1");
    const [teamName2, setTeamName2] = useState<string>("Equipo 2");

    return (
        <div className="w-full flex items-center flex-col h-screen justify-around">
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
            <div className="flex justify-around w-full">
                <div className="h-20 w-20 border-4 border-black flex items-center justify-center">
                    <p className="text-4xl font-bold">{scoreTeam1}</p>
                </div>
                <div className="h-20 w-20 border-4 border-black flex items-center justify-center">
                    <p className="text-4xl font-bold"> {scoreTeam2}</p>
                </div>
            </div>
            <div className="flex justify-around w-full">
                <button className="h-20 w-20 rounded-full p-0 m-0 bg-cover bg-hero-pattern hover:border-2 border-red-600"
                    onClick={() => {
                        setScoreteam1(scoreTeam1 + 1);
                    }} />
                <button className="h-20 w-20 rounded-full p-0 m-0 bg-cover bg-hero-pattern hover:border-2 border-red-600"
                    onClick={() => {
                        setScoreteam2(scoreTeam2 + 1);
                    }} />

            </div>
            <button className="rounded border border-black p-2 text-lg">Deshacer</button>
            <button className="rounded border border-black p-2 text-lg" onClick={() => {
                setScoreteam1(0);
                setScoreteam2(0);
            }}>Reiniciar</button>

        </div>
    )
}

export default Home;