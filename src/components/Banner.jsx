import BgImg from '../assets/wave.svg';
const Banner = () => {
    // const handleInputField = e => {
    //     // e.preventDefault();
    //     const fieldText = e.target.value;
    // }
    // const handleSearch = () => {
    //     console.log('from handle search');
    // }
    return (
        <div className='flex flex-col justify-center items-center space-y-5 min-h-full sm:min-h-[calc(100vh-90px)] relative '>
            <h1 className='text-5xl font-bold text-[#0B0B0B] z-10'>I Grow By Helping People In Need</h1>
            <div>
                <input className='py-3 px-5 rounded-sm border font-bold' type="text" placeholder='Search here...' />
                <button className='bg-[#FF444A] py-3 px-5 rounded-sm font-bold text-white text-xl'>Search</button>
            </div>
            <img src= {BgImg} className='w-full absolute bottom-0'/>
        </div>
    );
};

export default Banner;