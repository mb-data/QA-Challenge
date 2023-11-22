import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Calculator />
		</>
	)
}

export default App
