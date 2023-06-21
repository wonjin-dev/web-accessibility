import styled from '@emotion/styled';
import { FC, useState } from 'react';
import CheckBox from '.';

interface Props {
  title: string;
  options: string[];
}

const CheckboxGroup: FC<Props> = ({ options, title }) => {
  const [test, setTest] = useState<boolean>(false);

  return (
    <section>
      <Title>{title}</Title>
      <Content>
        {options.map((option, i) => {
          return (
            <CheckBox
              key={i}
              name={`${title}-${option}`}
              option={option}
              isChecked={test}
              onCheckboxClick={() => setTest(!test)}
            />
          );
        })}
      </Content>
    </section>
  );
};

export default CheckboxGroup;

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Title = styled.h2`
  padding: 64px 0;
  text-align: center;
  font-style: italic;
`;
