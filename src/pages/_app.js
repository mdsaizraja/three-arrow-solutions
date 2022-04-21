import Theme from '../styles/theme';
import { ThemeProvider } from "next-themes";
import "./globals.css"

export default function App({ Component, pageProps }) {

  return (

    <>
      <Theme>
          <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
      </Theme>
    </>
  );
}
 