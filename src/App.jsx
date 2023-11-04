
import Mylayout from './Mylayout/Mylayout';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>

     <Mylayout>
      <Outlet/>
     </Mylayout>

    </div>
  );
};

export default App;