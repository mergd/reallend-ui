import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { useState } from 'react'
import { WagmiProvider } from 'wagmi'
import '@coinbase/onchainkit/styles.css'
import '@/styles/globals.css'

import { getConfig } from '@/lib/wagmi'
import { DEFAULT_CHAIN } from '@/lib/constants'

export default function App({ Component, pageProps }: AppProps) {
	const [config] = useState(() => getConfig())
	const [queryClient] = useState(() => new QueryClient())

	return (
		<WagmiProvider config={config} initialState={pageProps.initialState}>
			<QueryClientProvider client={queryClient}>
				<OnchainKitProvider
					apiKey={'bZqnkbZbqy3idZ7qUJN_YgV--3Vvtrt_'}
					chain={DEFAULT_CHAIN}
				>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						disableTransitionOnChange
					>
						<Component {...pageProps} />
					</ThemeProvider>
				</OnchainKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}
