import React, { useState } from 'react';
import axios from 'axios';

import './form.scss'
import SearchIcon from '@mui/icons-material/Search';


const Form = ({ setWeatherData, error, setError }) => {
	const [cityName, setCityName] = useState('');

	const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

	const searchHandler = (e) => {
		e.preventDefault();

		axios(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
		)
			.then(({ data }) => setWeatherData(data), setError(false))
			.catch((err) => {
				setWeatherData(null);
				setError(err);
			});

		setCityName('');
	};

	return (
		<form className='search_form' onSubmit={searchHandler}>
			<input
				type='text'
				id='search__input'
				className='search__input'
				placeholder='City name'
				autoComplete='off'
				value={cityName}
				onChange={(e) => setCityName(e.target.value)}
			/>
			<button type='submit' className='search__btn'>
				<SearchIcon />
			</button>
		</form>
	);
};

export default Form;
