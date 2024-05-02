class PlanetsApi {
    async getAllPlanets() {
        const response = await fetch('https://swapi.dev/api/planets/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return Promise.resolve(data);
    }
}

export const planetsApi = new PlanetsApi();