import React from 'react';
import PropTypes from 'prop-types';
import leafIcon from '../images/20190206-leaf-icon.png';
import personIcon from '../images/20190206-person-icon.jpg';
import laptopIcon from '../images/20190206-laptop-icon.png';
import diamondIcon from '../images/diamond.png';

const dumbImageMapper = (...images) => {
    const imageList = images;
    return imageList;
};

function Tile(props) {
    const images = dumbImageMapper(personIcon, laptopIcon, diamondIcon, leafIcon);
    return (
        <div className="trait-box">
            <div className="icon-img">
                <img src={images[props.index]} alt={props.alt} className="traits-image-icons" />
            </div>
            <h2 className="trait-name">{props.traitName}</h2>
            <p className="trait-text">{props.traitText}</p>
        </div>
    );
}

function MakeTiles(props) {
    const keygen = () => {
        let kee = (Math.random() * 1000000);
        kee = kee.toFixed();
        return kee;
    };

    return props.tiles.map((tile, i) => (
        <Tile
            alt={tile.alt}
            traitName={tile.traitName}
            traitText={tile.traitText}
            index={i}
        />
    ));
}

export default function Traits(props) {
    return (
        <div id="about" className="trait-wrapper">
            <MakeTiles tiles={props.info.tiles} />
        </div>
    );
}

Traits.propTypes = {
    tiles: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            traitName: PropTypes.string,
            traitText: PropTypes.string
        })
    )
};

Traits.defaultProps = {
    tiles: [{
        icon: '',
        imageAlrt: '',
        traitName: '',
        traitText: '',
    }]
};
