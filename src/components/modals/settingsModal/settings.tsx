import { HiXMark } from "react-icons/hi2";
import { useSettingsModal } from "./useSettingsModal";
import Greece from "public/flags/greece1.png";
import denmark from "public/flags/denmark.png";
import Image from "next/image";
import * as INFO from "../../../../config";
import styles from "./styles.module.scss";
import fallingStars from "./fallingstars.module.scss";

const SettingsModal = () => {
  const { ModalHandler, backdrop, modalContent, stars } = useSettingsModal();

  return (
    <>
      <div className={backdrop} onClick={ModalHandler}></div>
      <div className={modalContent}>
        <HiXMark className={styles.x} onClick={ModalHandler} />
        <div className={styles.night}></div>
        {stars.map((star, i) => {
          return <div className={fallingStars["shooting_star"]} key={i}></div>;
        })}
        <div>
          <h2 className={styles.title}>
            Tech Stack that has been used for this project
          </h2>
          <div className={styles.tech_stack}></div>

          {/* Developer Information */}
          <section className={styles.infoSection}>
            <h3>Developer Information</h3>

            <p>
              Giorgos Nonis from{" "}
              <Image
                height={15}
                width={15}
                src={Greece}
                alt="Greece"
                className={styles.img}
              />
              Greece located in{" "}
              <Image
                height={15}
                width={15}
                src={denmark}
                alt="denmark"
                className={styles.img}
              />
              Denmark , Aarhus
            </p>
          </section>

          {/* Contact Information */}
          <section className={styles.infoSection}>
            <h3>Contact Information</h3>
            {INFO.CONTACT_INFORMATION.map((info, i) => {
              return (
                <p key={i}>
                  {info.name} {info.value}
                </p>
              );
            })}
          </section>

          <section className={styles.infoSection}>
            <h3>Tech Stack</h3>
            <div className={styles.techStack}>
              {INFO.TECH_STACK.map((image, index) => {
                return (
                  <Image
                    key={index}
                    height={60}
                    width={60}
                    src={image}
                    alt={`${image}`}
                  />
                );
              })}
            </div>
          </section>

          {/* Project Description */}
          <section className={styles.infoSection}>
            <h3>Project Description</h3>
            {INFO.PROJECT_DESCRIPTION.map((dsc, i) => {
              return <p key={i}>{dsc}</p>;
            })}
          </section>

          {/* External Links */}
          <section className={styles.infoSection}>
            <h3>External Links</h3>
            <div className={styles.links}>
              {INFO.EXTERNAL_LINKS.map((link, i) => {
                return (
                  <a href={link.link} key={i} target="_blank">
                    <Image
                      key={link.link}
                      height={60}
                      width={60}
                      src={link.value}
                      alt={link.link}
                    />
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default SettingsModal;
