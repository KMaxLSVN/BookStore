import * as React from 'react';
import './App.scss';
import { HeaderPage } from './components/header/Header-page';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import { HomePage } from './pages/HomePage/HomePage';
import { BookListPage } from './pages/books-list/Books-list-page';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Provider } from 'react-redux';
import { store } from './redux/store/configurate-store';


const App: React.FC = () => {
  return (
	<Provider store={store}>
		<Router>
			<div className="App">
				<HeaderPage />
				<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/books" component={BookListPage}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</div>      
		</Router>
	</Provider>
  );
}

export default App;