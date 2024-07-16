import React from 'react';
import '../Styles/Featured.css';
import DishCard from '../UIComponents/DishCard';
import Dish1 from '../Assets/dish1.jpg';
import Dish2 from '../Assets/dish2.jpg';
import Dish3 from '../Assets/dish3.jpg';
import Dish4 from '../Assets/dish4.jpg';
import BrowseButton from '../UIComponents/BrowseButton';

const Featured = () => {
    const featuredDish = [
        {
            img: Dish1,
            name:'Plant based avocado protein meal',
            description:'Its a plant Based avocado meal with 2 varieties of greens, which is spinach and ampalaya. With the addition of friend fresh sliced potatoes and chicken peas',
            ingredients:['Sugar', 
                'Salt', 
                'Ampalaya', 
                'Potatoes', 
                'Half of Medium Sized Avocado', 
                'Chicken Peas 1/2 Bag', 
                'Spinach'
            ],
            process:'Wash and chop spinach and ampalaya. Then Peel and slice potatoes and Scoop out and slice avocado. After that, Heat a pan over medium heat add sugar and salt to taste. Saute spinach and ampalaya until tender and Add potatoes and chicken peas, cook until potatoes are golden brown lastly, gently add avocado slices, cook for 1-2 minutes until warmed through.'
        },

        {
            img: Dish2,
            name: 'Soft tofu meal with spinach leaves, brown rice',
            description: 'Enjoy a wholesome and nutritious meal featuring soft tofu complemented by vibrant spinach leaves and hearty brown rice. This dish offers a blend of textures and flavors, perfect for a satisfying and healthy meal option.',
            ingredients: [
                'Soft tofu',
                'Fresh spinach leaves',
                'Brown rice',
                'Soy sauce',
                'Sesame oil',
                'Garlic cloves',
                'Ginger',
                'Green onions',
                'Vegetable broth or water',
                'Salt and pepper to taste'
            ],
            process: 'Rinse brown rice under cold water. Dice garlic cloves, ginger, and green onions. Cut tofu into cubes. Wash spinach leaves thoroughly. Cook brown rice in vegetable broth or water until tender. In a skillet, heat sesame oil, sauté garlic and ginger. Add tofu cubes, cook until browned. Stir in soy sauce, then add spinach leaves, cook until wilted. Serve tofu and spinach mixture over cooked brown rice. Garnish with green onions. Season with salt and pepper.'
        },

        {
            img: Dish3,
            name: 'Bite size cucumber, ampalaya, papaya, and cauliflower',
            description: 'Enjoy a refreshing and nutritious bite-sized salad featuring crunchy cucumber, bitter ampalaya, sweet papaya, and tender cauliflower. This dish offers a delightful mix of flavors and textures, perfect as a light and healthy snack or side dish.',
            ingredients: [
                'Cucumber, cut into bite-sized pieces',
                'Ampalaya (bitter gourd), thinly sliced',
                'Ripe papaya, cubed',
                'Cauliflower florets, blanched',
                'Cherry tomatoes, halved (optional)',
                'Red onion, thinly sliced (optional)',
                'Fresh parsley or cilantro, chopped (for garnish)',
                'Lemon or lime juice, for dressing',
                'Salt and pepper to taste'
            ],
            process: 'Prepare all vegetables by washing and cutting them into bite-sized pieces. Blanch cauliflower florets in boiling water for 2-3 minutes, then drain and rinse with cold water. In a large bowl, combine cucumber, ampalaya, papaya, blanched cauliflower, cherry tomatoes, and red onion (if using). Drizzle with lemon or lime juice. Season with salt and pepper to taste. Garnish with chopped parsley or cilantro. Toss gently to combine. Serve chilled or at room temperature.'
        },
        {
            img: Dish4,
            name: 'Salmon with spinach and tapioca sauce',
            description: 'Indulge in a savory dish featuring tender salmon paired with nutritious spinach and a flavorful tapioca sauce. This recipe combines rich flavors with wholesome ingredients, creating a satisfying meal that is both delicious and nourishing.',
            ingredients: [
                'Salmon fillets',
                'Fresh spinach leaves',
                'Tapioca pearls',
                'Coconut milk',
                'Garlic, minced',
                'Ginger, grated',
                'Red chili flakes (optional, for heat)',
                'Lime juice',
                'Salt and pepper to taste',
                'Fresh cilantro or parsley, chopped (for garnish)'
            ],
            process: 'Prepare tapioca pearls according to package instructions. In a saucepan, heat coconut milk over medium heat. Add minced garlic, grated ginger, and red chili flakes (if using), sauté until fragrant. Add cooked tapioca pearls, stirring constantly. Season with salt and pepper. In a separate pan, sear salmon fillets until cooked through. Serve salmon over a bed of sautéed spinach. Top with tapioca sauce. Garnish with chopped cilantro or parsley and a squeeze of lime juice.'
        },
    ];

  return (
    <section className='featured'>
        <div className='featured__content-wrapper'>
            <div className='featured__header'>
                <h2 className='featured__title'>Our Featured Dishes</h2>
                <p className='featured__subtitle'>Get Ready To Dig In</p>
            </div>
            <div className='featured__body'>
                {featuredDish.map(dishes =>(
                    <DishCard key={dishes.img} image={dishes.img} name={dishes.name} description={dishes.description} ingredients={dishes.ingredients} process={dishes.process}/>
                ))}
            </div>
            <div className='featured__footer'>
                <BrowseButton text='View More'/>
            </div>
        </div>
    </section>
  )
}

export default Featured
