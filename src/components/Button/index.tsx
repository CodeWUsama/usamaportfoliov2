import { Button as AButton } from "antd";
import styled from "styled-components";

const Button: React.FC<ButtonProps> = ({ width, text, icon, onClick }) => {
  return (
    <CustomizedButton
      width={width}
      text={text}
      type="primary"
      size="large"
      icon={icon}
      onClick={onClick}
    >
      {text}
    </CustomizedButton>
  );
};

const CustomizedButton = styled(AButton)<ButtonProps>`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px 20px;
  width: ${(props) => props.width};
`;

interface ButtonProps {
  width?: string;
  text: string;
  icon?: React.ReactElement;
  onClick?: () => void;
}

export default Button;
