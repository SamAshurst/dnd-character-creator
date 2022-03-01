export default function ({character, classData}) {
    if (character.class === "" || classData.name === ''){
        return <p>Select your Character!</p>
    }
    return <section>
        <div className={character.race}>
            <div className="character-text-container">
                <h2>{`You are a ${character.race} ${character.class}`}</h2>
                <p>{`Prepare your ${classData.proficiencies[0].name} and ${classData.proficiencies[1].name}`}</p>

            </div>
        </div>
    </section>
}