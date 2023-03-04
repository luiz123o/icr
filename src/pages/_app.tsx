import { MantineProvider } from "@mantine/core";
import { appWithTranslation, useTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import { I18nProvider } from "../modules/shared/i18n-context";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <I18nProvider useTranslation={useTranslation}>
      <Head>
        <title>ICR</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </I18nProvider>
  );
}

export default appWithTranslation(App);
