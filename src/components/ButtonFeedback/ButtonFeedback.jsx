import PropTypes from 'prop-types';
import styled from 'styled-components';


export const ButtonFeedback = ({onClickButton, buttons }) => {
  return (
    <Ul>
      {buttons.map(( button ) => (
        <Li key={button}>
          <Button type="button" onClick={onClickButton}>{button}</Button>
        </Li>
      ))}
      {/* <button type="button" onClick={onClickButton}>good</button>
      <button type="button" onClick={onClickButton}>neutral</button>
      <button type="button" onClick={onClickButton}>bad</button> */}
    </Ul>
  )
};

ButtonFeedback.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired),
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
`
const Li = styled.li`
  padding-right: 10px;
`

const Button = styled.button`
  font-size: 24px;
  border-radius: 12px;
  cursor: pointer;
  background-color: gold;
  &:hover {
    background-color: lightgreen;
  }
`