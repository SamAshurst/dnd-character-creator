import RaceDetails from "./RaceDetails"

export default function RaceCategory({raceButtons, setRace, raceData, setCategory, race, setCharacter}) {
    return (
                <div>
                    {raceButtons.map((race, index)=>{
                    return <button type="button" key={index} onClick={(e)=>{setRace(e.target.outerText)}}>{race.name}</button>
                })}

                <RaceDetails raceData={raceData}/>

                <button
                onClick={() => {
                    setCategory('')
                }}
                >Back</button>
                <button 
                className={race.length===0 ? "btn" : "btn show"}
                onClick={() => {
                    setCharacter({
                    race : race,
                    CharacterStats: {},
                    class : ''
                })
                setCategory("stats")
            }}
                >Choose Race</button>
            </div>
        )
}