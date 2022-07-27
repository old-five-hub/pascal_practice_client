/** @type {import('tailwindcss').Config} */

const genSpacing = () => {
  const obj = {};
  for(let i = 1; i <= 100; i++){
    obj[i] = `${i*2}px`
  }
  return obj
}


module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing: genSpacing(),
      colors: {
        'primary': 'rgb(var(--arcoblue-1))',
        'primary-2': 'rgb(var(--arcoblue-2))',
        'primary-3': 'rgb(var(--arcoblue-3))',
        'primary-4': 'rgb(var(--arcoblue-4))',
        'primary-5': 'rgb(var(--arcoblue-5))',
        'primary-6': 'rgb(var(--arcoblue-6))',
        'primary-7': 'rgb(var(--arcoblue-7))',
        'success': 'rgb(var(--green-1))',
        'success-2': 'rgb(var(--green-2))',
        'success-3': 'rgb(var(--green-3))',
        'success-4': 'rgb(var(--green-4))',
        'success-5': 'rgb(var(--green-5))',
        'success-6': 'rgb(var(--green-6))',
        'success-7': 'rgb(var(--green-7))',
        'warning': 'rgb(var(--orange-1))',
        'warning-2': 'rgb(var(--orange-2))',
        'warning-3': 'rgb(var(--orange-3))',
        'warning-4': 'rgb(var(--orange-4))',
        'warning-5': 'rgb(var(--orange-5))',
        'warning-6': 'rgb(var(--orange-6))',
        'warning-7': 'rgb(var(--orange-7))',
        'danger': 'rgb(var(--red-1))',
        'danger-2': 'rgb(var(--red-2))',
        'danger-3': 'rgb(var(--red-3))',
        'danger-4': 'rgb(var(--red-4))',
        'danger-5': 'rgb(var(--red-5))',
        'danger-6': 'rgb(var(--red-6))',
        'danger-7': 'rgb(var(--red-7))',
        'link': 'rgb(var(--arcoblue-1))',
        'link-2': 'rgb(var(--arcoblue-2))',
        'link-3': 'rgb(var(--arcoblue-3))',
        'link-4': 'rgb(var(--arcoblue-4))',
        'link-5': 'rgb(var(--arcoblue-5))',
        'link-6': 'rgb(var(--arcoblue-6))',
        'link-7': 'rgb(var(--arcoblue-7))',
        'border-1': 'var(--color-neutral-2)',
        'border-2': 'var(--color-neutral-3)',
        'border-3': 'var(--color-neutral-4)',
        'border-4': 'var(--color-neutral-6)',
        'fill-1': 'fade(#FFF, 4%)',
        'fill-2': 'fade(#FFF, 8%)',
        'fill-3': 'fade(#FFF, 12%)',
        'fill-4': 'fade(#FFF, 16%)',
        'text-1': 'fade(#FFF, 90%)',
        'text-2': 'fade(#FFF, 70%)',
        'text-3': 'fade(#FFF, 50%)',
        'text-4': 'fade(#FFF, 30%)',
        'bg-1': '#17171A',
        'bg-2': '#232324',
        'bg-3': '#2A2A2B',
        'bg-4': '#313132',
        'bg-5': '#373739',
        'bg-6': '#F6F6F6',
      }
    },
  },
  plugins: [],
}
