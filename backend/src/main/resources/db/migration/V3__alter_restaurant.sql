ALTER TABLE restaurant
    ADD cuisine VARCHAR(255);

ALTER TABLE restaurant
    ADD email VARCHAR(255);

ALTER TABLE restaurant
    ADD number VARCHAR(255);

ALTER TABLE restaurant
    ADD website VARCHAR(255);

ALTER TABLE happy_hour_deal
    ALTER COLUMN day_of_week TYPE VARCHAR(255) USING (day_of_week::VARCHAR(255));

ALTER TABLE happy_hour_deal
    ALTER COLUMN day_of_week DROP NOT NULL;

ALTER TABLE happy_hour_deal
    ALTER COLUMN deal_type TYPE VARCHAR(255) USING (deal_type::VARCHAR(255));

ALTER TABLE happy_hour_deal
    ALTER COLUMN deal_type DROP NOT NULL;

ALTER TABLE happy_hour_deal
    ALTER COLUMN end_time DROP NOT NULL;

ALTER TABLE happy_hour_deal
    ALTER COLUMN restaurant_id DROP NOT NULL;

ALTER TABLE happy_hour_deal
    ALTER COLUMN start_time DROP NOT NULL;