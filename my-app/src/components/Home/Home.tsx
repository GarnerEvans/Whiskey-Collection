import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(rgba(233,198,23) 0%, rgba(184,173,115,1) 47%, rgba(169,147,19,1) 100%)`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAligin: 'center',
        position: 'relative',
        transform: 'translate(50%, -50%)',
        color: 'Black',
    },
    button_text: {
        color: 'black',
        textDecoration: 'none',
        textAlign: 'center'
    },
});

export const Home = ( props:Props ) => {

    const classes = useStyles();
    
    return (
    <>
        <Navbar/>
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <Button>
                        <Link to='/inventory' className={classes.button_text} > To the whiskeys </Link>
                    </Button>
            </div>
        </div>
    </>

  )
}