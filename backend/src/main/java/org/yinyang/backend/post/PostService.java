package org.yinyang.backend.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private final PostRepository postRepository;

    private PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    };

    public Post save(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById (Long id) {
        return postRepository.findById(id).orElseThrow();
    }
}
