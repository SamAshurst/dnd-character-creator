export default function StatsCategory({race, stats, setStats, setCharacter, setCategory, remainingPoints, setRemaining, setStrength, setCharisma, setConstitution, setDexterity, setIntelligence, setWisdom, strengthStat, charismaStat, constitutionStat, dexterityStat, wisdomStat, intelligenceStat}) {
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