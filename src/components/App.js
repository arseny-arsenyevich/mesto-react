import React, { useCallback, useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import PopupWithDelete from './PopupWithDelete';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedCardName, setSelectedCardName] = useState(null);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [cardToBeDeleted, setCardToBeDeleted] = useState(null);

    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        name: '',
        about: '',
        avatar: ''
    });
    const [loading, setLoading] = useState(true);
    
    const handleEscClose = useCallback((e) => {
        if (e.key === 'Escape') closeAllPopups();
    }, [])
        
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlaceOpen(false);
        setIsImagePopupOpen(false);
        setIsDeletePopupOpen(false);

        document.removeEventListener('keydown', handleEscClose);
    }
    
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleAddPlaceClick = () => {
        setIsAddPlaceOpen(true);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleCardClick = ([link, description]) => {
        setIsImagePopupOpen(true);
        setSelectedCard(link);
        setSelectedCardName(description);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleDeletePopupOpen = (card) => {
        setIsDeletePopupOpen(true);
        setCardToBeDeleted(card);
    } 

    const handleUpdateUser = (data, setButtonState) => {
        setButtonState(true)

        api.redactProfile(data)
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((e) => console.log(e))
        .finally(() => setButtonState(false))
    }

    const handleUpdateAvatar = (data, setButtonState) => {
        setButtonState(true)

        api.redactAvatar(data)
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((e) => console.log(e))
        .finally(() => setButtonState(false))
    }    

    const handleAddPlaceSubmit = (data, setButtonState) => {
        setButtonState(true)

        return api.addCard(data)
        .then(res => {
            setCards([res, ...cards]);
            closeAllPopups();
        })
        .catch((e) => console.log(e))
        .finally(() => setButtonState(false))
    }

    const handleCardDelete = (setButtonState) => {
        setButtonState(true)
        api.deleteCard(cardToBeDeleted._id)
        .then(() => setCards(state => state.filter(c => c._id !== cardToBeDeleted._id)))
        .catch(e => console.log(e))
        .finally(() => {
            closeAllPopups();
            setButtonState(false);
        })
    }
    
    const handleCardLike = (card) => {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => setCards(state => state.map((c) => c._id === card._id ? newCard : c)))
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
        .then(([userData, cardsData]) => {
            setCurrentUser(userData);
            setCards(cardsData);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))
    }, [])

    return (
    <div className='App'>
    <div className={`page ${loading && 'page_loading'}`}>
    <CurrentUserContext.Provider value={currentUser}>

    <Header  
        logoPic={logo}
        loading={loading}
    />
    <Main 
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleDeletePopupOpen}
        onEditProfile={handleEditProfileClick} 
        onEditAvatar={handleEditAvatarClick} 
        onAddPlace={handleAddPlaceClick} 
        onCardClick={handleCardClick}
    />
    <Footer />

    <section className='popups' aria-label='всплывающие окна'>
        <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup 
            isOpen={isAddPlaceOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup 
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
            cardName={selectedCardName}
        />
        <PopupWithDelete 
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onDelete={handleCardDelete}
        />
    </section>

    </CurrentUserContext.Provider>
    </div>
    </div>
    );
}

export default App;
