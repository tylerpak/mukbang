package org.yinyang.backend.happyhour;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.yinyang.backend.dayofweek.DayOfWeekEntity;
import org.yinyang.backend.happyhourdeal.HappyHourDeal;
import org.yinyang.backend.restuarant.Restaurant;

import java.time.LocalTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class HappyHourEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToMany
    private List<DayOfWeekEntity> daysOfTheWeek;

    @ManyToMany
    private List<HappyHourDeal> deals;

    private LocalTime startTime;

    private LocalTime endTime;

    @ManyToOne
    private Restaurant restaurant;


}
