import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { PHOTOS } from './mock-data/photos';

const PhotoGalary = props => {

    return <div>
        {
            props.photos.map((photo, index) => {
                return <div className="row align-items-start" key={index}>
                    <div className="col">
                        <h3>{photo.title}</h3>
                        <img src={photo.thumbnailUrl} />
                    </div>
                </div>
            })
        }
    </div>


}

const App = () => {
    return <div className="container">
        <h1>Photo Galary</h1>
        <PhotoGalary photos={PHOTOS} />
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'))