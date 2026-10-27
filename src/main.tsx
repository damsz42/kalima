import { ThemeProvider } from 'next-themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ProgressProvider } from '@/features/progress/progress-provider'

import App from './App'
import './index.css'

const root = document.getElementById('root')
if (!root) throw new Error('Élément #root introuvable.')

createRoot(root).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <ProgressProvider>
          <App />
          <Toaster position="bottom-center" />
        </ProgressProvider>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
)
