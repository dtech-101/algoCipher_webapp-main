import './App.css';
import { CssBaseline } from '@mui/material';
import AppRoutes from './AppRoutes';
import ScrollToTop from './components/ScrollToTop';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import { MsalProvider } from '@azure/msal-react';
import { useRef } from 'react';
import Theme from './components/Theme';

interface IAppProps {
  msalInstance: PublicClientApplication
}

const App = ({
  msalInstance
}: IAppProps) => {

  const containerRef = useRef<any>();

  return (
    <>
      <CssBaseline />
      <ScrollToTop />
      {/* <MsalProvider instance={msalInstance}> */}
      <AppRoutes />
      {/* </MsalProvider> */}
    </>
  );
}

export default App;
