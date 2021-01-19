const initState = {
    posts: [
        { id: '1', title: 'Sqruirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque, amet eos distinctio veritatis, eius reprehenderit, aliquam voluptates earum nobis dolorum quia error? Delectus ipsum ratione perferendis nihil accusantium minus.'},
        { id: '2', title: 'Charmander Lain an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque, amet eos distinctio veritatis, eius reprehenderit, aliquam voluptates earum nobis dolorum quia error? Delectus ipsum ratione perferendis nihil accusantium minus.' },
        { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque, amet eos distinctio veritatis, eius reprehenderit, aliquam voluptates earum nobis dolorum quia error? Delectus ipsum ratione perferendis nihil accusantium minus.' }
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === "DELETE_POST") {
        let newPosts = state.posts.filter(post => action.id !== post.id)
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer