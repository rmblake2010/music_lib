import {useState} from 'react'
 
const GalleryItem = ({ musicItem }) => {
    let [view, setView] = useState(false)

    const simpleView = () => (
        <div>
            <h3>{musicItem.trackName}</h3>
            <h4>{musicItem.collectionName}</h4>
        </div>
        )
    const detailedView = () => (
        <div>
        <h3>{musicItem.trackName}</h3>
        <h4>{musicItem.collectionName}</h4>
        <h4>{musicItem.primaryGenreName}</h4>
        <h4>{musicItem.releaseDate}</h4>
    </div>
    )
 

    return(
        <div className="gallery-item" onClick={() => {setView(!view)}}>
        {view ? detailedView() : simpleView()}
        </div>
    )
}

export default GalleryItem