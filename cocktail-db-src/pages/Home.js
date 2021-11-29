import { useContext, useEffect, useState } from 'react';
import { recipesContext } from '../context/recipesContext';
import Spinner from '../components/Spinner/Spinner';
import Alert from '../components/Alert/Alert';
import DrinksList from '../components/DrinksList/DrinksList';
import Pagination from '../components/Pagination/Pagination';

export default function Home() {
	const { data, isLoading, error } = useContext(recipesContext);

	if (error) {
		return <Alert>{error.toString()}, please reload the page!</Alert>;
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<main>
			<h1 className='heading heading-2 text-center anima-appear-right'>
				Cocktails
			</h1>

			{Object.keys(data) && data.drinks?.length > 0 ? (
				<DrinksList data={data} />
			) : (
				<p className='heading-4 text-center anima-appear-top'>
					No cocktails matched your search criteria
				</p>
			)}

			{data.drinks?.length > 0 && <Pagination />}
		</main>
	);
}
