import React, { useContext, useEffect, useState } from "react";

export const GlobalProvider = React.createContext();

export const useAppContext = () => useContext(GlobalProvider);

const DataRackContext = ({ children }) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("apple");
  const [cockTailData, setCocktailData] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const updatedUrl = `${url}${searchTerm}`;

    setIsLoading(true);

    const fetchData = async (updatedUrl) => {
      setIsLoading(true);
      try {
        console.log("trying");
        const response = await fetch(updatedUrl);

        const data = await response.json();

        const { drinks } = data;

        if (drinks) {
          const newCocktails = drinks.map((data) => {
            let {
              idDrink,
              strAlcoholic,
              strGlass,
              strDrinkThumb,
              strDrink,
            } = data;

            return {
              id: idDrink,
              info: strAlcoholic,
              glassType: strGlass,
              img: strDrinkThumb,
              name: strDrink,
            };
          });
          setCocktailData(newCocktails);
        } else {
          setCocktailData([]);
        }

        setIsLoading(false);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(updatedUrl);
    console.log("tried");
  }, [searchTerm]);

  return (
    <GlobalProvider.Provider
      value={{
        cockTailData,
        searchTerm,
        setSearchTerm,
        isLoading,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalProvider.Provider>
  );
};

export default DataRackContext;
