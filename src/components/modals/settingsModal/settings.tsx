import { useSettingsModal } from "./useSettingsModal";
import fallingStars from "./fallingstars.module.scss";
import * as Comp from "./info";
import { Backdrop, Night, Title, XMark, Content } from "./styles";

const SettingsModal = () => {
  const { ModalHandler, modalContent, stars, settingsModalState } =
    useSettingsModal();

  return (
    <>
      <Backdrop visible={settingsModalState} onClick={ModalHandler} />
      <div className={modalContent}>
        <XMark onClick={ModalHandler} />
        <Night />
        {stars.map((star, i) => {
          return <div className={fallingStars["shooting_star"]} key={i}></div>;
        })}
        <Content>
          <Title>Tech Stack that has been used for this project</Title>
          <Comp.Developer />
          <Comp.Contact />
          <Comp.Stack />
          <Comp.Description />
          <Comp.Links />
        </Content>
      </div>
    </>
  );
};
export default SettingsModal;
