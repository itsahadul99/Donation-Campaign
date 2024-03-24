import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getCard } from "../utils/localStorage";

const Donation = () => {
    const cards = useLoaderData();
    const [donateCard, setDonateCard] = useState([]);
    // console.log(cards);
    useEffect(() => {
        const storedCard = getCard();
        if (cards.length > 0) {
            const donateCards = cards.filter(card => storedCard.includes(card.id))
            setDonateCard(donateCards);
            // setDisplayCard(donateCards)
        }
    }, [cards]);
    const handleSeeAllBtn = () => {
        console.log("See all button adding soon");
    }
    // console.log(donateCard);
    return (
        <div>
            <div className="grid grid-cols-2 items-center gap-6 max-w-7xl mx-auto my-10 space-y-3">
                {
                    donateCard.map(card => {
                        const textStyles = {
                            color: `${card.textColor}`
                        }
                        const cardStyles = {
                            backgroundColor: `${card.cardBg}`
                        }
                        const categoryStyles = {
                            backgroundColor: `${card.categoryBg}`,
                            color: `${card.textColor}`
                        }
                        const btnStyles = {
                            backgroundColor: `${card.textColor}`
                        }
                        return (
                            <div key={card.id}>
                                <div style={cardStyles} className="rounded-md flex items-center gap-5 space-y-3">
                                    <div>
                                        <img src={card.image} className="w-full" alt={card.title} />
                                    </div>
                                    <div className="px-5 pb-5">
                                        <button className="px-3 py-1 mb-2 rounded-lg font-semibold" style={categoryStyles}>{card.category}</button>
                                        <h2 style={textStyles} className="card-title">{card.title}</h2>
                                        <h4 style={textStyles} className="font-bold">${card.price}.00</h4>
                                        <Link to={`/donation-details/${card.id}`}><button style={btnStyles} className='mt-5 px-5 py-3 rounded-lg font-bold text-white'>View Details</button></Link>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center w-full text-white">
                <button onClick={handleSeeAllBtn} className=' bg-green-600 mb-8 px-5 py-3 rounded-lg font-bold'>See All</button>
            </div>
        </div>
    );
};

export default Donation;