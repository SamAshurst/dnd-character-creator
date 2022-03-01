import {useState, useEffect} from "react"
import {fetchApi, fetchRaceData, fetchClassApi, fetchClassData }from "../fetchApi"
import RaceDetails from "./RaceDetails"
import ClassDetails from "./ClassDetails"
import ChosenCharacter from "./ChosenCharacter"


function CharacterSelector () {
    const [character, setCharacter] = useState(
        {
            race : '',
            class : ''
        }
    )
    // const [category, setCategory] = useState("race")
    const [raceButtons, setRaceButtons] = useState([])
    const [raceData, setRaceData] = useState([])
    const [race, setRace] = useState([]) 
    const [dndClass, setDndClass] = useState([])
    const [classData, setClassData] = useState([])
    const [classButtons, setClassButtons] = useState([])
   
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



    return <section>
        <div>
             {raceButtons.map((race, index)=>{
            return <button type="button" key={index} onClick={(e)=>{setRace(e.target.outerText)}}>{race.name}</button>
        })}

        <RaceDetails raceData={raceData}/>

        <button 
        className={race.length===0 ? "btn" : "btn show"}
        onClick={() => {
            setCharacter({
            race : race,
            class : ''
        })
    }}
        >Choose Race</button>
        </div>
       <div>
            {classButtons.map((classes)=>{
            return <button type="button" key={classes.name} onClick={(e)=>{setDndClass(e.target.outerText)}}>{classes.name}</button>
        })}

        <ClassDetails classData={classData}/>

        <button 
        className={dndClass.length===0 ? "btn" : "btn show"}
        onClick={() => {
            setCharacter({
            race : race,
            class : dndClass
        })
    }}
        >Choose Class</button>
       </div>
    <ChosenCharacter character={character} classData={classData}/>
    </section>

}
    


export default CharacterSelector

    // <h2> Select your {category}
    // Buttons to pick a race - updates SetRace to display infor on selected race
    // Race Info from API - Name, speed, alignment, starting_proficiencies, languages, traits 
    // Class Info - Name, hit_die, proficiency_choices, proficiencies, saving_throws
    // results page shows choices made
