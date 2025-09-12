// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts}'],
    theme: {
        extend: {
            screens: {
                sm: '576px',  // Small screens
                md: '768px',  // Medium screens
                lg: '992px', // Large screens
                xl: '1280px', // Extra large
                '2xl': '1440px',
            },
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
