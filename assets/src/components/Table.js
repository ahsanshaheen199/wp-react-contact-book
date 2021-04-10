export const Table = () => {
	return (
		<div className='flex justify-center mt-8'>
			<div className='w-2/3'>
				<table className='w-full table-auto rounded'>
					<thead className='bg-gray-800 text-left'>
						<tr>
							<th className='text-white px-6 py-4'>ID</th>
							<th className='text-white px-6 py-4'>Name</th>
							<th className='text-white px-6 py-4'>Email</th>
							<th className='text-white px-6 py-4'>Phone</th>
							<th className='text-white px-6 py-4'>Address</th>
							<th className='text-white px-6 py-4'>Actions</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 bg-white'>
						<tr>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								<button className='bg-blue-700 hover:bg-blue-800 px-6 py-3 text-white font-medium rounded mr-3'>
									View
								</button>
								<button className='bg-red-700 hover:bg-red-800 px-6 py-3 text-white font-medium rounded'>
									Delete
								</button>
							</td>
						</tr>

						<tr>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								<button className='bg-blue-700 hover:bg-blue-800 px-6 py-3 text-white font-medium rounded mr-3'>
									View
								</button>
								<button className='bg-red-700 hover:bg-red-800 px-6 py-3 text-white font-medium rounded'>
									Delete
								</button>
							</td>
						</tr>

						<tr>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								Name
							</td>
							<td className='px-6 py-4 whitespace-nowrap w-2/12'>
								<button className='bg-blue-700 hover:bg-blue-800 px-6 py-3 text-white font-medium rounded mr-3'>
									View
								</button>
								<button className='bg-red-700 hover:bg-red-800 px-6 py-3 text-white font-medium rounded'>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
