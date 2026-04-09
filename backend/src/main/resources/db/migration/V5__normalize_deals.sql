ALTER TABLE happy_hour_deal
    DROP CONSTRAINT fk_happyhourdeal_restaurant;

ALTER TABLE happy_hour_entity
    ADD end_time time WITHOUT TIME ZONE;

ALTER TABLE happy_hour_entity
    ADD restaurant_id BIGINT;

ALTER TABLE happy_hour_entity
    ADD start_time time WITHOUT TIME ZONE;

ALTER TABLE happy_hour_entity
    ADD CONSTRAINT FK_HAPPYHOURENTITY_ON_RESTAURANT FOREIGN KEY (restaurant_id) REFERENCES restaurant (id);

ALTER TABLE happy_hour_deal
    DROP COLUMN day_of_week;

ALTER TABLE happy_hour_deal
    DROP COLUMN end_time;

ALTER TABLE happy_hour_deal
    DROP COLUMN restaurant_id;

ALTER TABLE happy_hour_deal
    DROP COLUMN start_time;