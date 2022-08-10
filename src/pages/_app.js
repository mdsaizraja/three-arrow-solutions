import Theme from '../styles/theme';
import {ThemeProvider} from "next-themes";
import "./globals.css"
import "./style.css"
import "./client.css"
import {Provider} from 'react-redux';
import store from './../redux/store';



export default function App({Component, pageProps}) {
    return (
        <>
            <Provider store={store}>
                <Theme>
                    <ThemeProvider enableSystem={true} attribute="class">
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Theme>
            </Provider>
        </>
    );
}
 