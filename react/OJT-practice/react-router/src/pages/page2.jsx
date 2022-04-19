import { useNavigate } from "react-router-dom";

const Page2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page 2</h1>
            <button onClick={() => navigate("/page1")}>page1</button>
        </div>
    );
}

export default Page2;