-- migrate:up
CREATE TABLE `likes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `like` boolean,
  `user_id` integer,
  `menu_id` integer,
  `created_at` timestamp,
  `updated_ap` timestamp
);


ALTER TABLE `likes` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `likes` ADD FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`);
-- migrate:down

