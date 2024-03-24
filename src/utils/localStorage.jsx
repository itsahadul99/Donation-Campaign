export const getCard = () =>{
    const savedCard = localStorage.getItem('card');
    if(savedCard){
        return JSON.parse(savedCard);
    }
    return [];
}