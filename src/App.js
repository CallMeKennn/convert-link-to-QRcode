import "./App.css";
import { useState } from "react";
import QRCode from "qrcode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [url, setUrl] = useState("");
    const [qrImage, setQrImage] = useState("");

    const isUrlValid = (url) => {
        try {
          new URL(url);
          return true;
        } catch (error) {
          return false;
        }
      };

    const generateQRcode = () => {
        if (url === "") {
            setQrImage("");
            return toast.error("Trường này khong được để trống", {
                position: "top-right",
                autoClose: 5000,
            });
        } else if (!isUrlValid(url)) {
            setQrImage("");
            return toast.error("URL không thỏa mãn, yêu cầu nhập lại URL khác, ", {
                position: "top-right",
                autoClose: 5000,
            });
        } else {
            QRCode.toDataURL(url, (err, urlQR) => {
                if (err)
                    return toast.error(err, {
                        position: "top-right",
                        autoClose: 5000,
                    });
                setQrImage(urlQR);
                setUrl("");
            });
        }
    };

    return (
        <div className="App">
            <h1>QR Code Generator</h1>
            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="Please input the link you want to convert"
            />
            <button onClick={generateQRcode}>Generate</button>
            {qrImage && (
                <div className="image">
                    <img src={qrImage} alt={qrImage} />
                    <div>
                        <a href={qrImage} download="qrcode.png">
                            Download
                        </a>
                    </div>
                </div>
            )}

            <ToastContainer position="top-right" autoClose={5000} />
        </div>
    );
}

export default App;
