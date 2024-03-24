import toast from "react-hot-toast";

export const getCard = () =>{
    const savedCard = localStorage.getItem('card');
    if(savedCard){
        return JSON.parse(savedCard);
    }
    return [];
}

export const savedCard = id => {
    const storedCard = getCard();
    const isExists = storedCard.find(card => card === id);
    if(!isExists){
        storedCard.push(id);
        localStorage.setItem('card', JSON.stringify(storedCard));
        toast('Successfully donate !!');
    }else{
        storedCard;
        toast('Already Donate !!')
    }

}