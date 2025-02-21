import { Link } from "react-router-dom";

export default function navI({navCoffis}) {
    return (
        <Link to={navCoffis.to}>{navCoffis.text}</Link>
    )
}