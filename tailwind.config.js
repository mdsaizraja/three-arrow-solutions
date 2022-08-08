const plugin = require('tailwindcss/plugin')

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        // colors: {
        //     'pencil': '#A7A7A7',
        // },
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                    '.scrollbar-hide': {
                        /* IE and Edge */
                        '-ms-overflow-style': 'none',

                        /* Firefox */
                        'scrollbar-width': 'none',

                        /* Safari and Chrome */
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }
                }
            )
        }),

        require('tailwindcss'),
        require('autoprefixer'),
    ],
};