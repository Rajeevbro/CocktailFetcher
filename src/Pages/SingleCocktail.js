import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCocktail = () => {
  console.log("hello");
  const id = useParams();
  const [cocktail, setCocktail] = useState({});

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.id}`;
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseObject = await response.json();

        if (responseObject.drinks) {
          let {
            idDrink: drinkId,
            strDrink: name,
            strCategory: category,
            strAlcoholic: alcoholic,
            strGlass: glass,
            strDrinkThumb: image,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = responseObject.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          setCocktail({
            drinkId,
            name,
            category,
            alcoholic,
            glass,
            instructions,
            ingredients,
            image,
          });
        } else {
          setCocktail({});
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  let {
    drinkId,
    name,
    category,
    alcoholic,
    glass,
    instructions,
    ingredients,
    image,
  } = cocktail;
  console.log(ingredients);
  return (
    <section className="singleCocktail">
      <div className="image-container">
        <img src={image} alt="photo" />
      </div>
      <div className="info-container">
        <h1>
          {name} ({alcoholic})
        </h1>
        <h3>Type: {category}</h3>

        <h3>GlassType: {glass}</h3>
        <h3>
          Instructions:<br></br> {instructions}
        </h3>
      </div>
    </section>
  );
};

export default SingleCocktail;
