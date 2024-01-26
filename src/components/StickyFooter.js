import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-200 p-3 text-center sticky bottom-0 md:hidden">
            <div className='flex justify-between'>
                <Link to={"/CartItems"} ><ShoppingCartIcon /></Link>
                <div><UserButton /></div>
            </div>
        </footer>
    );
};

export default Footer;
