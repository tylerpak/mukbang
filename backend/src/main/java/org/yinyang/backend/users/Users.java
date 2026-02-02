package org.yinyang.backend.users;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.AnyDiscriminatorImplicitValues;
import org.yinyang.backend.post.Post;

import javax.annotation.processing.Generated;
import java.util.List;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    private String username;

    @OneToMany
    private List<Post> createdPosts;

    public Users(String email) {
        this.email = email;
    }

    public Users() {

    }


}
