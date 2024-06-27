import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='shortcut icon'
          href='https://developers.hyundaimotorgroup.com/favicon.png'
          type='image/x-icon'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
