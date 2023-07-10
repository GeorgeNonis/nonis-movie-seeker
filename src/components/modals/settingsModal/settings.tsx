import { useSettingsModal } from "./useSettingsModal";
import fallingStars from "./fallingstars.module.scss";
import * as Comp from "./info";
import { Backdrop, Night, Content } from "./styles";
import { Title, XMark } from "@/components/Atoms";

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
          <Title marginBlock={"1"} fontSize={"6"}>
            Tech Stack that has been used for this project
          </Title>
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
