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
        async fetchPhotos( { state, commit } ) {

            const { numberOfImages, selectedDate, apiKey } = state;
            const limitPerPage = 25;
            const howManyPages = Math.ceil(numberOfImages / limitPerPage);
            const fetchedPhotos = [];

            commit("setPhotos", []);

            for( let i = 0; i < howManyPages; i++ ) {
                await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}?&page=${i}&api_key=${apiKey}`,
                ).then( response => fetchedPhotos.push( response.data.photos.slice(0, numberOfImages - limitPerPage * i)))
            }

            commit("setPhotos", fetchedPhotos.flat());

        }
    },

})
