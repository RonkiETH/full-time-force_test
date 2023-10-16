import React from 'react';
import logo from '../assets/logo.svg'; // Reemplaza con la ruta y nombre de tu logo

const Header = () => {
    return (
        <header className=" text-black p-4 flex items-center mb-3">
        <div className="flex items-center">
            <img src={logo} alt="logo" className="w-70 h-20 mx-5" />
        </div>
        <div className="flex items-center">
            <h2 className='font-extrabold text-[#222328] text-[25px]'>Mi Aplicación</h2>
        </div>
        </header>
    );
};

export default Header;

