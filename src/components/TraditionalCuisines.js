import React, { useState } from 'react';
import './TraditionalCuisines.css';

const cuisines = [
    {
        name: "Biryani",
        region: "Hyderabad, Telangana",
        description: "A fragrant rice dish made with spices, rice, and meat or vegetables.",
        image: "images/Biryani.png",
        recipe: "1. Marinate meat with yogurt, spices, and herbs. 2. Cook rice partially. 3. Layer meat and rice, then slow-cook to perfection."
    },
    {
        name: "Masala Dosa",
        region: "Karnataka",
        description: "A crispy rice pancake filled with spiced potato filling.",
        image: "images/Masala-Dosa.png",
        recipe: "1. Ferment rice and lentil batter. 2. Spread batter on a hot pan. 3. Add spiced potato filling. 4. Fold and serve."
    },
    {
        name: "Rogan Josh",
        region: "Kashmir",
        description: "A flavorful lamb curry cooked with aromatic spices.",
        image: "images/Rogan-josh.png",
        recipe: "1. Sear lamb pieces. 2. Simmer in a yogurt and spice mixture until tender."
    },
    {
        name: "Chole Bhature",
        region: "Punjab",
        description: "Spiced chickpea curry served with deep-fried leavened bread.",
        image: "images/chole-bhature.png",
        recipe: "1. Cook chickpeas with onion-tomato gravy and spices. 2. Knead dough, roll into circles, and deep-fry."
    },
    {
        name: "Butter Chicken",
        region: "Delhi",
        description: "A rich and creamy tomato-based curry with tender chicken pieces.",
        image: "images/Butter-chicken.png",
        recipe: "1. Marinate chicken in yogurt and spices. 2. Grill chicken and cook in tomato-cream gravy."
    },
    {
        name: "Dhokla",
        region: "Gujarat",
        description: "A steamed savory cake made from fermented rice and chickpea flour batter.",
        image: "images/Dhokla.png",
        recipe: "1. Prepare batter with rice and chickpea flour. 2. Ferment and steam. 3. Garnish with spices and coriander."
    },
    {
        name: "Idli and Sambar",
        region: "Tamil Nadu",
        description: "Soft steamed rice cakes served with a tangy lentil stew.",
        image: "images/idli-sambar.png",
        recipe: "1. Ferment rice and lentil batter. 2. Steam into idlis. 3. Prepare sambar with lentils and tamarind."
    },
    {
        name: "Ras Malai",
        region: "West Bengal",
        description: "A dessert made with soft cheese dumplings soaked in sweetened, thickened milk.",
        image: "images/ras-malai.png",
        recipe: "1. Boil milk to make cheese. 2. Prepare syrup and dumplings. 3. Soak dumplings in thickened sweet milk."
    }
];

const TraditionalCuisines = () => {
    const [selectedCuisine, setSelectedCuisine] = useState(null);

    const handleLearnRecipe = (cuisine) => {
        setSelectedCuisine(cuisine);
    };

    const closeRecipe = () => {
        setSelectedCuisine(null);
    };

    return (
        <div className="cuisine-container">
            <h1>Traditional Indian Cuisines</h1>
            <div className="cuisine-list">
                {cuisines.map((cuisine, index) => (
                    <div key={index} className="cuisine-card">
                        <img src={cuisine.image} alt={cuisine.name} />
                        <h2>{cuisine.name}</h2>
                        <p>{cuisine.region}</p>
                        <p>{cuisine.description}</p>
                        <button onClick={() => handleLearnRecipe(cuisine)}>Learn Recipe</button>
                    </div>
                ))}
            </div>

            {selectedCuisine && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedCuisine.name} Recipe</h2>
                        <p><strong>Region:</strong> {selectedCuisine.region}</p>
                        <p><strong>Description:</strong> {selectedCuisine.description}</p>
                        <p><strong>Recipe:</strong> {selectedCuisine.recipe}</p>
                        <button onClick={closeRecipe}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TraditionalCuisines;
