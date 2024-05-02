import images from "../Assets/Images";

const Logo = () => {

    console.log(images);

    return (
        <div className="logo-container flex">
            <button className="bg-stone-300">
                <img src={images.closeImage} className="h-32 cursor-pointer bg-red-400" />
            </button>
            <button>
                <label htmlFor="upload-button" className="upload-button">
                    <input

                        type="file"
                        id="upload-button"
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                    <img src={images.addImage} className="h-32 cursor-pointer bg-red-400" />
                </label>
            </button>
            <button >
                <img src={images.facebookLogo} className="h-32 cursor-pointer bg-red-400" />
            </button>
            <button >
                <img src={images.instagramLogo} className="h-32 cursor-pointer bg-red-400" />
            </button>
            <button >
                <img src={images.linkedinLogo} className="h-32 cursor-pointer bg-red-400" />
            </button>
            <button >
                <img src={images.pinterestLogo} className="h-32 cursor-pointer bg-red-400" />
            </button>
            <button >
                <img src={images.twitterLogo} className="h-32 cursor-pointer bg-red-400" />
            </button>
            <button >
                <img src={images.youtubeLogo} className="h-32 cursor-pointer bg-red-400" />
            </button>
        </div>
    );
};

export default Logo;