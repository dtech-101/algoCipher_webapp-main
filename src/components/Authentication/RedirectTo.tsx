import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


interface IRedirectToProps {
    path: string
}
const RedirectTo = ({
    path
}: IRedirectToProps) => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(path);
    },[])
    return (
        <></>
    )
}
export default RedirectTo;