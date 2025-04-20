// components/RecipeCard.js

// I created this component to display individual recipe cards with a title, image, description, and interactive buttons.

const RecipeCard = ({ title, description, imageUrl, onClick, onLike, isLiked, rating = 0 }) => {
  // This function helps me render 5 stars based on the given rating.
  // If the rating is 3, then the first 3 stars will be yellow, and the rest will be gray.
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      {/* This shows the image of the recipe.
          If no image is provided, I use a placeholder instead. */}
      <img
        src={imageUrl || "https://via.placeholder.com/300"}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Here I show the recipe title */}
      <h3 className="font-bold text-xl mt-4">{title}</h3>

      {/* I render the star rating below the title */}
      <div className="text-yellow-500 text-lg">{renderStars()}</div>

      {/* Then I show the description of the recipe */}
      <p className="text-gray-600 mt-2">{description}</p>

      {/* These are the action buttons: view and like */}
      <div className="mt-3">
        {/* This button lets users view the recipe details.
            It triggers a function I receive through props. */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => onClick(title)}
        >
          View Recipe
        </button>

        {/* This button lets users like the recipe.
            If it's already liked, the button turns red and says "Liked". */}
        <button
          className={`px-4 py-2 ml-2 ${isLiked ? "bg-red-500" : "bg-gray-500"} text-white rounded-md hover:bg-${isLiked ? "red-600" : "gray-600"}`}
          onClick={() => onLike(title)}
        >
          {isLiked ? "Liked" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
