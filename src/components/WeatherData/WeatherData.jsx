import './weatherData.scss';

import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import Error from '../Error/Error';

const WeatherData = ({ weatherData, error }) => {
	const dateConvert = (timeStamp) => {
		const time = new Date(timeStamp * 1000);
		const hour = time.getHours();
		const min = time.getMinutes();
		const mm = time.toLocaleString('en', { month: 'long' });
		const dd = time.getDate();

		// return `${hour}:${min}, ${mm} ${dd}`;
		return `${mm} ${dd}`;
	};

	return (
		<>
			{!error ? (
				<div className='weather__data'>
					{weatherData && (
						<>
							<div className='weather__data__date'>
								{dateConvert(weatherData.dt)}
							</div>
							<div className='weather__data_temp'>
								<img
									src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`}
									alt='weather icon'
								/>
								<div className='weather__data_desc'>
									{weatherData.weather[0]?.description}
								</div>
								<div className='weather__data_temp_wrap'>
									<p className='weather__data_temp_main'>
										{Math.round(weatherData.main?.temp - 273.15)}
										<span>°C</span>
									</p>
									<div className='weather__data_temp_max_min'>
										<p>
											<NorthRoundedIcon />
											{Math.round(weatherData.main?.temp_max - 273.15)}
											<span>°C</span>
										</p>
										<p>
											<SouthRoundedIcon />
											{Math.round(weatherData.main?.temp_min - 273.15)}
											<span>°C</span>
										</p>
									</div>
								</div>

								<div className='weather__data_temp_sec'>
									<p>
										<FilterDramaOutlinedIcon />
										{weatherData.clouds?.all}%
									</p>
									<p>
										<AirRoundedIcon />
										{(weatherData.wind?.speed).toFixed(1)}m/s
									</p>
									<p>
										<WaterDropOutlinedIcon />
										{weatherData.main?.humidity}%
									</p>
								</div>
							</div>
							<div className='weather__data__city_name'>
								<LocationOnOutlinedIcon />
								{weatherData.name}, {weatherData.sys?.country}
							</div>
						</>
					)}
				</div>
			) : (
				<Error error={error} />
			)}
		</>
	);
};

export default WeatherData;
