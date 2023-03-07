import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.css'
import { App } from './App'
import { CounterContextProvider } from './CounterContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
