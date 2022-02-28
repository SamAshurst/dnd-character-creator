import {useState, useEffect} from "react"
import {fetchApi, fetchRaceData }from "../fecthApi"

function CharacterSelector () {
    //const [character, setCharacter] = useState([])
    const [category, setCategory] = useState("race")
    const [raceButtons, setRaceButtons] = useState([])
    const [race, setRace] = useState([]) 
    // const [dndClass, setDndClass] = useState()
    
   
    useEffect(()=>{
        fetchApi().then((raceData)=>{
             setRaceButtons(raceData)
        })
    },[])

    useEffect(()=>{
        fetchRaceData(race).then((raceData)=>{
            console.log(raceData)
        })
    },[race])

    return <section>
        {raceButtons.map((race, index)=>{
            return <button type="button" key={index} onClick={(e)=>{setRace(e.target.outerText)}}>{race.name}</button>
        })}


    </section>

}
    


export default CharacterSelector

    // <h2> Select your {category}
    // Buttons to pick a race - updates SetRace to display infor on selected race
    // Race Info from API - Name, speed, alignment, starting_proficiencies, languages, traits 
    // Class Info - Name, hit_die, proficiency_choices, proficiencies, saving_throws
    // results page shows choices made
