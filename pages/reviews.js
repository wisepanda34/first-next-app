import React from "react";
import Head from "next/head";

const Reviews = ({ reviews }) => {
	// const [reviews, setReviews] = useState([]);

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/comments');
	// 		const data = await response.json();
	// 		setReviews(data);
	// 	}
	// 	getData();
	// }, []);


	return (
		<>
			<Head>
				<title>Fat burgers | Main</title>
				<meta name="title" content="Fat burgers" />
			</Head>
			<div>
				<h1>Reviews of the clients</h1>
				<div className="reviews">
					{!!reviews.length && reviews.map(res => {
						return (
							<div key={res.id} className='review'>
								{res.id}{' '}
								{`${res.body.slice(0, 70)}...`}
							</div>
						)
					})}
				</div>
			</div>
		</>
	);
}


// getServerSideProps - функция из коробки, по гет запросу данные формируются на стороне сервера и прилитают на сторону клиента в json-формате. Поэтому хуки не используем

export async function getServerSideProps() {
	const response = await fetch('https://jsonplaceholder.typicode.com/comments');
	const data = await response.json();
	return {
		props: {
			reviews: data.slice(0, 20)
		}
	}
}
export default Reviews;