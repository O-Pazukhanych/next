import {useRouter} from "next/router";

export default function Planet () {
    const router = useRouter();

    console.log(router)
    return (
        <h1>Planet</h1>
    )
}