import ConverLinkToQRcodePage from "./Pages/ConvertLinkToQrCodePage/ConverLinkToQRcodePage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ConverLinkToQRcodePage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
