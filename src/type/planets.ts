export interface Planet {
    uid: string;
    name: string;
    url: string;
}

export interface PlanetsResponse {
    message: string;
    total_records: number;
    total_pages: number;
    previous: any;
    next: string;
    results: Planet[];
}

export interface PlanetResponse {
    message: string;
    result: Result;
}

export interface Properties {
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    created: string;
    edited: string;
    name: string;
    url: string;
}

export interface Result {
    properties: Properties;
    description: string;
    _id: string;
    uid: string;
    __v: number;
}