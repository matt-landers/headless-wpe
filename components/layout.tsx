import Head from "next/head";

export const Layout = props => (
  <main>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet" /> 
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900i&display=swap" rel="stylesheet" /> 
    </Head>
    <style jsx global>
      {`
        main {
          margin-left: auto;
          margin-right: auto;
          max-width: 42rem;
          padding: 2.625rem 1.3125rem;
        }
        body {
          font-family: Montserrat, sans-serif;
          background: rgb(40, 44, 53);
          color: rgba(255, 255, 255, 0.88);
        }
        a {
          color: #0091ea;
          text-decoration: none;
        }
        li {
          font-size: 1.25em;
        }
        h1 {
          font-weight: 900;
          font-size: 3rem;
        }
        h2 {
          color: #0091ea;
          font-weight: 800;
          font-size: 1.75rem;
        }
        .post {
          font-family: "Merriweather", "Georgia", serif;
          font-size: 16px;
          line-height: 28px;
          font-feature-settings: "kern", "liga", "clig", "calt";
        }
      `}
    </style>
    {props.children}
  </main>
);
