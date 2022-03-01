export default function ({character, classData}) {
    console.log(classData)
    if (character.class === "" || classData.name === ''){
        return <p>Select your Character!</p>
    }
    return (
    <section className="character">
        <h2>{`You are a ${character.race} ${character.class}`}</h2>
        <div className={character.race}>
            <div className="character-text-container">
                <p>{`Prepare your ${character.class === "Fighter" ? "fists" : classData.starting_equipment[0].equipment.index}, ${character.class} and get ready to battle monsters in order to save all ${character.race}-kind!`}</p>
            </div>
        </div>
    </section>
    )
}