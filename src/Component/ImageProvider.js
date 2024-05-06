import React, { createContext, useState } from "react";

export const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [size, setSize] = useState(null)
    const [checked, setChecked] = useState(true)

    const handleSetLogoImage = (imageUrl) => {
        setImageUrl(imageUrl);
    };

    const handleChangeSizeLogo = (newSize) => {
        setSize(newSize)
    }

    const handleHiddenBackgroundLogo = (hidden) => {
        setChecked(hidden)
    }

    return <ImagesContext.Provider value={{ imageUrl, size, checked, handleSetLogoImage, handleChangeSizeLogo, handleHiddenBackgroundLogo }}>{children}</ImagesContext.Provider>;
};

export default ImagesProvider;
