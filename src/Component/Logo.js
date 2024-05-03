import images from "../Assets/Images";
import { useState } from "react";

const Logo = ({logoImg}) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        logoImg(image)
    };

    const handleChooseLogoImage = (logoName) => {
        logoImg(logoName)
    }

    return (
        <div className="logo-container flex">
            <button className="">
                <img src={images.closeImage} className="h-32 cursor-pointer bg-red-400 mt-4 mb-0" onClick={() => handleChooseLogoImage("Clear")}/>
            </button>
            <button className="">
                <label htmlFor="upload-button" className="upload-button block">
                    <input
                        onChange={handleImageChange}
                        type="file"
                        id="upload-button"
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                    <img src={images.addImage} className="h-32 cursor-pointer bg-red-400 mt-4 mb-0"/>
                </label>
            </button>
            <button >
                <img src={images.facebookLogo} className="h-32 cursor-pointer bg-red-400 mt-4 mb-0" onClick={() => handleChooseLogoImage("Facebook")}/>
            </button>
            <button >
                <img src={images.instagramLogo} className="h-32 cursor-pointer bg-red-400 mt-4 mb-0" onClick={() => handleChooseLogoImage("Instagram")}/>
            </button>
            <button >
                <img src={images.linkedinLogo} className="h-32 cursor-pointer bg-red-400 mt-4 mb-0" onClick={() => handleChooseLogoImage("Linkedin")}/>
            </button>
            <button >
                <img src={images.pinterestLogo} className="h-32 cursor-pointer bg-red-400 mt-4 mb-0" onClick={() => handleChooseLogoImage("Pinterest")}/>
            </button>
            <button >
                <img src={images.twitterLogo} className="h-32 cursor-pointer bg-red-400 mt-4 mb-0" onClick={() => handleChooseLogoImage("Twitter")}/>
            </button>
            <button >
                <img src={images.youtubeLogo} className="h-32 cursor-pointer bg-red-400 mt-4 mb-0" onClick={() => handleChooseLogoImage("Youtube")}/>
            </button>
        </div>
    );
};

export default Logo;