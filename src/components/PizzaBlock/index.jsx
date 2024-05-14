import React, { useState } from 'react';

function PizzaBlock({ item }) {
    const { size, dough, image, title, price } = item;

    const [activeSize, setActiveSize] = useState(size[0]);
    const [activeDough, setActiveDough] = useState(dough[0]);

    const handleSizeChange = (selectedSize) => {
        setActiveSize(selectedSize);
    };

    const handleDoughChange = (selectedDough) => {
        setActiveDough(selectedDough);
    };

    return (
        <>
            <div className="pizza-block">
                <h4 className="pizza-block__title">{title}</h4>
                <img
                    className="pizza-block__image"
                    src={`https://react-pizza-v2-psi.vercel.app/assets/img/products/${image}`}
                    alt="Pizza"
                />
                <div className="pizza-block__selector">
                    <ul>
                        {dough.map((d, index) => (
                            <li key={index} className={activeDough === d ? 'active' : ''} onClick={() => handleDoughChange(d)}>
                                {d}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {size.map((s, index) => (
                            <li key={index} className={activeSize === s ? 'active' : ''} onClick={() => handleSizeChange(s)}>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                </div>
            </div>
        </>
    );
}

export default PizzaBlock;
