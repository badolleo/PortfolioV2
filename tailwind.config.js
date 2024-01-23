/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./*.html'],
    theme : {
        extend: {
            colors: {
                'orange-1' : '#E3AC1C',
                'background-white' : 'rgb(243 244 246)',
                'transparent-1' : 'rgba(0,0,0,0.8)',
            },
        },
    },
    plugins: [] ,
}