import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Notification = ({message}) => {
  return (
      <P>{message}</P>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

const P = styled.p`
  font-size: 24px;
`