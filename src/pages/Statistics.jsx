import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCard } from "../utils/localStorage";
// import { Pie, PieChart } from 'recharts';
const Statistics = () => {
    const cards = useLoaderData();
    const [donateCard, setDonateCard] = useState([]);
    const priceArray = cards.map(card => card.price);
    // console.log(priceArray);
    const totalPrice = priceArray.reduce((int, current) => int + current);
    // console.log(totalPrice);
    useEffect(() => {
        const storedCard = getCard();
        if (cards.length > 0) {
            const donateCards = cards.filter(card => storedCard.includes(card.id))
            setDonateCard(donateCards);
        }
    }, [cards]);
    // const priceDonate = donateCard.map(card => card.price);
    // console.log(priceDonate);
    // const donateTotal = priceDonate.reduce((ini = 0, curr = 0) => ini + curr);
    // console.log(donateTotal);
    // const data = [
    //     {name: 'Total Donation', value: `${totalPrice}`},
    //     {name: 'Your Donation', value: `${donateTotal}`}
    // ]
    return (
        <div>
            {/* <PieChart width={730} height={250}>
                <Pie data={data} dataKey="value" nameKey='name' cx="50%" cy="50%" innerRadius={0} outerRadius={100} fill="#8884d8" />
            </PieChart> */}
        </div>
    );
};

export default Statistics;