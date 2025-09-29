import { createContext, useState, useContext, useEffect } from "react";

const LikedContext = createContext()

export const useLikedContexts = () => useContext(LikedContext)

export const LikesProvider = ({ children }) => {

    // the favorite stat 
    const [fav, setFav] = useState([])

    // get the image from localStorage
    useEffect(() => {
        const storedFavs = localStorage.getItem('fav')

        if (storedFavs) setFav(JSON.parse(storedFavs))
    }, [])
    // save the iamge to loaceSorage
    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(fav))
    }, [fav])

    // set the image as favorite
    const addToLiked = (image) => {
        setFav(prev => [...prev, image])
    }

    // remove the image form the favorite state
    const removeFromLiked = (imageToCheck) => {
        setFav(prev => prev.filter(image => image.url !== imageToCheck.url))
    }

    // check if image is favorite
    const isLiked = (imageToCheck) => {
        return fav.some(image => image.url = imageToCheck.url)
    }

    const value = {
        fav, 
        setFav,
        addToLiked,
        removeFromLiked, 
        isLiked,
    }

    return <LikedContext.Provider value={value}>
        {children}
    </LikedContext.Provider>
}