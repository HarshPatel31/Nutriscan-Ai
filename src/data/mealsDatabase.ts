
export interface Meal {
  id: string;
  name: string;
  cuisine: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  prepTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  description: string;
  image: string;
}

export const mealsDatabase: Meal[] = [
  // American
  { id: '1', name: 'Pancakes with Maple Syrup', cuisine: 'American', category: 'breakfast', calories: 520, protein: 12, carbs: 68, fat: 22, prepTime: 20, difficulty: 'Medium', ingredients: ['Flour', 'Eggs', 'Milk', 'Maple Syrup'], description: 'Fluffy pancakes with sweet maple syrup', image: '🥞' },
  { id: '2', name: 'Cheeseburger', cuisine: 'American', category: 'lunch', calories: 650, protein: 35, carbs: 45, fat: 38, prepTime: 15, difficulty: 'Easy', ingredients: ['Ground Beef', 'Cheese', 'Burger Bun', 'Lettuce'], description: 'Classic American cheeseburger', image: '🍔' },
  { id: '3', name: 'BBQ Ribs', cuisine: 'American', category: 'dinner', calories: 750, protein: 55, carbs: 25, fat: 48, prepTime: 180, difficulty: 'Hard', ingredients: ['Pork Ribs', 'BBQ Sauce', 'Spices'], description: 'Smoky barbecue ribs with tangy sauce', image: '🍖' },
  
  // Italian
  { id: '4', name: 'Spaghetti Carbonara', cuisine: 'Italian', category: 'dinner', calories: 680, protein: 28, carbs: 72, fat: 32, prepTime: 25, difficulty: 'Medium', ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan'], description: 'Creamy pasta with eggs and pancetta', image: '🍝' },
  { id: '5', name: 'Margherita Pizza', cuisine: 'Italian', category: 'lunch', calories: 580, protein: 22, carbs: 65, fat: 26, prepTime: 30, difficulty: 'Medium', ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Basil'], description: 'Classic pizza with tomato and mozzarella', image: '🍕' },
  { id: '6', name: 'Tiramisu', cuisine: 'Italian', category: 'dessert', calories: 450, protein: 8, carbs: 42, fat: 28, prepTime: 240, difficulty: 'Hard', ingredients: ['Mascarpone', 'Coffee', 'Ladyfingers', 'Cocoa'], description: 'Coffee-flavored dessert with mascarpone', image: '🍰' },
  
  // Japanese
  { id: '7', name: 'Sushi Roll', cuisine: 'Japanese', category: 'lunch', calories: 320, protein: 18, carbs: 45, fat: 8, prepTime: 30, difficulty: 'Hard', ingredients: ['Sushi Rice', 'Nori', 'Fresh Fish', 'Cucumber'], description: 'Fresh sushi with fish and vegetables', image: '🍣' },
  { id: '8', name: 'Ramen', cuisine: 'Japanese', category: 'dinner', calories: 480, protein: 25, carbs: 58, fat: 18, prepTime: 45, difficulty: 'Medium', ingredients: ['Ramen Noodles', 'Broth', 'Egg', 'Pork'], description: 'Rich noodle soup with toppings', image: '🍜' },
  { id: '9', name: 'Miso Soup', cuisine: 'Japanese', category: 'snack', calories: 85, protein: 6, carbs: 8, fat: 3, prepTime: 10, difficulty: 'Easy', ingredients: ['Miso Paste', 'Tofu', 'Seaweed', 'Green Onions'], description: 'Traditional soybean paste soup', image: '🍲' },
  
  // Chinese
  { id: '10', name: 'Kung Pao Chicken', cuisine: 'Chinese', category: 'dinner', calories: 550, protein: 38, carbs: 28, fat: 32, prepTime: 25, difficulty: 'Medium', ingredients: ['Chicken', 'Peanuts', 'Chili Peppers', 'Soy Sauce'], description: 'Spicy stir-fried chicken with peanuts', image: '🥘' },
  { id: '11', name: 'Fried Rice', cuisine: 'Chinese', category: 'lunch', calories: 420, protein: 15, carbs: 68, fat: 12, prepTime: 15, difficulty: 'Easy', ingredients: ['Rice', 'Eggs', 'Vegetables', 'Soy Sauce'], description: 'Stir-fried rice with vegetables and egg', image: '🍚' },
  { id: '12', name: 'Dim Sum', cuisine: 'Chinese', category: 'snack', calories: 280, protein: 12, carbs: 32, fat: 12, prepTime: 60, difficulty: 'Hard', ingredients: ['Dumpling Wrappers', 'Pork', 'Shrimp', 'Vegetables'], description: 'Steamed dumplings with various fillings', image: '🥟' },
  
  // Indian
  { id: '13', name: 'Chicken Curry', cuisine: 'Indian', category: 'dinner', calories: 480, protein: 35, carbs: 18, fat: 28, prepTime: 45, difficulty: 'Medium', ingredients: ['Chicken', 'Curry Spices', 'Coconut Milk', 'Onions'], description: 'Spicy chicken in aromatic curry sauce', image: '🍛' },
  { id: '14', name: 'Samosa', cuisine: 'Indian', category: 'snack', calories: 220, protein: 6, carbs: 28, fat: 10, prepTime: 40, difficulty: 'Medium', ingredients: ['Pastry', 'Potatoes', 'Peas', 'Spices'], description: 'Crispy fried pastry with spiced filling', image: '🥟' },
  { id: '15', name: 'Masala Chai', cuisine: 'Indian', category: 'breakfast', calories: 120, protein: 4, carbs: 18, fat: 4, prepTime: 10, difficulty: 'Easy', ingredients: ['Tea', 'Milk', 'Spices', 'Sugar'], description: 'Spiced tea with milk and aromatic spices', image: '☕' },
  
  // Mexican
  { id: '16', name: 'Tacos', cuisine: 'Mexican', category: 'lunch', calories: 380, protein: 22, carbs: 35, fat: 18, prepTime: 20, difficulty: 'Easy', ingredients: ['Corn Tortillas', 'Ground Beef', 'Cheese', 'Salsa'], description: 'Soft tacos with seasoned meat and toppings', image: '🌮' },
  { id: '17', name: 'Guacamole', cuisine: 'Mexican', category: 'snack', calories: 160, protein: 2, carbs: 8, fat: 15, prepTime: 10, difficulty: 'Easy', ingredients: ['Avocados', 'Lime', 'Onions', 'Cilantro'], description: 'Fresh avocado dip with lime and herbs', image: '🥑' },
  { id: '18', name: 'Enchiladas', cuisine: 'Mexican', category: 'dinner', calories: 520, protein: 28, carbs: 48, fat: 25, prepTime: 35, difficulty: 'Medium', ingredients: ['Tortillas', 'Chicken', 'Cheese', 'Enchilada Sauce'], description: 'Rolled tortillas with filling and sauce', image: '🌯' },
  
  // French
  { id: '19', name: 'Croissant', cuisine: 'French', category: 'breakfast', calories: 280, protein: 6, carbs: 32, fat: 15, prepTime: 180, difficulty: 'Hard', ingredients: ['Flour', 'Butter', 'Yeast', 'Milk'], description: 'Buttery, flaky pastry', image: '🥐' },
  { id: '20', name: 'Coq au Vin', cuisine: 'French', category: 'dinner', calories: 620, protein: 45, carbs: 12, fat: 38, prepTime: 90, difficulty: 'Hard', ingredients: ['Chicken', 'Red Wine', 'Mushrooms', 'Herbs'], description: 'Chicken braised in red wine', image: '🍷' },
  { id: '21', name: 'French Onion Soup', cuisine: 'French', category: 'lunch', calories: 320, protein: 15, carbs: 25, fat: 18, prepTime: 60, difficulty: 'Medium', ingredients: ['Onions', 'Beef Broth', 'Cheese', 'Bread'], description: 'Rich onion soup with melted cheese', image: '🍲' },
  
  // Thai
  { id: '22', name: 'Pad Thai', cuisine: 'Thai', category: 'dinner', calories: 450, protein: 20, carbs: 55, fat: 18, prepTime: 25, difficulty: 'Medium', ingredients: ['Rice Noodles', 'Shrimp', 'Bean Sprouts', 'Tamarind'], description: 'Stir-fried noodles with sweet and sour sauce', image: '🍜' },
  { id: '23', name: 'Tom Yum Soup', cuisine: 'Thai', category: 'lunch', calories: 180, protein: 12, carbs: 8, fat: 8, prepTime: 20, difficulty: 'Medium', ingredients: ['Lemongrass', 'Shrimp', 'Chili', 'Lime Leaves'], description: 'Spicy and sour soup with herbs', image: '🍲' },
  { id: '24', name: 'Mango Sticky Rice', cuisine: 'Thai', category: 'dessert', calories: 380, protein: 6, carbs: 78, fat: 8, prepTime: 60, difficulty: 'Medium', ingredients: ['Sticky Rice', 'Mango', 'Coconut Milk', 'Sugar'], description: 'Sweet rice with fresh mango', image: '🥭' },
  
  // Mediterranean
  { id: '25', name: 'Greek Salad', cuisine: 'Greek', category: 'lunch', calories: 280, protein: 8, carbs: 12, fat: 22, prepTime: 15, difficulty: 'Easy', ingredients: ['Tomatoes', 'Feta Cheese', 'Olives', 'Olive Oil'], description: 'Fresh salad with feta and olives', image: '🥗' },
  { id: '26', name: 'Hummus', cuisine: 'Mediterranean', category: 'snack', calories: 140, protein: 6, carbs: 16, fat: 6, prepTime: 10, difficulty: 'Easy', ingredients: ['Chickpeas', 'Tahini', 'Lemon', 'Garlic'], description: 'Creamy chickpea dip', image: '🫘' },
  { id: '27', name: 'Falafel', cuisine: 'Mediterranean', category: 'lunch', calories: 350, protein: 18, carbs: 32, fat: 18, prepTime: 30, difficulty: 'Medium', ingredients: ['Chickpeas', 'Herbs', 'Spices', 'Onions'], description: 'Fried chickpea balls with herbs', image: '🧆' },
  
  // Korean
  { id: '28', name: 'Kimchi', cuisine: 'Korean', category: 'snack', calories: 25, protein: 2, carbs: 4, fat: 0, prepTime: 1440, difficulty: 'Medium', ingredients: ['Cabbage', 'Chili Paste', 'Garlic', 'Ginger'], description: 'Fermented spicy cabbage', image: '🥬' },
  { id: '29', name: 'Bulgogi', cuisine: 'Korean', category: 'dinner', calories: 480, protein: 38, carbs: 15, fat: 28, prepTime: 30, difficulty: 'Medium', ingredients: ['Beef', 'Soy Sauce', 'Pear', 'Sesame Oil'], description: 'Marinated grilled beef', image: '🥩' },
  { id: '30', name: 'Bibimbap', cuisine: 'Korean', category: 'lunch', calories: 420, protein: 22, carbs: 55, fat: 12, prepTime: 35, difficulty: 'Medium', ingredients: ['Rice', 'Vegetables', 'Beef', 'Egg'], description: 'Mixed rice bowl with vegetables', image: '🍚' },
  
  // British
  { id: '31', name: 'Fish and Chips', cuisine: 'British', category: 'dinner', calories: 680, protein: 32, carbs: 65, fat: 35, prepTime: 25, difficulty: 'Medium', ingredients: ['Fish', 'Potatoes', 'Batter', 'Oil'], description: 'Battered fish with fried potatoes', image: '🍟' },
  { id: '32', name: 'Full English Breakfast', cuisine: 'British', category: 'breakfast', calories: 850, protein: 45, carbs: 48, fat: 55, prepTime: 30, difficulty: 'Medium', ingredients: ['Eggs', 'Bacon', 'Sausages', 'Beans'], description: 'Traditional hearty breakfast', image: '🍳' },
  { id: '33', name: 'Shepherd\'s Pie', cuisine: 'British', category: 'dinner', calories: 520, protein: 28, carbs: 42, fat: 28, prepTime: 60, difficulty: 'Medium', ingredients: ['Ground Lamb', 'Potatoes', 'Vegetables', 'Gravy'], description: 'Meat and potato casserole', image: '🥧' },
  
  // Spanish
  { id: '34', name: 'Paella', cuisine: 'Spanish', category: 'dinner', calories: 580, protein: 32, carbs: 68, fat: 18, prepTime: 45, difficulty: 'Hard', ingredients: ['Rice', 'Seafood', 'Saffron', 'Vegetables'], description: 'Saffron rice with seafood', image: '🥘' },
  { id: '35', name: 'Tapas', cuisine: 'Spanish', category: 'snack', calories: 250, protein: 12, carbs: 18, fat: 15, prepTime: 20, difficulty: 'Easy', ingredients: ['Various', 'Small', 'Portions', 'Appetizers'], description: 'Small plates of various appetizers', image: '🍤' },
  { id: '36', name: 'Gazpacho', cuisine: 'Spanish', category: 'lunch', calories: 120, protein: 3, carbs: 18, fat: 4, prepTime: 15, difficulty: 'Easy', ingredients: ['Tomatoes', 'Cucumber', 'Peppers', 'Olive Oil'], description: 'Cold vegetable soup', image: '🍅' },
  
  // German
  { id: '37', name: 'Bratwurst', cuisine: 'German', category: 'lunch', calories: 450, protein: 25, carbs: 8, fat: 35, prepTime: 15, difficulty: 'Easy', ingredients: ['Pork Sausage', 'Mustard', 'Sauerkraut', 'Bread'], description: 'Grilled German sausage', image: '🌭' },
  { id: '38', name: 'Schnitzel', cuisine: 'German', category: 'dinner', calories: 620, protein: 42, carbs: 28, fat: 38, prepTime: 25, difficulty: 'Medium', ingredients: ['Veal', 'Breadcrumbs', 'Lemon', 'Butter'], description: 'Breaded and fried cutlet', image: '🍖' },
  { id: '39', name: 'Pretzel', cuisine: 'German', category: 'snack', calories: 280, protein: 8, carbs: 58, fat: 2, prepTime: 120, difficulty: 'Hard', ingredients: ['Flour', 'Yeast', 'Salt', 'Baking Soda'], description: 'Twisted bread with coarse salt', image: '🥨' },
  
  // Russian
  { id: '40', name: 'Borscht', cuisine: 'Russian', category: 'lunch', calories: 180, protein: 8, carbs: 22, fat: 6, prepTime: 90, difficulty: 'Medium', ingredients: ['Beets', 'Cabbage', 'Beef', 'Sour Cream'], description: 'Beet soup with vegetables', image: '🍲' },
  { id: '41', name: 'Beef Stroganoff', cuisine: 'Russian', category: 'dinner', calories: 520, protein: 35, carbs: 28, fat: 28, prepTime: 40, difficulty: 'Medium', ingredients: ['Beef', 'Mushrooms', 'Sour Cream', 'Noodles'], description: 'Creamy beef with mushrooms', image: '🥩' },
  { id: '42', name: 'Blini', cuisine: 'Russian', category: 'breakfast', calories: 220, protein: 8, carbs: 32, fat: 8, prepTime: 20, difficulty: 'Medium', ingredients: ['Flour', 'Eggs', 'Milk', 'Caviar'], description: 'Thin pancakes with toppings', image: '🥞' },
  
  // Vietnamese
  { id: '43', name: 'Pho', cuisine: 'Vietnamese', category: 'lunch', calories: 380, protein: 25, carbs: 45, fat: 8, prepTime: 180, difficulty: 'Hard', ingredients: ['Rice Noodles', 'Beef Broth', 'Herbs', 'Beef'], description: 'Aromatic noodle soup with herbs', image: '🍜' },
  { id: '44', name: 'Banh Mi', cuisine: 'Vietnamese', category: 'lunch', calories: 420, protein: 22, carbs: 48, fat: 18, prepTime: 15, difficulty: 'Easy', ingredients: ['Baguette', 'Pork', 'Pickled Vegetables', 'Herbs'], description: 'Vietnamese sandwich with pickled vegetables', image: '🥖' },
  { id: '45', name: 'Spring Rolls', cuisine: 'Vietnamese', category: 'snack', calories: 150, protein: 8, carbs: 22, fat: 4, prepTime: 20, difficulty: 'Medium', ingredients: ['Rice Paper', 'Shrimp', 'Vegetables', 'Herbs'], description: 'Fresh rolls with shrimp and herbs', image: '🌯' },
  
  // Lebanese
  { id: '46', name: 'Tabbouleh', cuisine: 'Lebanese', category: 'lunch', calories: 180, protein: 6, carbs: 25, fat: 8, prepTime: 20, difficulty: 'Easy', ingredients: ['Parsley', 'Tomatoes', 'Bulgur', 'Lemon'], description: 'Fresh parsley salad with bulgur', image: '🥗' },
  { id: '47', name: 'Kebab', cuisine: 'Lebanese', category: 'dinner', calories: 480, protein: 38, carbs: 12, fat: 32, prepTime: 25, difficulty: 'Medium', ingredients: ['Lamb', 'Spices', 'Onions', 'Yogurt'], description: 'Grilled spiced meat skewers', image: '🍢' },
  { id: '48', name: 'Baklava', cuisine: 'Lebanese', category: 'dessert', calories: 320, protein: 6, carbs: 35, fat: 18, prepTime: 120, difficulty: 'Hard', ingredients: ['Phyllo Pastry', 'Nuts', 'Honey', 'Butter'], description: 'Sweet layered pastry with nuts', image: '🍯' },
  
  // Brazilian
  { id: '49', name: 'Feijoada', cuisine: 'Brazilian', category: 'dinner', calories: 680, protein: 45, carbs: 58, fat: 28, prepTime: 240, difficulty: 'Medium', ingredients: ['Black Beans', 'Pork', 'Rice', 'Orange'], description: 'Black bean stew with pork', image: '🫘' },
  { id: '50', name: 'Açaí Bowl', cuisine: 'Brazilian', category: 'breakfast', calories: 320, protein: 8, carbs: 55, fat: 12, prepTime: 10, difficulty: 'Easy', ingredients: ['Açaí', 'Granola', 'Banana', 'Honey'], description: 'Superfruit bowl with toppings', image: '🫐' },
];

export const cuisineTypes = [
  'All', 'American', 'Italian', 'Japanese', 'Chinese', 'Indian', 'Mexican', 
  'French', 'Thai', 'Greek', 'Mediterranean', 'Korean', 'British', 'Spanish', 
  'German', 'Russian', 'Vietnamese', 'Lebanese', 'Brazilian'
];

export const mealCategories = ['All', 'breakfast', 'lunch', 'dinner', 'snack', 'dessert'];
