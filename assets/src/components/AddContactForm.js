import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

export const AddContactForm = () => {
	const [form, setForm] = useState({
		fullName: '',
		email: '',
		phone: '',
		address: '',
	});

	const addContact = (e) => {
		e.preventDefault();
	};

	const formData = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className='bg-white rounded showdow p-6'>
			<form>
				<div className='mb-4'>
					<input
						className='w-full wprcb-input placeholder-gray-500 text-gray-800 font-medium focus:border-blue-600'
						type='text'
						placeholder={__('Full Name', 'wprcb')}
						name='name'
						value={form.name}
						onChange={formData}
					/>
				</div>
				<div className='mb-4'>
					<div className='flex -mx-4'>
						<div className='w-1/2 px-4'>
							<input
								className='w-full wprcb-input placeholder-gray-500 text-gray-800 font-medium focus:border-blue-600'
								type='email'
								placeholder={__('Email Address', 'wprcb')}
								name='email'
								value={form.email}
								onChange={formData}
							/>
						</div>
						<div className='w-1/2 px-4'>
							<input
								className='w-full wprcb-input placeholder-gray-500 text-gray-800 font-medium focus:border-blue-600'
								type='text'
								placeholder={__('Phone', 'wprcb')}
								name='phone'
								value={form.phone}
								onChange={formData}
							/>
						</div>
					</div>
				</div>
				<div className='mb-4'>
					<textarea
						className='w-full wprcb-input placeholder-gray-500 text-gray-800 font-medium focus:border-blue-600'
						type='text'
						placeholder={__('Address', 'wprcb')}
						name='address'
						value={form.address}
						onChange={formData}></textarea>
				</div>
				<button
					type='submit'
					className='bg-blue-700 hover:bg-blue-800 px-6 py-3 text-white font-medium rounded'>
					{__('Add Contact', 'wprcb')}
				</button>
			</form>
		</div>
	);
};
