// import React from 'react'
// import shoe from "./shoe.json"
// import Card from "./Card"

// const List = () => {

//     const CardList = () =>
//         shoe.map((card, i) => (
//             <Card
//                 key={i}
//                 id={card.id}
//                 name={card.name}
//                 image={card.image}
//                 price={card.price}
//                 gender={card.gender}
//                 text={card.text}
//                 rating={card.rating}


//             />
//         ))

//     return (
//         <div className='grid md:grid-cols-4 m-auto' id='listSection'>
//             <CardList />
//         </div>
//     )
// }

// export default List



import React, { useState } from 'react'
import shoe from "./shoe.json"
import Card from "./Card"
import SearchBar from "./SearchBar";
const List = ({ addToCart }) => {


    const [filteredShoes, setFilteredShoes] = useState(shoe);
    // const [cartItems, setCartItems] = useState([]);
    const handleSearch = (filters) => {
        const filtered = shoe.filter((item) => {
            const nameMatch = item.name.toLowerCase().includes(filters.name.toLowerCase());
            return nameMatch
        });

        setFilteredShoes(filtered);
    };

    // const addToCart = (id) => {
    //     const selectedShoe = shoe.find((item) => item.id === id);
    //     setCartItems([...cartItems, selectedShoe]);
    // };


    // const CardList = () =>
    //     shoe.map((card, i) => (
    //         <Card
    //             key={i}
    //             id={card.id}
    //             name={card.name}
    //             image={card.image}
    //             price={card.price}
    //             gender={card.gender}
    //             text={card.text}
    //             rating={card.rating}


    //         />
    //     ))

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className='grid md:grid-cols-4 m-auto' id='listSection'>
                {filteredShoes.map((card, i) => (
                    <Card
                        key={i}
                        id={card.id}
                        name={card.name}
                        image={card.image}
                        price={card.price}
                        gender={card.gender}
                        text={card.text}
                        rating={card.rating}
                        addToCart={() => addToCart(card.id)}
                    // shoe={shoe}
                    />
                ))}
            </div>

        </div>
    )
}

export default List
