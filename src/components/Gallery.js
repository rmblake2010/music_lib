import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { DataContext } from "../contexts/DataContext"
import GalleryItem from "./GalleryItem"

function Gallery() {
    const data = useContext(DataContext);


    return(
        <div>
        {data.map((musicItem, i ) => {
            return(
            <GalleryItem key={i} musicItem={musicItem}/>
            )
        })}
        </div>
    )
}


export default Gallery




