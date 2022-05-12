import styled from "styled-components";

const Conteinter = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <Conteinter>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Conteinter>
  );
};
