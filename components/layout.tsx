export const Layout = props => (
  <main>
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
          background: black;
          color: white;
        }
        a {
          color: white;
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
          font-weight: 800;
          font-size: 1.75rem;
        }
      `}
    </style>
    {props.children}
  </main>
);
