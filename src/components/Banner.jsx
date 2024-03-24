const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-5 min-h-[80vh]'>
            <h1 className='text-5xl font-bold '>I Grow By Helping People In Need</h1>
            <div>
                <input  className='py-3 px-5 rounded-sm border font-bold' type="text" placeholder='Search here...' />
                <button className='bg-[#FF444A] py-3 px-5 rounded-sm font-bold text-white text-xl'>Search</button>
            </div>
        </div>
    );
};

export default Banner;