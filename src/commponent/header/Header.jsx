import React from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={s.header}>
                <div className={s.containerIr}>
                    <div className={s.container}>

                        <Link to={'/aboutUS'}>
                            history
                        </Link>
                        <Link to={'/'}>
                            main
                        </Link>
                        <Link to={'/catalog'}>
                            catalog
                        </Link>




                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;