type Props = {
  background: string;
  children?: JSX.Element,
}

const Header = ({ background, children }: Props) => {
  return (
    <>
      <header>
        <div className="fadeInDown">
          {children ? children : <img src="/spacex_logo.svg" />}
        </div>
      </header>

      <style jsx>{`
        header {
          background-image: url(${background});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.3);
          height: 100vh;
        }

        img {
          display: block;
          margin: 0 auto;
          width: 70%;
        }

        @keyframes fadeInDown {
          0% {
              opacity: 0;
              transform: translateY(100px);
          }
          100% {
              opacity: 1;
              transform: translateY(0);
          }
        }

        @-webkit-keyframes fadeInDown {
          0% {
              opacity: 0;
              -webkit-transform: translateY(100px);
          }
          100% {
              opacity: 1;
              -webkit-transform: translateY(0);
          }
        }

        .fadeInDown {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
          -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
      `}</style>
    </>
  );
}

export { Header }