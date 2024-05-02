"use client"

import {planetsApi} from "@/api/planets";
import {useEffect, useState} from "react";
import {Planet} from "@/type/planets";
import Link from "next/link";

export default function Planets() {
    const [planets, setPlanets] = useState<Planet[]>([]);

    const getPlanets = async () => {
        const response = await planetsApi.getPlanets();
        setPlanets(response.results);
    }

    useEffect(() => {
        getPlanets();
    }, [])

    return (
        <main>
            {planets.length > 0 && (
                planets.map((planet, index) => (
                    <span key={index}>
                        <Link href={`/planets/${planet.uid}/`}>
                            {planet.name}
                        </Link><br/>
                    </span>
                ))
            )}
        </main>
    );
}