import React, { useState } from 'react'
import Input from './components/UI/Input/Input'

const App: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <div className="App">
      <Input label="password" type="text" value={value} setValue={setValue} />
    </div>
  )
}

export default App
