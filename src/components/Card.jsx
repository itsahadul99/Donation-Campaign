import { useLoaderData } from "react-router-dom";

const Card = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto my-10 space-y-3">
            {
                cards.map(card => {
                    const textStyles = {
                        color: `${card.textColor}`
                    }
                    const cardStyles = {
                        backgroundColor: `${card.cardBg}`
                    }
                    const categoryStyles = {
                        backgroundColor: `${card.categoryBg}`
                    }
                    return (
                        <div key={card.id} style={cardStyles} className="rounded-md space-y-3">
                            <div className="">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div style={textStyles} className="pl-5 py-5">
                                <button className="px-3 py-1 mb-2 rounded-lg font-semibold" style={categoryStyles}>{card.category}</button>
                                <h2 className="card-title">{card.title}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Card;