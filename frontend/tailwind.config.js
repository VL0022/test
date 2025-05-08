/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			openSans: [
  				'Open Sans',
  				'sans-serif'
  			],
  			figtree: [
  				'Figtree',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			customShake: {
  				'0%, 100%': {
  					transform: 'translateX(0)'
  				},
  				'10%, 30%, 50%, 70%, 90%': {
  					transform: 'translateX(-5px)'
  				},
  				'20%, 40%, 60%, 80%': {
  					transform: 'translateX(5px)'
  				}
  			},
  			fadeOut: {
  				'0%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				},
  				'100%': {
  					opacity: '0',
  					transform: 'scale(0.95) translateX(-8px)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-4px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeInUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideOutLeft: {
  				'0%': {
  					transform: 'translateX(0) scale(1)'
  				},
  				'100%': {
  					transform: 'translateX(-40px) scale(0.95)'
  				}
  			},
  			slideInRight: {
  				'0%': {
  					transform: 'translateX(40px) scale(0.95)'
  				},
  				'100%': {
  					transform: 'translateX(0) scale(1)'
  				}
  			},
  			slideOutRight: {
  				'0%': {
  					transform: 'translateX(0) scale(1)'
  				},
  				'100%': {
  					transform: 'translateX(40px) scale(0.95)'
  				}
  			},
  			slideInLeft: {
  				'0%': {
  					transform: 'translateX(-40px) scale(0.95)'
  				},
  				'100%': {
  					transform: 'translateX(0) scale(1)'
  				}
  			},
  			shake: {
  				'0%, 100%': {
  					transform: 'translateX(0)'
  				},
  				'25%': {
  					transform: 'translateX(-6px)'
  				},
  				'50%': {
  					transform: 'translateX(6px)'
  				},
  				'75%': {
  					transform: 'translateX(-6px)'
  				}
  			},
  			slideDown: {
  				'0%': {
  					transform: 'translateY(-2px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			customShake: 'customShake 0.5s ease-in-out',
  			slideOutLeft: 'slideOutLeft 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			slideInRight: 'slideInRight 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			slideOutRight: 'slideOutRight 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			slideInLeft: 'slideInLeft 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			shake: 'shake 0.3s cubic-bezier(.36,.07,.19,.97)',
  			'slide-down': 'slideDown 0.2s ease-out forwards',
  			fadeIn: 'fadeIn 0.5s ease-out forwards',
  			fadeInUp: 'fadeInUp 0.5s ease-out forwards'
  		}
  	}
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
  ],
}