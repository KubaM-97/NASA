import { createStore } from 'vuex'

export default createStore({
    state: {
        numberOfImages: 10,
    },
    getters: {
        
    },
    mutations: {
        setNumberOfImages(state, numberOfImages) {
            state.numberOfImages = numberOfImages
        },
    },
    actions: {
        
    },
})
