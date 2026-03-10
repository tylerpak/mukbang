package org.yinyang.backend.happyhourdeal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
public class HappyHourDealService {

    @Autowired
    private HappyHourDealRepository happyHourDealRepository;

    private HappyHourDealService(HappyHourDealRepository happyHourDealRepository) {
        this.happyHourDealRepository = happyHourDealRepository;
    }

    public HappyHourDeal save(HappyHourDeal happyHourDeal) {
        return happyHourDealRepository.save(happyHourDeal);
    }

    public List<HappyHourDeal> getAllDealsByRestaurantId(Long restaurantId) {
        return happyHourDealRepository.getHappyHourDealsByRestaurantId(restaurantId);
    }

    public List<HappyHourDeal> getActiveDeals() {
        DayOfWeek today = LocalDateTime.now().getDayOfWeek();
        LocalTime now = LocalTime.now();
        return happyHourDealRepository.findHappyHourDealsByDayOfWeekAndStartTime(today, now);
    }

    public List<HappyHourDeal> getDealsByDay(DayOfWeek day) {
        return happyHourDealRepository.getHappyHourDealByDayOfWeek(day);
    }
}
