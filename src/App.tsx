
import { Rotas } from './router';
import { FormProvider } from './context/Context';


function App() {
  return (
  <FormProvider>
    <Rotas />
  </FormProvider>  
 
  );
}

export default App;
