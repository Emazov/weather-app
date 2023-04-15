import React, { useState } from 'react';
import './app.scss';

import Form from './components/Form';
import WeatherData from './components/WeatherData';

function App() {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(false);

	return (
		<div className='App'>
			<div className='weather_container'>
				<Form
					setWeatherData={setWeatherData}
					error={error}
					setError={setError}
				/>
				<WeatherData weatherData={weatherData} error={error} />
			</div>
		</div>
	);
}

export default App;
