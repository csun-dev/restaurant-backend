-- migrate:up
CREATE TABLE `reveiws` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `review` varchar(255),
  `user_id` integer,
  `menu_id` integer,
  `created_at` timestamp,
  `updated_ap` timestamp
);

ALTER TABLE `reveiws` ADD FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`);

ALTER TABLE `reveiws` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

-- migrate:down

