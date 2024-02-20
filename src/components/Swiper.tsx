import { SbBlokData } from '@storyblok/astro';
import React from 'react'
import { register } from 'swiper/element/bundle';

register();

type SwiperProps = any

const Swiper = (props:SwiperProps) => {
    return (
        <div>
            Swiper
        </div>
    );
};

export { Swiper };