import { useNavigate } from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page 1</h1>
            <button onClick={() => navigate("/page2")}>page2</button>
        </div>
    );
}

export default Page1;