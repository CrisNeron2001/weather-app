import { Header } from '@layouts/header/Header';
import { Main } from '@layouts/main/Main';
import './App.css';

const App: React.FC = () => {
    return (
		<div className="flex flex-col row-auto gap-6">
			<Header/>
			<div className='flex justify-center'>
				<Main/>
			</div>
		</div>
    );
};

export default App;