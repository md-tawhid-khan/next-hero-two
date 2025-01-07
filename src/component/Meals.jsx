"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('a');
    const [error, setError] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            setMeals(data.meals || []); // Ensure it's always an array
            setError('');
        } catch (error) {
            console.error(error);
            setError('Something went wrong!');
            setMeals([]); // Reset meals to an empty array in case of an error
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // useEffect(() => {
    //     loadData();
    // }, [search]);

    console.log(error);
    console.log(meals);

    return (
        <div>
            <input 
                onChange={handleSearch} 
                type="text" 
                placeholder="Search for a meal..." 
                className="border-2 border-green-500 px-4 py-2"
            />
            <button onClick={loadData} className="px-4 py-2 bg-green-400">
                Search
            </button>

            <div className="grid grid-cols-4 gap-3">
                {Array.isArray(meals) && meals.length > 0 ? (
                    meals.map((meal) => (
                        <div className="border-green-500 p-2 border" key={meal.idMeal}>
                            <Image src={meal.strMealThumb} width={300} height={300} alt={meal.strMealThumb}/>
                            <h1 className="text-lg font-bold">{meal.strMeal}</h1>
                        </div>
                    ))
                ) : (
                    <h1 className="text-red-500">{error || "Data not found"}</h1>
                )}
            </div>
        </div>
    );
};

export default Meals;
