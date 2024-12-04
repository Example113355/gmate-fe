import { useState, useEffect } from "react";


interface Category {
    _id: string;
    category: string;
}

interface Player {
    categories: Category[];
}

const CategoryItem = ({ category }: { category: Category }) => {
    return (
        <div className="user_game_item">
            <h4>{category.category}</h4>
        </div>
    );
};

const PlayerCategory = ({ player }: { player: Player }) => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (player.categories) {
            setCategories(player.categories);
        }
    }, [player]);

    return (
        <div className="game_list">
            {categories && categories.length > 0 ? (
                categories.map((cate) => (
                    <CategoryItem key={cate._id} category={cate} />
                ))
            ) : (
                <p>No category available for this player</p>
            )}
        </div>
    );
};

export default PlayerCategory;
