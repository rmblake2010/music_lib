import {useState} from 'react'
import {Link} from 'react-router-dom' 

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
            <h3>
                <Link to={`/artist/${musicItem.artistId}`}>
                    {musicItem.artistName}
                </Link>
            </h3>
            <h3>
                <Link to={`/artist/${musicItem.collectionId}`}>
                    {musicItem.collectionName}
                </Link>
            </h3>
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