import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${(props) => props.theme.fontFamily};
      color: ${(props) => props.theme.colours.ice};
    }

    body {
      background: ${(props) => props.theme.colours.siphon};
    }
`;

const theme = {
  colours: {
    hemocyanin: "#180048",
    ice: "#f0ffff",
    plum: "#600e6b",
    purpleHaze: "#a49fc8",
    siphon: "#100030",
    sohoLights: "#f050f8",
  },
  fontFamily: "Gotham, helvetica, arial, sans-serif",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
