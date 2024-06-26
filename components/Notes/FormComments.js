import styled from "styled-components";

export default function FormComments({ onSubmit, plant, mutate }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    mutate();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const notes = [...plant.notes, data.notes];

    onSubmit({ notes: notes }, plant._id, mutate);

    event.target.reset();
    event.target.notes.focus();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="notes">Add a comment:</label>
      <textarea
        type="text"
        id="notes"
        name="notes"
        rows="3"
        cols="30"
        required
        maxLength={200}
        minLength={1}
      ></textarea>
      <ButtonSend type="submit">Send</ButtonSend>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0px;
`;

const ButtonSend = styled.button`
  background: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;
