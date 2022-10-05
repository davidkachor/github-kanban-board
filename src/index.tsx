import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css'
import GlobalStyled from "@/global.styled";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<>
		<GlobalStyled />
		<App />
	</>
)

reportWebVitals()
