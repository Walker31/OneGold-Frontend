import './CollectionCard.css';

function CollectionCard({ imageSrc, title }) {
    return (
        <div className="card-container">
            <img src={imageSrc} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
        </div>
    );
}

export default CollectionCard;
