export default function ClassDetails({classData}) {

    if(!classData.name) return <p>Make your Class selection!</p>

    else {
        const profs = classData.proficiency_choices[0].from

        return (
            <div>
                <h4>Here are the class details for {classData.name}</h4>

                <div className="details class">
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
}