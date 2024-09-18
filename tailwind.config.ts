import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // "./node_modules/flowbite-react/lib/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  darkMode: 'class', // GJør det til lightmode
  // darkMode: 'media', // Gjør det til darkmode
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background': '#273343',
        'mid-blue': '#145DA0',
        'd-blue':'#0C2D48',
        'baby-blue':'#B1D4E0',
        // 'dark':"#273343",
        'dark':"#161618",
        //161618 111827
        'xdark':"#161618",
        // 'ldark':"#2b3e56",
        'ldark':"#161618",
        // 222222  1f2937

        'sgrey':"#222222",
        'hoverg':"#2b2a2a",
        'slgrey':"#272727",
        // 374151
        'logoBlue':"#00dbff",
        'logoDBlue':"#006a80",


      },
      fontSize: {
        'dt': '0.95rem', // Adjust the size as needed
      },
      plugins: [
        '@tailwindcss/typography',
        '@tailwindcss/aspect-ratio',
        '@tailwindcss/forms',
        // require("daisyui"),
      ],
    },
  },
  plugins: [
    require("daisyui") ,
    // require("flowbite/plugin"),
    // Fakker opp fargene (gjør det mørkegrå)
    
  ],
}
export default config
