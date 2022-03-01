import ClassDetails from "./ClassDetails"

export default function ClassCategory({race, stats, dndClass, setCategory, classButtons, setDndClass, classData, setCharacter}) {
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