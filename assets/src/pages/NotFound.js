import { __ } from '@wordpress/i18n';

export const NotFound = () => {
	return (
		<div className='h-screen flex items-center justify-center'>
			<h2 className='text-4xl font-medium'>
				{__('404! Page Not Found', 'wprcb')}
			</h2>
		</div>
	);
};
