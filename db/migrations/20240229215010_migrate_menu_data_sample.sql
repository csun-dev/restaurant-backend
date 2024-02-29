-- migrate:up
INSERT INTO menus (name, description, price, image_url, category_id) VALUES
('Margherita', 'Classic pizza with tomato sauce and mozzarella', 8.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FMargherita.webp?alt=media&token=fe658083-81dd-441c-a2ee-e4bcf3f5ad57', 2),
('Pepperoni', 'Pepperoni, mozzarella, and tomato sauce', 10.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FPepperoni.webp?alt=media&token=774a2934-f1e1-4805-92ed-cbe58e09d05b', 2),
('Vegan Delight', 'Vegan cheese, tomatoes, olives, and bell peppers', 11.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FVegan%20Delight.webp?alt=media&token=d26e94ee-1ef3-4bb5-b197-b9e1f40475b2', 1),
('BBQ Chicken', 'Chicken, BBQ sauce, onions, and cilantro', 12.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FBBQ%20Chicken.webp?alt=media&token=be415615-ba00-42d4-8ac9-0d55ed6bf5c1', 2),
('Hawaiian', 'Ham, pineapple, and mozzarella', 9.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FHawaiian.webp?alt=media&token=72cda294-5f9f-4f90-9dca-8151a89e8c6e', 2),
('Veggie Supreme', 'Bell peppers, onions, mushrooms, olives, and tomatoes', 10.49, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FVeggie%20Supreme.webp?alt=media&token=e7a90ad2-6433-4fa6-a9a1-64315d60b479', 1),
('Spicy Vegan', 'Vegan cheese, jalapenos, vegan pepperoni, and onions', 11.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FSpicy%20Vegan.webp?alt=media&token=23c44b76-be7d-4658-821e-b3b906748554', 1),
('Meat Lovers', 'Pepperoni, sausage, ham, bacon, and mozzarella', 13.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FMeat%20Lovers.webp?alt=media&token=73c9e41f-588b-48ef-82c3-d747bb835c83', 2),
('Vegan Margherita', 'Vegan cheese, tomatoes, and basil', 9.49, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FVegan%20Margherita.webp?alt=media&token=8132d071-079f-47ac-960a-545484fe3f26', 1),
('Buffalo Chicken', 'Chicken, buffalo sauce, and red onions', 11.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FBuffalo%20Chicken.webp?alt=media&token=ffdb637f-e0c2-40e1-b695-322f10655083', 2),
('Vegan Pesto', 'Vegan cheese, pesto sauce, and cherry tomatoes', 12.49, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FVegan%20Pesto.webp?alt=media&token=3cfd3981-564f-497b-ab87-bde806a488df', 1),
('Sausage and Peppers', 'Italian sausage, bell peppers, and onions', 10.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FSausage%20and%20Peppers.webp?alt=media&token=0c9dd9a6-a29a-47c1-a7fe-85729430f24a', 2),
('Garden Fresh', 'Spinach, bell peppers, onions, mushrooms, and tomatoes', 10.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FGarden%20Fresh.webp?alt=media&token=a99f3b4e-3eeb-4e2e-ab1e-0252256a6123', 1),
('Chicken Alfredo', 'Chicken, Alfredo sauce, and spinach', 12.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FChicken%20Alfredo.webp?alt=media&token=9f2148e5-c0b8-4f7c-8eba-034be50349e6', 2),
('Vegan BBQ', 'Vegan chicken, BBQ sauce, red onions, and cilantro', 12.49, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FVegan%20BBQ.webp?alt=media&token=7f907d63-833f-4b3a-820d-1ebad779b79e', 1),
('Supreme', 'Pepperoni, sausage, bell peppers, onions, mushrooms, and olives', 13.49, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FSupreme.webp?alt=media&token=2d5ce236-8cfa-4cf6-a8c5-fdf68cfef659', 2),
('Vegan Mushroom', 'Vegan cheese, mushrooms, and garlic oil', 11.49, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FVegan%20Mushroom.webp?alt=media&token=76cb6ca9-6b54-4ff8-bb1a-c7c86884920b', 1),
('Four Cheese', 'Mozzarella, parmesan, gorgonzola, and goat cheese', 10.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FFour%20Cheese.webp?alt=media&token=f25ccd02-8503-4564-a7b3-ab98a3464175', 2),
('Vegan Spinach & Artichoke', 'Vegan cheese, spinach, and artichokes', 11.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FVegan%20Spinach.webp?alt=media&token=78566939-7940-4e80-bc82-e26c1a3b9d76', 1),
('Bacon & Egg', 'Bacon, egg, and mozzarella', 10.99, 'https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FBacon%20%26%20Egg.webp?alt=media&token=61149ab2-c18f-4fe0-b91f-fc560a788830', 2);


-- migrate:down

