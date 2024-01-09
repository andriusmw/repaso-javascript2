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
        console.log(resp.data.data)
        const url = resp.data.data.images.original.url
        // eso es accesible desde dentro del scope de la respuesta
        

        const img = document.createElement('img')
        img.src = url // sacar la url del json
        // resp.data.data.images.original.url
        


        document.body.append(img)
        // se mostraría la imagen de fondo
    })