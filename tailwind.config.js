import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                custom: ['Schibsted Grotesk', 'sans-serif'],
            },
            colors: {
                black: '#101010',
                red: '#e55733', 
                grey: '#191919',
                white: '#ffffff',
                lightgrey: '#d9d9d9',
                mediumgrey: '#2d2d2d',
                lime: '#b2f042',
                lavender: '#b286fd',
            },
            fontSize: {
                'h1': ['2.25rem', { lineHeight: '2.5rem' }],
                'h2': ['1.875rem', { lineHeight: '2.25rem' }],
                'h3': ['1.5rem', { lineHeight: '2rem' }],
                'body': ['1rem', { lineHeight: '1.5rem' }],
            },
        },
    },

    plugins: [forms],
};
