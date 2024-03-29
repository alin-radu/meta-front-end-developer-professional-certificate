import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';

describe('Feedback Form', () => {
  test('User is able to submit the form if the score is lower than 5 and additional feedback is provided', () => {
    const score = '3';
    const comment = 'The pizza crust was too thick';

    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/i);
    const textAreaInput = screen.getByLabelText(/Comments:/i);

    fireEvent.change(rangeInput, { target: { value: score } });
    fireEvent.change(textAreaInput, { target: { value: comment } });

    const submitButton = screen.getByRole(/buttonn/i);
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test('User is able to submit the form if the score is higher than 5, without additional feedback', () => {
    const score = '9';
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/i);

    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole(/button/i);
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: '',
    });
  });
});
