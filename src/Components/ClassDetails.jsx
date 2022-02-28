export default function ClassDetails({classData}) {
   const profs = classData.proficiency_choices[0].from


//    breaks code when there is no classData

   if(!classData.name) return <p>Make your Class selection!</p>
    return (
        <div>
            <h4>Here are the class details for {classData.name}</h4>

            <div>
                <p>Hit Die: {classData.hit_die}</p>
                {profs.map(prof => {
                    return (
                        <p key={prof.name}> {prof.name}</p>
                    )
                })}
            </div>
        </div>
    )
}