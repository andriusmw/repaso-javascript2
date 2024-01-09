import axios from 'axios'

const apiKey = 'something'
// `https://api.somethingurl`

const giphyApi = axios.create({
    baseURL: 'https://api.somethingurl', // sin / al final
    params: {
        api_key: apiKey
    }
})

// estamos construyendo la url a la que se conecta 
// en el back, el /random es un path en concreto
giphyApi.get('/random')
    .then(resp => {

        const {data} = resp.data
        //guardo la respuesta en data
        const {url} = data.images.original
        //es más fácil de leer y se acceder

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
      
    })