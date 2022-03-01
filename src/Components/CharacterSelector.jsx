import {useState, useEffect} from "react"
import {fetchApi, fetchRaceData, fetchClassApi, fetchClassData }from "../fetchApi"
import RaceDetails from "./RaceDetails"
import ClassDetails from "./ClassDetails"
import ChosenCharacter from "./ChosenCharacter"


function CharacterSelector () {
    const [character, setCharacter] = useState(
        {
            race : '',
            stats: {},
            class : ''
        }
    )
    const [category, setCategory] = useState("")
    const [raceButtons, setRaceButtons] = useState([])
    const [raceData, setRaceData] = useState([])
    const [race, setRace] = useState([]) 
    const [dndClass, setDndClass] = useState([])
    const [classData, setClassData] = useState([])
    const [classButtons, setClassButtons] = useState([])
    const [stats, setStats] = useState({})



    useEffect(()=>{
        fetchApi().then((raceData)=>{
             setRaceButtons(raceData)
        })
    },[])

    useEffect(()=>{
        fetchRaceData(race).then((data)=>{
            setRaceData(data)
        })
    },[race])

     useEffect(()=>{
        fetchClassApi().then((classData)=>{
             setClassButtons(classData)
        })
    },[])

    useEffect(()=>{
        fetchClassData(dndClass).then((data)=>{
            setClassData(data)
        })
    },[dndClass])


    if(category === 'race') {
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
                    stats: {},
                    class : ''
                })
                setCategory("stats")
            }}
                >Choose Race</button>
            </div>
        )
    }

    if(category === 'stats') {
        return (
            <div>
                <h2>This will be the stats section</h2>
                <button
                onClick={() => {
                    setCategory('race')
                }}
                >Back</button>
                <button 
                className="btn show"
                onClick={() => {
                    setCharacter({
                    race : race,
                    stats: stats,
                    class : ""
                })
                setCategory("class")
            }}
                >Confirm Stats</button>
            </div>
        )
    }

    if(category === 'class') {
        return (
            <div>
                {classButtons.map((classes)=>{
                return <button type="button" key={classes.name} onClick={(e)=>{setDndClass(e.target.outerText)}}>{classes.name}</button>
            })}

            <ClassDetails classData={classData}/>
            <button
                onClick={() => {
                    setCategory('stats')
                }}
                >Back</button>
            <button 
            className={dndClass.length===0 ? "btn" : "btn show"}
            onClick={() => {
                setCharacter({
                race : race,
                stats: stats,
                class : dndClass
            })
            setCategory("character")
        }}
            >Choose Class</button>
        </div>
        )
    }

    if(category === 'character') {
        return (
            <section>
                <ChosenCharacter character={character} classData={classData}/>
                <button
                onClick={() => {
                    setCategory('class')
                }}
                >Back</button>
                <button
                onClick={() => {
                    setCategory('')
                    setCharacter(
                         {
                            race : '',
                            stats: {},
                            class : ''
                        }
                    )
                    setRace([])
                    setStats({})
                    setDndClass([])
                }}
                >Reset</button>
            </section>
        )
    }

    return (
        <div>
            <h1>Ready to begin choosing your character?</h1>
            <button
            onClick={() => {
                setCategory("race")
            }}
            >Click here</button>
        </div>
    )
}
    


export default CharacterSelector

    // <h2> Select your {category}
    // Buttons to pick a race - updates SetRace to display infor on selected race
    // Race Info from API - Name, speed, alignment, starting_proficiencies, languages, traits 
    // Class Info - Name, hit_die, proficiency_choices, proficiencies, saving_throws
    // results page shows choices made
