import React, { useState, useCallback,  } from "react";
import Modal from "@netojose/react-modal";
import './breed-details.css';
//dla odmiany uzywam innego sposobu definicji komponentu oraz inaczej pobieram dane za pomoca zwyklego fetch
function BreedDetail({ breed }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(false);
  const fetchImage = async () => {
    const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await response.json();
    setImageUrl(data.message);
};
  const openModal = useCallback(() => {
    fetchImage()
    setIsOpen(true);
  }, []);
  
  const closeModal = useCallback(() => setIsOpen(false), []);

    return (
    <div className="breed-container">
      <input
        type="button"
        className="btn btn-dark"
        value={breed}
        onClick={openModal}
      />
    
      <Modal isOpen={isOpen} onRequestClose={closeModal} >
      <input type="button" value="Get Random picture" onClick={fetchImage} />
      <input type="button" value="Close modal" onClick={closeModal} />
        <p>This is the modal conten is for: {breed}</p>
        <div className="image-container">
            <img className="image-card" alt="dog" src={imageUrl} />
        </div>
      </Modal>
    </div>
  );
}
export default BreedDetail;
