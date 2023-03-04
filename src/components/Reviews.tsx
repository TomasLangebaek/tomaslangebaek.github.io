import React, { useState } from 'react';
import people from '../assets/reviewsData/data';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { Paper, Typography } from '@mui/material';

interface Person {
    name: string;
    job: string;
    image: string;
    text: string;
}

export const Reviews = () => {
    const [index, setIndex] = useState<number>(0);
    const { name, job, image, text }: Person = people[index];

    const checkNumber = (number: number): number => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <Paper>
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
          <FaStar />
        </span>
            </div>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="subtitle1">{text}</Typography>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
        </article>
        </Paper>
    );
};