// import { NetworkProvider } from './network/networkProvider'
// import { ExtensionProvider } from './extension/extensionProvider'
// import { SettingsProvider } from './settings/settingsProvider'
// import { AppProvider } from 'provider/app/appProvider'
// import { GraphQlProvider } from 'provider/graphQl/graphQlProvider'
// import { ReadyProvider } from 'provider/ready/readyProvider'
import { ThemeProvider } from './theme'

export function Providers({ children }) {
	return <ThemeProvider>{children}</ThemeProvider>
}

/**
		<GraphQlProvider>
			<AppProvider>
				<SettingsProvider>
					<NetworkProvider>
							<ReadyProvider>
								<ExtensionProvider>
								</ExtensionProvider>
							</ReadyProvider>
					</NetworkProvider>
				</SettingsProvider>
			</AppProvider>
		</GraphQlProvider>
**/
