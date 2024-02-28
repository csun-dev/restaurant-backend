-- migrate:up
CREATE TABLE `category` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(255),
  `created_at` timestamp,
  `updated_ap` timestamp
);

ALTER TABLE `menus` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

INSERT INTO `category` (`type`, `created_at`, `updated_ap`) 
VALUES 
  ('vegan', NOW(), NOW()),
  ('non_vegan', NOW(), NOW());


-- migrate:down

