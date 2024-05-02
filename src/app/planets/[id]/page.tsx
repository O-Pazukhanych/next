import {planetsApi} from "@/api/planets";

async function getData(id: string) {
    const response = await planetsApi.getPlanet(parseInt(id));
    return response.result.properties;
}

export default async function Planet ({params}) {
    const planetProperties = await getData(params.id);

    return (
        <div>
            <h1
                style={{
                    backgroundColor: '#1c1e21',
                    color: 'white',
                    margin: 0,
                    padding: 16,
                }}
            >
                {planetProperties?.name}
            </h1>
            <div>
                {(planetProperties && Object.keys(planetProperties).length > 0) &&
                    Object.keys(planetProperties).map((key, index) => (
                        <p
                            key={index}
                            style={{
                                textTransform: 'capitalize',
                                fontSize: 22,
                            }}
                        >
                            <b>{key.replace(/_/g, ' ')}</b>: {planetProperties[key]}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}