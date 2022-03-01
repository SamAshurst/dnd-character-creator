import {useState, useEffect} from "react"
import {fetchApi, fetchRaceData, fetchClassApi, fetchClassData }from "../fetchApi"
import RaceDetails from "./RaceDetails"
import ClassDetails from "./ClassDetails"
import ChosenCharacter from "./ChosenCharacter"


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

    if(category === 'stats') {

        return (
            <div>
                <h2>Remaining Points:</h2>
                <p>{remainingPoints}</p>
                <div className="stats-container">
                    <div className="stats-row">
                        <p>Strength</p>
                        <button onClick={()=>{
                            if(strengthStat > 0){
                                setStrength(strengthStat-1)
                                setRemaining(remainingPoints+1)
                            }
                        }}>-</button>
                        {strengthStat}
                        <button onClick={()=>{
                            if(remainingPoints > 0){
                                setStrength(strengthStat+1)
                                setRemaining(remainingPoints-1)
                            }
                        }}>+</button>
                    </div>
                    <div className="stats-row">
                        <p>Dexterity</p>
                        <button onClick={()=>{
                            if(dexterityStat > 0){
                                setDexterity(dexterityStat-1)
                                setRemaining(remainingPoints+1)
                            }
                        }}>-</button>
                        {dexterityStat}
                        <button onClick={()=>{
                            if(remainingPoints > 0){
                                setDexterity(dexterityStat+1)
                                setRemaining(remainingPoints-1)
                            }
                        }}>+</button>
                    </div>
                    <div className="stats-row">
                        <p>Constitution</p>
                        <button onClick={()=>{
                            if(constitutionStat > 0){
                                setConstitution(constitutionStat-1)
                                setRemaining(remainingPoints+1)
                            }
                        }}>-</button>
                        {constitutionStat}
                        <button onClick={()=>{
                            if(remainingPoints > 0){
                                setConstitution(constitutionStat+1)
                                setRemaining(remainingPoints-1)
                            }
                        }}>+</button>
                    </div>
                    <div className="stats-row">
                        <p>Wisdom</p>
                        <button onClick={()=>{
                            if(wisdomStat > 0){
                                setWisdom(wisdomStat-1)
                                setRemaining(remainingPoints+1)
                            }
                        }}>-</button>
                        {wisdomStat}
                        <button onClick={()=>{
                            if(remainingPoints > 0){
                                setWisdom(wisdomStat+1)
                                setRemaining(remainingPoints-1)
                            }
                        }}>+</button>
                    </div>
                    <div className="stats-row">
                        <p>Intelligence</p>
                        <button onClick={()=>{
                            if(intelligenceStat > 0){
                                setIntelligence(intelligenceStat-1)
                                setRemaining(remainingPoints+1)
                            }
                        }}>-</button>
                        {intelligenceStat}
                        <button onClick={()=>{
                            if(remainingPoints > 0){
                                setIntelligence(intelligenceStat+1)
                                setRemaining(remainingPoints-1)
                            }
                        }}>+</button>
                    </div>
                    <div className="stats-row">
                        <p>Charisma</p>
                        <button onClick={()=>{
                            if(charismaStat > 0){
                                setCharisma(charismaStat-1)
                                setRemaining(remainingPoints+1)
                            }
                        }}>-</button>
                        {charismaStat}
                        <button onClick={()=>{
                            if(remainingPoints > 0){
                                setCharisma(charismaStat+1)
                                setRemaining(remainingPoints-1)
                            }
                        }}>+</button>
                    </div>
                </div>
                <button
                onClick={() => {
                    setCategory('race')
                }}
                >Back</button>
                <button 
                className="btn show"
                onClick={() => {
                    if(remainingPoints===0){
                        setStats({
                            Strength: strengthStat,
                            Dexterity: dexterityStat,
                            Constitution: constitutionStat,
                            Wisdom: wisdomStat,
                            Intelligence: intelligenceStat,
                            Charisma: charismaStat
                        })
                        setCharacter({
                            race : race,
                            CharacterStats: stats,
                            class : ""
                        })
                        setCategory("class")
                    }
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
                CharacterStats: stats,
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
                            CharacterStats: {},
                            class : ''
                        }
                    )
                    setRace([])
                    setDndClass([])
                    setStrength(5)
                    setWisdom(5)
                    setCharisma(5)
                    setIntelligence(5)
                    setConstitution(5)
                    setDexterity(5)
                    setRemaining(5)
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

