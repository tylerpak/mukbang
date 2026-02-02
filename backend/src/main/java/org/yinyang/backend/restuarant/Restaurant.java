package org.yinyang.backend.restuarant;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.yinyang.backend.post.Post;

import java.util.List;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
public class Restaurant {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private long id;

    private String name;

    @OneToMany
    @JoinColumn(name = "post_id", nullable = true)
    private List<Post> posts;

    public Restaurant() {

    }
}
