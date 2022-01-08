import { createStore } from 'vuex'

export default createStore({
    state: {
        numberOfImages: 10,
        selectedDate: null,
    },
    getters: {
        
    },
    mutations: {
        setNumberOfImages(state, numberOfImages) {
            state.numberOfImages = numberOfImages
        },
        setSelectedDate(state, date) {
            state.selectedDate = date
        }
    },
    actions: {
        fetchPhotos( { state } ) {
            console.log(state.numberOfImages, state.selectedDate);
        }
    },
})
