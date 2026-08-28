import './style/index.scss'

import MainLayout from './layout/MainLayout'
import Intelligent from './components/Intelligent/Intelligent'
import Runner from './components/Runner/Runner'

function App() {
  return (
    <MainLayout>
      <Intelligent />
      <Runner />
    </MainLayout>
  )
}

export default App
