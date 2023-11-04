
import Mylayout from './Mylayout/Mylayout';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>

     <Mylayout>

        <div className='max-w-[1200px] mx-auto min-h-screen'>
        <Outlet/>
        </div>
        
     </Mylayout>

    </div>
  );
};

export default App;