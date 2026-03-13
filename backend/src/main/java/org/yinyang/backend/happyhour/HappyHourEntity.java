package org.yinyang.backend.happyhour;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HappyHourEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


}
