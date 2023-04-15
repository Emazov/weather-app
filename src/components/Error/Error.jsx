import React from 'react';

const Error = ({error}) => {
	return <div className='error'>{error && error.response?.data?.message}</div>;
};

export default Error;
