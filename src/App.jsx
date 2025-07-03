
import Mainbody from "./components/Mainbody.jsx" 
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appstore.jsx'



function App() {

  return (
    <BrowserRouter>
      <>
      <Provider store={appStore} > 
         <Mainbody/>
      </Provider>
      </>
    </BrowserRouter>
  )
}

export default App
