// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e) => {
//         const term = e.target.value;
//         setSearchTerm(term);
//         onSearch(term);
//     };

//     return (
//         <div className="mb-4">
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 className="border p-2"
//             />
//         </div>
//     );
// };

// export default SearchBar;

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    // const [priceFilter, setPriceFilter] = useState('');

    const handleSearch = () => {
        onSearch({
            name: searchTerm,
            gender: genderFilter,
            // price: priceFilter,
        });
    };

    return (
        <div className="mb-4 mt-4 flex justify-center items-center">
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 outline-none"
            />


            <button onClick={handleSearch} className='p-2 bg-black text-white m-1'>Apply Filters</button>
        </div>
    );
};

export default SearchBar;

