import PropTypes from 'prop-types';
import styled from 'styled-components';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Ul>
      <Li>Good: {good}</Li>
      <Li>Neutrak: {neutral}</Li>
      <Li>Bad: {bad}</Li>
      <Li>Total: {total}</Li>
      <Li>Positive feedback: {positivePercentage}%</Li>
    </Ul>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

const Ul = styled.ul`
  list-style: none;
  `

const Li = styled.li`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`