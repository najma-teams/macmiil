import React from 'react'
import {RouterProvider} from 'react-router-dom'
import {router} from './Router'
import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./Theme";
import Home_page from './pages/Home_page';

const App = () => {
  // const [theme, colorMode] = useMode();
  return (
    <>
    {/* <ColorModeContext.Provider value={colorMode}> */}
       {/* <ThemeProvider theme={theme}> */}
       {/* <CssBaseline /> */}
       <RouterProvider router={router}/>
       {/* <Home_page/> */}
       {/* </ThemeProvider> */}
    {/* </ColorModeContext.Provider> */}
    </>
  )
}

export default App