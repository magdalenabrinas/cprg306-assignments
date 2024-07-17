'use client';

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      const detailedMeals = await Promise.all(fetchedMeals.map(meal => fetchMealDetails(meal.idMeal)));
      setMeals(detailedMeals);
    };

    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  const fetchMealDetails = async (idMeal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const data = await response.json();
    return data.meals[0];
  };

  const extractIngredients = (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="meal-ideas flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      <ul className="meal-list">
        {meals.map(meal => (
          <li key={meal.idMeal} className="meal-item mb-4 p-4 border rounded items-center">
            <h3 className="font-bold">{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto rounded mb-4 items-center" />
            <h4 className="font-bold">Ingredients:</h4>
            <ul className="ingredients-list">
              {extractIngredients(meal).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
