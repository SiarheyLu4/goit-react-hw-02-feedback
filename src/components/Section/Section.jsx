import PropTypes from 'prop-types';
import styled from 'styled-components';


export const Section = ({title, children}) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

const Title = styled.h2`
  font-size: 32px;
`