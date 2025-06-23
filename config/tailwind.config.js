
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'purple-500': '#8b5cf6',
                        'purple-600': '#7c3aed',
                        'pink-500': '#ec4899',
                        'pink-600': '#db2777',
                        'teal-400': '#2dd4bf',
                        'indigo-400': '#818cf8',
                        'pastel-blue': '#a5d8ff',
                        'pastel-pink': '#ffd6ff',
                        'pastel-purple': '#e0c3fc',
                        'pastel-green': '#caffbf',
                        'pastel-yellow': '#fdffb6',
                        'soft-purple': '#9b8afb',
                        'soft-pink': '#ffa7d1',
                        'light-bg': '#fdf8ff'
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'blob': 'blob 8s infinite',
                        'text-gradient': 'text-gradient 3s linear infinite',
                        'fadeIn': 'fadeIn 0.6s ease-out forwards',
                        'typewriter': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite'
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                            '50%': { transform: 'translateY(-20px) rotate(5deg)' }
                        },
                        blob: {
                            '0%': { transform: 'translate(0px, 0px) scale(1)' },
                            '33%': { transform: 'translate(40px, -60px) scale(1.2)' },
                            '66%': { transform: 'translate(-30px, 30px) scale(0.8)' },
                            '100%': { transform: 'translate(0px, 0px) scale(1)' }
                        },
                        'text-gradient': {
                            to: { 'background-position': '200% center' }
                        },
                        fadeIn: {
                            from: { opacity: 0, transform: 'translateY(20px)' },
                            to: { opacity: 1, transform: 'translateY(0)' }
                        },
                        typing: {
                            from: { width: '0' },
                            to: { width: '100%' }
                        },
                        'blink-caret': {
                            'from, to': { 'border-color': 'transparent' },
                            '50%': { 'border-color': '#8b5cf6' }
                        }
                    }
                }
            }
        }
    