import React from 'react';

const Navbar = () => {
    const [navBackground, setNavBackground] = React.useState("bg-transparent");
    
    const navRef = React.useRef();

    navRef.current = navBackground;

    React.useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 10;
            if(show){
                setNavBackground("shadow-md bg-primary")
            }else{
                setNavBackground("bg-transparent");
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return(
        <div className={` navbar transition-opacity fixed p-3 z-10 text-white  ${navBackground}`}>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-2xl font-bold">AGPOT</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar;