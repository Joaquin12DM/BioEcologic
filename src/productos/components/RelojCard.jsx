import React, { useEffect, useState } from "react";
import { empaques } from "../data/empaques.js";
import "./RelojCard.css";

export default function MultiFilters() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(empaques);

    let filters = ["Vajillas", "Bolsa", "Empaque"];

    const handleFilterButtonClick = (selectedCategory) => {
        console.log("Selected Category:", selectedCategory);
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        console.log("Selected Filters:", selectedFilters);
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = empaques.filter((empaques) => empaques.categoria === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...empaques]);
        }
        console.log("Filtered Items:", filteredItems);
    };

    return (
        <div>
            <div className="buttons-container">
                <h1 className="Fil">Filtros :</h1>
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`button ${selectedFilters?.includes(category) ? "active" : ""}`}
                        key={`filters-${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="items-container">
                {filteredItems.map((item, idx) => {
                    const imagePath = `/src/productos/assets/${item.id}.jpg`;
                    console.log("Image Path:", imagePath);
                    return (
                        <div key={`items-${idx}`} className="item">
                            <img src={imagePath} alt={item.modelo} />
                            <div className="textCard">
                                <p className="model">{item.modelo}</p>
                                <p className="precio">{item.precio}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}