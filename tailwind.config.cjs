// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-2xl',
    'font-bold',
    'p-4',
    'text-center',
    'bg-blue-500',
    'text-white',
    'rounded',
    'border',
    'border-dashed',
    'table-auto',
    'text-sm',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
