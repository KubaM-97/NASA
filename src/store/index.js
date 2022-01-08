import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        numberOfImages: 10,
        selectedDate: null,
        photos: [],
        apiKey: '5kUQpbi1gtlKlgdnJpKjlQTcjIu6sak1cmnvtSfs'
    },
    getters: {
        
    },
    mutations: {
        setPhotos(state, photos) {
            state.photos = photos
        },
        setNumberOfImages(state, numberOfImages) {
            state.numberOfImages = numberOfImages
        },
        setSelectedDate(state, date) {
            state.selectedDate = date
        }
    },
    actions: {
        fetchPhotos( { state, commit } ) {
            const { selectedDate, apiKey } = state;
            axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${apiKey}`,
            )
            .then(response => {
                commit("setPhotos", response.data.photos)
            })
            
        }
    },
})
