const loadCountriec=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>display(data))
}
const display=countryName=>{
    const containerDiv=document.getElementById('countries-container')
    // for(const country of countryName){
    // const CreatDiv=document.createElement('div');}
    countryName.forEach(country => {
    const CreatDiv=document.createElement('div');
    CreatDiv.classList.add('country')
    CreatDiv.innerHTML=`
        <h2>Name: ${country.name.common} </h2>
        <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick="loadcountryDetail('${country.cca2}')">Details</button>
        `
        containerDiv.appendChild(CreatDiv)

    });
}
const loadcountryDetail=(code)=>{
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data=>displayCountryDetail(data[0]))
}
const displayCountryDetail=country=>{
    const CountryDetails=document.getElementById('country-details')
    CountryDetails.innerHTML=`
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

loadCountriec();