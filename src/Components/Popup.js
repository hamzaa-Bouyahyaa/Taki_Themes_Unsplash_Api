import React from 'react'
import './Cards.scss'

function Popup({ image }) {
    return (
        <div class="popup" id="popup">
            <div class="popup-inner">
                <div class="popup__photo">
                    <img src={image?.urls?.small} alt="" />
                </div>
                <div class="popup__text">
                    <img className="card__thumb" src={image?.user?.profile_image?.small} alt="" />
                    <h1>{image?.alt_description || 'No Title'}</h1>
                    <p>{image?.description || 'No description'}</p>
                    <span className="card__status" style={{ fontSize: '20px' }}>
                        {image?.likes} Likes
                        <i class="far fa-heart" style={{ marginLeft: '5px' }}></i>
                    </span>
                </div>
                <a class="popup__close" href="#">X</a>
            </div>
        </div>
    )
}

export default Popup
