class Forecast{
    constructor(){
        this.key =  'gDucmta5kgMR2qouDUclFl94q39Vagj2';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI =  'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails = await getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        return {
            cityDetails: cityDetails,
            weather:weather
        };

    }
    async getCity(city){
        
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];

    }
    async getWeather(id){
        const query =`${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI+query);
        const data = await response.json();
        return data[0];

    }
}






