package org.yinyang.backend.restuarant;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Restaurant findAllByCuisine(String cuisine);

}
