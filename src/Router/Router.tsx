// REACT
import React from 'react'

// ROUTER
import { Switch, Route } from 'react-router-dom'

// PAGINAS
import Index from 'Pages/Index/Index'

// RUTAS
import ROUTES from 'Env/Routes'

// PAGINAS
import Forum from 'Pages/Forum/Forum'

const Router = () => {
	return (
		<Switch>
			<Route exact path={ROUTES.index} component={Index} />
			<Route exact path={ROUTES.forum} component={Forum} />
		</Switch>
	)
}

export default Router
