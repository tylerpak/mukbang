import AppUser, {Post} from "@/util/types";

const endpoint = "http://localhost:8080"

export const saveUser = async  (email: string) => {
  const res = await fetch(`${endpoint}/api/users/save`, {
      method: "POST",
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({
          email: email,
      }),
  })
    if (res.ok) {
        const data = await res.json()
        console.log(data);
    }
}

export const savePost = async (post: Post) => {
    const res = await fetch(`${endpoint}/api/posts`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            post: post,
        }),
    })
    if (res.ok) {
        const data = await res.json();
    }
}