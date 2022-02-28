export default function ({raceData}) {

    if(!raceData.name) return <p>Make your selection!</p>
    return (
        <div>
            <h4>Here are the race details for {raceData.name}</h4>

            <div>
                <p>{raceData.age}</p>
                <p>{raceData.alignment}</p>
                <p>{raceData.language_desc}</p>
                <p>{raceData.size} <br></br> {raceData.size_description}</p>
                <p>Speed: {raceData.speed}</p>
            </div>
        </div>
    )
}

