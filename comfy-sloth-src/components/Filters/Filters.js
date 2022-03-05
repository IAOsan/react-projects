import { useFilterContext } from '../../context/FilterContext';
import { formatPrice } from '../../helpers';

export default function Filters() {
	const { filters, updateFilters, products, clearFilters } =
		useFilterContext();
	const categories = getValues(products, 'category');
	const companies = getValues(products, 'company');
	const colors = getValues(products, 'colors', true);
	const textBtnClassname = `btn btn--filter-text d-block font-sm font-weight-regular text-capitalize`;

	function handleChange({ target }) {
		let name = target.name,
			value = target.value;

		if (name === 'price') value = Number(value);

		if (name === 'freeShipping') value = target.checked;

		updateFilters({ name, value });
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function getValues(arr, key, nested) {
		if (!arr || !arr.length === 0) return [];

		if (nested) {
			return [...new Set(products.flatMap((item) => item[key]))];
		}
		return [...new Set(arr.map((item) => item[key]))];
	}

	return (
		<aside className='sidebar'>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					className='form__control form__control--search-product font-sm'
					placeholder='Search'
					name='query'
					value={filters.query}
				/>

				<div className='form__group my-lg'>
					<h4 className='mb-sm'>Category</h4>
					<button
						onClick={handleChange}
						name='category'
						value='all'
						className={`${textBtnClassname} mb-xxs ${
							filters.category === 'all' && 'active'
						}`}
						type='button'
					>
						all
					</button>
					{categories.length > 0 &&
						categories.map((category, idx) => {
							const n = categories.length - 1;
							const btnClassname = `${textBtnClassname} ${
								idx !== n ? 'mb-xxs' : ''
							} ${filters.category === category && 'active'}`;

							return (
								<button
									onClick={handleChange}
									name='category'
									value={category}
									key={idx}
									className={btnClassname}
									type='button'
								>
									{category}
								</button>
							);
						})}
				</div>
				<div className='form__group my-lg'>
					<h4 className='mb-sm'>Company</h4>
					<select
						onChange={handleChange}
						className='form__control font-sm'
						name='company'
						value={filters.company}
					>
						<option value='all'>all</option>
						{companies.length > 0 &&
							companies.map((company, idx) => (
								<option key={idx} value={company}>
									{company}
								</option>
							))}
					</select>
				</div>
				<div className='form__group my-lg'>
					<h4 className='mb-sm'>Colors</h4>
					<div className='d-flex d-flex-ai-c'>
						<button
							onClick={handleChange}
							className={`${textBtnClassname} mr-xxs ${
								filters.colors === 'all' && 'active'
							}`}
							name='colors'
							value='all'
						>
							All
						</button>
						{colors.length > 0 &&
							colors.map((item, idx) => {
								const n = colors.length - 1;
								const btnClassname = `btn btn--filter-color ${
									filters.colors === item && 'active'
								} ${idx === n ? '' : 'mr-xxs'}`;

								return (
									<button
										key={item}
										onClick={handleChange}
										className={btnClassname}
										style={{
											'--bg-color': item,
										}}
										name='colors'
										value={item}
										type='button'
									></button>
								);
							})}
					</div>
				</div>
				<div className='form__group'>
					<h4 className='mb-sm'>Price</h4>
					<label htmlFor='rangePrice' className='font-sm d-block'>
						{formatPrice(filters.price)}
					</label>
					<input
						id='rangePrice'
						onChange={handleChange}
						type='range'
						name='price'
						min={filters.minPrice}
						max={filters.maxPrice}
						value={filters.price}
					/>
				</div>
				<div className='form__group my-lg'>
					<label htmlFor='checkShipping' className='font-sm mr-xs'>
						Free Shipping
					</label>
					<input
						onChange={handleChange}
						className='d-inline-block'
						type='checkbox'
						name='freeShipping'
						id='checkShipping'
						checked={filters.freeShipping}
					/>
				</div>
				<button
					onClick={clearFilters}
					className='btn btn--danger'
					type='button'
				>
					Clear Filters
				</button>
			</form>
		</aside>
	);
}
