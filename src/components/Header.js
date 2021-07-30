import React, { useState } from 'react'

function Header ({ logoPic, loading }) {
    return(
        <header className='header header_position_center' aria-label='шапка'>
            <div className={`header__loading ${loading && 'header__loading_active'}`} />
            <div className='header__container'>
                <img 
                    className={`header__logo ${loading && 'header__logo_loading'}`} 
                    src={logoPic} alt='логотип' 
                />
            </div>
        </header>
    )
}

export default Header