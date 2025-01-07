import Meals from '@/component/Meals';
import React from 'react';
import styles from './styles.module.css'


const MealsPage = () => {
    return (
        <div className='text-center space-y-5 mb-5'>
            <h1 className={styles.font_tomato}>meals page </h1>
            <Meals/>
        </div>
    );
};

export default MealsPage;