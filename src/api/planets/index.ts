import {PlanetsResponse, PlanetResponse} from "@/type/planets";

class PlanetsApi {
    getPlanets(): Promise<PlanetsResponse> {
        return fetch('https://www.swapi.tech/api/planets/')
            .then((res) => res.json());
    }

    getPlanet(id: number): Promise<PlanetResponse> {
        return fetch(`https://www.swapi.tech/api/planets/${id}/`)
            .then((res) => res.json());
    }
}

export const planetsApi = new PlanetsApi();