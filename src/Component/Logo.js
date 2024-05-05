import { useState, useContext } from "react";
import closeImage from "../Assets/Images/close-images.png"
import addImage from "../Assets/Images/add-images.png"
import facebookLogo from "../Assets/Images/facebook-logo.png"
import instagramLogo from "../Assets/Images/instagram-logo.png"
import linkedinLogo from "../Assets/Images/linkedin-logo.png"
import pinterestLogo from "../Assets/Images/pinterest-logo.png"
import twitterLogo from "../Assets/Images/twitter-logo.png"
import youtubeLogo from "../Assets/Images/youtube-logo.png"
import { ImagesContext } from "./ImageProvider";

const Logo = () => {
    const [image, setImage] = useState(null);
    
    const {handleSetLogoImage} = useContext(ImagesContext)


    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        handleSetLogoImage(selectedImage);
    };

    const handleChooseLogoImage = (logoName) => {
        handleSetLogoImage(logoName);
    }

    return (
        <div className="logo-container flex">
            <button className="w-1/12">
                <img src={closeImage} className="w-full h-auto object-cover object-center" onClick={() => handleChooseLogoImage("Clear")}/>
            </button>
            <button className="w-1/12">
                <label htmlFor="upload-button" className="upload-button ">
                    <input
                        onChange={handleImageChange}
                        type="file"
                        id="upload-button"
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                    <img src={addImage} className="w-full h-auto object-cover object-center"/>
                </label>
            </button>
            <button className="w-1/12">
                <img src={facebookLogo} className="w-full h-auto object-cover object-center" onClick={() => handleChooseLogoImage("Facebook")}/>
            </button>
            <button className="w-1/12">
                <img src={instagramLogo} className="w-full h-auto object-cover object-center" onClick={() => handleChooseLogoImage("Instagram")}/>
            </button>
            <button className="w-1/12">
                <img src={linkedinLogo} className="w-full h-auto object-cover object-center" onClick={() => handleChooseLogoImage("Linkedin")}/>
            </button>
            <button className="w-1/12">
                <img src={pinterestLogo} className="w-full h-auto object-cover object-center" onClick={() => handleChooseLogoImage("Pinterest")}/>
            </button>
            <button className="w-1/12">
                <img src={twitterLogo} className="w-full h-auto object-cover object-center" onClick={() => handleChooseLogoImage("Twitter")}/>
            </button>
            <button className="w-1/12">
                <img src={youtubeLogo} className="w-full h-auto object-cover object-center" onClick={() => handleChooseLogoImage("Youtube")}/>
            </button>
        </div>
    );
};

export default Logo;