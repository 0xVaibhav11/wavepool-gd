"use client";
import styles from "./card.module.scss";
import { useEffect } from "react";
const Card = () => {
  useEffect(() => {
    const parallexEffect = () => {
      const parallex: NodeListOf<HTMLElement> =
        document.querySelectorAll(".parallex");

      let xValue = 0;
      let yValue = 0;

      window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;

        parallex.forEach((e: HTMLElement) => {
          let speedx: any = e.dataset.speedx;
          let speedy: any = e.dataset.speedy;
          e.style.transform = `translateX(calc(-50% - ${
            xValue * speedx
          }px)) translateY(calc(-50% - ${yValue * speedy * 0.5}px))`;
        });

        const face: NodeListOf<HTMLElement> =
          document.querySelectorAll(".face");
        face.forEach((e: HTMLElement) => {
          e.style.transform = `translateX(calc(-5% - ${
            0.01 * xValue
          }px)) translateY(calc(-5% - ${0.02 * yValue}px))`;
        });
      });
    };

    parallexEffect();
  }, []);
  return (
    <>
      <div className={styles.main}>
        <img
          src="./images/sun.png"
          className="parallex check"
          style={{
            width: "250px",
            height: "250px",
            position: "absolute",
            bottom: "14% ,25%",
            left: "15%",
          }}
          data-speedx="0.3"
          data-speedy="0.18"
        />
        {/* <img
          src="./images/sun.png"
          className="parallex check"
          style={{
            width: "250px",
            height: "250px",
            position: "absolute",
            top: "4% ,65%",
            left: "45%",
          }}
          data-speedx="0.3"
          data-speedy="0.18"
        /> */}
        <img
          src="./images/sun.png"
          className="parallex check"
          style={{
            width: "250px",
            height: "250px",
            position: "absolute",
            top: "27%",
            left: "100%",
          }}
          data-speedx="0.27"
          data-speedy="0.14"
        />

        <img
          src="./images/sun.png"
          className="parallex check"
          style={{
            width: "250px",
            height: "250px",
            position: "absolute",
            bottom: "12% ",
            left: "65%",
          }}
          data-speedx="0.3"
          data-speedy="0.18"
        />
        {/* <img
          src="./images/sun.png"
          className="parallex check"
          style={{
            width: "250px",
            height: "250px",
            position: "absolute",
            top: "5%",
            left: "0%",
          }}
          data-speedx="0.23"
          data-speedy="0.09"
        /> */}
      </div>
    </>
  );
};
export default Card;
{
  /* <div className="font-display h-[38rem] text-blue-200 w-[40rem] bg-blue-800  p-[12px]	rounded-lg">
        <div className={styles.diva}>
          <img
            style={{ borderRadius: "16px" }}
            height="250"
            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
          <div className={styles.divb}>
            <img
              style={{ borderRadius: "16px" }}
              src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className={styles.divc}>
            <img
              style={{ borderRadius: "16px" }}
              src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
        </div>
      </div> */
}
