import { nanoid } from 'nanoid';
import { Button, ButtonContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {Object.keys(options).map(option => (
        <Button
          key={nanoid()}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};
