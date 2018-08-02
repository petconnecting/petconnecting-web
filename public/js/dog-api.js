class DogApi {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://dog.ceo/api/breed'
        })
    }

    getImage(race) {
        return this.api.get(`/${race}/images/random`)
            .then(respose => {
                return Promise.resolve(respose.data.message);
            }).catch(error => {
                console.error(error);
            })
    }
}