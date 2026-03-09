package org.yinyang.backend.happyhourdeal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.util.List;

@RestController
@RequestMapping("api/deals")
public class HappyHourDealController {

    @Autowired
    private final HappyHourDealService happyHourDealService;

    public HappyHourDealController(HappyHourDealService happyHourDealService) {
        this.happyHourDealService = happyHourDealService;
    }

    @PostMapping("/save")
    public ResponseEntity<HappyHourDeal> saveDeal(@RequestBody HappyHourDeal happyHourDeal) {
        HappyHourDeal savedDeal = happyHourDealService.save(happyHourDeal);
        return ResponseEntity.ok(savedDeal);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<HappyHourDeal>> getDeals(@PathVariable Long restaurantId) {
        List<HappyHourDeal> restaurantDeals = happyHourDealService.getAllDealsByRestaurantId(restaurantId);
        return ResponseEntity.ok(restaurantDeals);
    }

    @GetMapping("/active")
    public ResponseEntity<List<HappyHourDeal>> getActiveDeals() {
        List<HappyHourDeal> activeDeals = happyHourDealService.getActiveDeals();
        return ResponseEntity.ok(activeDeals);
    }

    @GetMapping("/day/{day}")
    public ResponseEntity<List<HappyHourDeal>> getDealsByDay(@PathVariable DayOfWeek day) {
        List<HappyHourDeal> happyHourDealByDay = happyHourDealService.getDealsByDay(day);
        return ResponseEntity.ok(happyHourDealByDay);
    }

}
