import {useState, useEffect} from "react"
import {fetchApi, fetchRaceData, fetchClassApi, fetchClassData }from "../fetchApi"
import RaceCategory from "./RaceCategory"
import StatsCategory from "./StatsCategory"
import ClassCategory from "./ClassCategory"
import CharacterCategory from "./CharacterCategory"

function CharacterSelector () {
    const [character, setCharacter] = useState(
        {
            race : '',
            CharacterStats: {},
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
    const [strengthStat, setStrength] = useState(5)
    const [dexterityStat, setDexterity] = useState(5)
    const [constitutionStat, setConstitution] = useState(5)
    const [wisdomStat, setWisdom] = useState(5)
    const [intelligenceStat, setIntelligence] = useState(5)
    const [charismaStat, setCharisma] = useState(5)
    const [remainingPoints, setRemaining] = useState(5)
    const [stats, setStats] = useState(
        {
            Strength: strengthStat,
            Dexterity: dexterityStat,
            Constitution: constitutionStat,
            Wisdom: wisdomStat,
            Intelligence: intelligenceStat,
            Charisma: charismaStat}
        )

    useEffect(()=>{
        fetchApi()
        .then((raceData)=>{
             setRaceButtons(raceData)
        }).then(()=>{
           return fetchClassApi()
            
        }).then((classData)=>{
            setClassButtons(classData)
       })
    },[])

    useEffect(()=>{
        fetchRaceData(race).then((data)=>{
            setRaceData(data)
        })
    },[race])

    useEffect(()=>{
        fetchClassData(dndClass).then((data)=>{
            setClassData(data)
        })
    },[dndClass])

    
    if(category === 'race') {
        return <RaceCategory raceButtons={raceButtons} setRace={setRace} setCharacter={setCharacter} raceData={raceData} race={race} setCategory={setCategory}/>
    }

    if(category === 'stats') {

        return <StatsCategory race={race} stats={stats} setStats={setStats} setCharacter={setCharacter} setCategory={setCategory} remainingPoints={remainingPoints} setRemaining={setRemaining} setStrength={setStrength} setCharisma={setCharisma} setConstitution={setConstitution} setDexterity={setDexterity} setIntelligence={setIntelligence} setWisdom={setWisdom} strengthStat={strengthStat} charismaStat={charismaStat} constitutionStat={constitutionStat} dexterityStat={dexterityStat} wisdomStat={wisdomStat} intelligenceStat={intelligenceStat}/>
        
    }

    if(category === 'class') {
        return <ClassCategory classButtons={classButtons} race={race} stats={stats} dndClass={dndClass} setCategory={setCategory} setDndClass={setDndClass} classData={classData} setCharacter={setCharacter}/>
    }

    if(category === 'character') {
        return <CharacterCategory character={character} classData={classData} setCategory={setCategory} setCharacter={setCharacter} setRace={setRace} setDndClass={setDndClass} setStrength={setStrength} setWisdom={setWisdom} setCharisma={setCharisma} setConstitution={setConstitution} setIntelligence={setIntelligence} setDexterity={setDexterity} setRemaining={setRemaining}/>
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

