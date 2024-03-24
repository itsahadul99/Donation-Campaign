import { useLoaderData, useParams } from "react-router-dom";
import { savedCard } from "../utils/localStorage";

const DonationDetails = () => {
    const { id } = useParams();
    const cards = useLoaderData();
    const car = cards.find(c => c.id == parseInt(id));
    // console.log(car);
    const handleDonateBtn = id => {
        savedCard(parseInt(id))
    }
    return (
        <div className="my-10 max-w-7xl mx-auto ">
            <div className="relative">
                <img src={car.image} className="w-full max-h-[600px] bg-cover" />
                <button onClick={() => handleDonateBtn(car.id)} className="px-5 py-3 font-bold text-xl text-white rounded-lg bg-[#FF444A] absolute bottom-5 left-5">Donate ${car.price}</button>
            </div>
                <h1 className="text-3xl font-bold text-black my-5">{car.title}</h1>
                <p>{car.description}</p>
        </div>
    );
};

export default DonationDetails;