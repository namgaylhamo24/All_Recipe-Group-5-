import { useState } from "react";

// I built this RecipeCard component to display recipes with interactivity,
// including image, title, description, buttons, and a star rating system.

const RecipeCard = ({ title, description, imageUrl, onClick, onLike, isLiked }) => {
  // I use useState to keep track of the rating selected by the user (from 0 to 5)
  const [rating, setRating] = useState(0);

  // This function updates the rating when the user clicks on a star
  const handleStarClick = (value) => {
    setRating(value); // I set the clicked star value as the current rating
  };

  // I created this function to render 5 stars.
  // I highlight the stars in yellow up to the selected rating.
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer text-2xl ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
          onClick={() => handleStarClick(i)} // When I click a star, it sets the rating
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // I calculate the percentage based on how many stars are selected (out of 5)
  const ratingPercentage = `${rating * 20}%`;

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      {/* I use an image for the recipe. If none is provided, a placeholder is shown */}
      <img
        src={imageUrl || "https://via.placeholder.com/300"}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* This is the recipe title */}
      <h3 className="font-bold text-xl mt-4">{title}</h3>

      {/* Here, I render the interactive stars and display the percentage next to them */}
      <div className="flex items-center mt-2">
        {renderStars()}
        <span className="ml-2 text-sm text-gray-600">{ratingPercentage}</span>
      </div>

      {/* I show the recipe description here */}
      <p className="text-gray-600 mt-2">{description}</p>

      {/* I added two buttons: one to view the recipe and another to like it */}
      <div className="mt-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => onClick(title)} // This calls a function passed down when clicked
        >
          View Recipe
        </button>
        <button
          className={`px-4 py-2 ml-2 ${isLiked ? "bg-red-500" : "bg-gray-500"} text-white rounded-md hover:bg-${isLiked ? "red-600" : "gray-600"}`}
          onClick={() => onLike(title)} // This toggles the like status
        >
          {isLiked ? "Liked" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
