
import Mylayout from './Mylayout/Mylayout';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>

     <Mylayout className=''>

        <div className='min-h-screen px-5 lg:px-0  '>
        <Outlet/>
        </div>

     </Mylayout>

    </div>
  );
};

export default App;