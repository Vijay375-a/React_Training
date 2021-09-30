//callbacks

const delay = callback => {
    //bind/register with async api 
    setTimeout(callback, 1000, 'greet')
};
const blockMe = message => console.log(message);

blockMe('start')
delay(res => console.log(res))
blockMe('end');