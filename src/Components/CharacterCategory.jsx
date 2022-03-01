import ChosenCharacter from "./ChosenCharacter"

export default function CharacterCategory({character, classData, setCategory, setCharacter, setRace, setDndClass, setStrength, setWisdom, setCharisma, setConstitution, setIntelligence, setDexterity, setRemaining}){
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