// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts}'],
    theme: {
        extend: {
            fontFamily: {
                space: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                primary: '#B9FF66',
                secondary: '#191A23',
                tertiary: '#f3f3f3',
                dark: {
                    100: '#292A32',
                    200: '#111827',
                },
            },
        },
    },
    plugins: [],
};
