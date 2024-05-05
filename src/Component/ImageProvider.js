import React, { createContext, useState } from "react";

export const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState(null);

    const handleSetLogoImage = (imageUrl) => {
        setImageUrl(imageUrl);
    };

    return <ImagesContext.Provider value={{ imageUrl, handleSetLogoImage }}>{children}</ImagesContext.Provider>;
};

export default ImagesProvider;
