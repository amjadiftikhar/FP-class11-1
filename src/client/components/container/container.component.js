import React from 'react';
import './container.style.css';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import {
  faUser,
  faKey,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import InputLogin from '../input-login/input-login.component';
import Button from '../button/button.component';
import Logo from '../logo/logo.component';
import Link from '../link/link.component';
import Notification from '../notification/notification.component';

import imageFile from '../../assets/images/logo.png';

export default function Container({ title, error }) {
  return (
    <div className="container">
      <Logo srcPath={imageFile} altText="Seasony" />
      <h2>{title}</h2>
      <form>
        {error && (
          <Notification
            text={text(
              'Error text',
              'This is error message for wrong email address.',
            )}
          />
        )}
        {error ? (
          <InputLogin
            type={text('Input Type', 'email')}
            placeholder={text('Input Placeholder Text Email', 'Email')}
            onChange={action('email value changed')}
            icon={faExclamationCircle}
            error
          />
        ) : (
          <InputLogin
            type={text('Input Type', 'email')}
            placeholder={text('Input Placeholder Text Email', 'Email')}
            onChange={action('email value changed')}
            icon={faUser}
          />
        )}
        <InputLogin
          type={text('Input Type', 'password')}
          placeholder={text('Input Placeholder Text pAssword', 'Password')}
          onChange={action('password value changed')}
          icon={faKey}
        />
        <div className="right">
          <Link
            href={text('Link URL', '/forgotpassword')}
            text={text('Link text', 'Forgot password')}
          />
        </div>
        <Button
          onClick={action('clicked')}
          text={text('Button Text', 'Login')}
        />
      </form>
    </div>
  );
}

Container.defaultProps = {
  error: false,
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  error: PropTypes.bool,
};