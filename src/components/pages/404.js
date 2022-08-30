import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage></ErrorMessage>
            <p style={{'text-Align': 'center', 'fontWeight': 'bold', 'fontSize': '34px'}}>Странца не найден</p>
            <Link style={{'marginTop': '30px', 'textAlign': 'center'}} to='/'>Веонуться назад</Link>
        </div>
    )
}

export default Page404;