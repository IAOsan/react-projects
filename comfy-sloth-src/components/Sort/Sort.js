import { useFilterContext } from '../../context/FilterContext';
import { OptionIcon, ListIcon } from '../../icons';

export default function Sort() {
	const {
		gridView,
		activeGridView,
		disableGridView,
		filteredProductsLength,
		updateSort,
	} = useFilterContext();
	const btnListViewClassname = `btn btn--view ${!gridView && 'active'}`;
	const btnGridViewClassname = `btn btn--view mr-xs ${gridView && 'active'}`;

	function handleChange({ target }) {
		updateSort(target.value);
	}

	return (
		<div className='d-flex d-flex-jc-sb d-flex-ai-c font-sm'>
			<div>
				<button
					onClick={activeGridView}
					className={btnGridViewClassname}
					type='button'
				>
					<OptionIcon className='icon icon--sm' />
				</button>
				<button
					onClick={disableGridView}
					className={btnListViewClassname}
					type='button'
				>
					<ListIcon className='icon icon--sm' />
				</button>
			</div>
			<p className='text-muted mr-xs ml-xs'>
				{filteredProductsLength} products found
			</p>
			<div className='sort__separator'></div>
			<form className='ml-xs'>
				<label
					htmlFor='inputSort'
					className='d-inline-block mr-xs'
					defaultValue='name'
				>
					Sort By
				</label>
				<select
					onChange={handleChange}
					name='sort'
					className='form__control'
					id='inputSort'
					defaultValue='name'
				>
					<option value='priceReverse'>Price (Lowest)</option>
					<option value='price'>Price (Highest)</option>
					<option value='name'>Name (A - Z)</option>
					<option value='nameReverse'>Name (Z - A)</option>
				</select>
			</form>
		</div>
	);
}
