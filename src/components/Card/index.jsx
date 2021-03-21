import React from 'react';

const Card = (props) => {
    const { title, content } = props;

    return (
        <div className="card">
            <div className="card__header">
                {title}
            </div>

            <div className="card__content">
                {content}
            </div>
        </div>
    );
};

export default Card;
