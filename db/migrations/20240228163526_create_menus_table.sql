-- migrate:up
CREATE TABLE `menus` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `category_id` integer,
  `name` varchar(255),
  `description` varchar(255),
  `price` float,
  `image_url` varchar(255),
  `created_at` timestamp,
  `updated_ap` timestamp
);

-- migrate:down

