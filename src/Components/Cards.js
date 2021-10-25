import React, { useEffect, useState } from 'react';
import "./Cards.scss";
import axios from 'axios';
import Popup from './Popup';
import { TextField } from '@mui/material';


function Cards() {

    const [images, setImages] = useState([]);
    const [image, setImage] = useState({});
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('')


    useEffect(async () => {
        setLoading(true);
        const response = await axios.get('https://api.unsplash.com/photos/?client_id=0_rgrJIPdlmKgz2EtT5L0aIqyS-R51UR83EPN6Ykh4s');
        const data = await response.data;
        setImages(data);
        setLoading(false);


    }, [])



    return (
        <>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Search by username"
                type="text"
                fullWidth
                placeholder="Search by username"
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'center',
                    width: '1000px',
                }}
            />

            {loading ? <h4>Loading...</h4> :
                <ul class="cards">
                    <Popup image={image} />

                    {images.filter((image) => {
                        if (search === '') {
                            return image
                        }
                        else if (image.user.first_name.toLowerCase().includes(search.toLowerCase())) {
                            return image

                        }

                    }).map((image) => {
                        return (
                            <li key={image.id}>
                                <a class="button" href="#popup" className="card" onClick={async () => await setImage(image)}>
                                    <img src={image.urls.small} className="card__image" alt="" />
                                    <div className="card__overlay">
                                        <div className="card__header">
                                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img className="card__thumb" src={image.user.profile_image.small} alt="" />
                                            <div className="card__header-text">
                                                <h3 className="card__title">{image.user.first_name} {image.user.last_name}</h3>


                                            </div>
                                        </div>
                                        <p className="card__description">{image.alt_description || image.description || 'No description'}</p>
                                    </div>
                                </a>
                                <span className="card__status">
                                    {image.likes} Likes
                                    <i class="far fa-heart" style={{ marginLeft: '5px', color: 'red' }} onClick={async () => {
                                        image.likes = image.likes + 1;
                                        await setImages(images.map((photo) =>
                                            photo.id === image.id ? image : photo
                                        ))
                                    }}></i>
                                </span>
                            </li>
                        )
                    })}

                </ul>
            }

        </>
    )
}

export default Cards