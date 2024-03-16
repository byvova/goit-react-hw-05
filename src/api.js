const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
    headers: {
        // Замість api_read_access_token вставте свій токен
        Authorization: 'Bearer api_read_access_token'
    }
};

axios.get(url, options)
    .then(response => console.log(response))
    .catch(err => console.error(err));