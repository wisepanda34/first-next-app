import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000)
	}, [])

	return (
		<div className="not-found">
			<h1>Oh,... problem!!!</h1>
			<h2>Its not such page here...</h2>
			<p>Go to <Link href="/">main page</Link> in 3 seconds...</p>
		</div>
	);
}

export default NotFoundPage; 