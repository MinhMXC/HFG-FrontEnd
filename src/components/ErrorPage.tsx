import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError()
    console.log(error)

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Oops!</h1>
            <h2>
                {error.status.toString().concat(" ", error.data)}
            </h2>
        </div>
    )
}