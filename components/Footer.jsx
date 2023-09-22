

const Footer = () => {
    
  return (
    <footer className="hidden md:block w-full text-center bottom-0 fade-in-pic">
        <span className="text-gray-400 text-sm">
            I built my portfolio from scratch using
            <a href="https://nextjs.org/docs" for="nextjs">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" className="next-icon"/>
            </a>
            and 
            <a href="https://tailwindcss.com/docs/installation" for="tailwind">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" className="tailwind-icon"/>
            </a>
        </span>
    </footer>
  )
}

export default Footer