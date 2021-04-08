interface RoutesProps {
	index: string
	forum: string
	post: string
	profile: string
}

const ROUTES: RoutesProps = {
	index: '/',
	forum: '/forum',
	post: '/post',
	profile: '/profile/:id',
}

export default ROUTES
