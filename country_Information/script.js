async function fetchAndDisplayCountryData() {
    const countryInfoContainer = document.querySelector('.country-info');
    try {
      const response = await fetch('https://restcountries.com/v2/all');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      const randomCountry = data[Math.floor(Math.random() * data.length)];
  
      const countryInfoHTML = `
        <p>Country: ${randomCountry.name}</p>
        <p>Capital: ${randomCountry.capital || 'N/A'}</p>
        <p>Population: ${randomCountry.population || 'N/A'}</p>
        <p>Region: ${randomCountry.region || 'N/A'}</p>
        <p>Subregion: ${randomCountry.subregion || 'N/A'}</p>
        <p>Language: ${randomCountry.languages.map(lang => lang.name).join(', ') || 'N/A'}</p>
        <p>Currency: ${randomCountry.currencies.map(currency => `${currency.name} (${currency.code})`).join(', ') || 'N/A'}</p>
        <img src="${randomCountry.flag}" alt="Flag" style="max-width: 100px; max-height: 100px;">
      `;
  
      countryInfoContainer.innerHTML = countryInfoHTML;
    } catch (error) {
      console.error('Error fetching country data:', error);
      countryInfoContainer.innerHTML = '<p>Failed to fetch country data. Please try again later.</p>';
    }
  }
  
  function handleGetCountryInfoButtonClick() {
    fetchAndDisplayCountryData();
  }
  
  window.addEventListener('load', fetchAndDisplayCountryData);
  
  const getCountryInfoButton = document.getElementById('get-country-info-btn');
  getCountryInfoButton.addEventListener('click', handleGetCountryInfoButtonClick);
  