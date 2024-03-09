import NavBar from '../ui/NavBar'
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
<NavBar/>
<Outlet/>
      
    </>
  );
}
