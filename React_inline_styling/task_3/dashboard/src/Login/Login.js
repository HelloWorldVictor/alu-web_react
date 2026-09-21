import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const SMALL_SCREEN = '@media (max-width: 900px)';

const styles = StyleSheet.create({
  login: {
    marginTop: '16px',
  },

  // Inline on a large screen, one field per line below 900px.
  field: {
    display: 'inline',

    [SMALL_SCREEN]: {
      display: 'block',
      marginBottom: '8px',
    },
  },

  label: {
    marginRight: '8px',
  },

  input: {
    marginRight: '16px',

    [SMALL_SCREEN]: {
      marginRight: 0,
    },
  },

  // Pushed onto its own line below 900px.
  button: {
    [SMALL_SCREEN]: {
      display: 'block',
      marginTop: '8px',
    },
  },
});

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.login)}>
        <div className={css(styles.field)}>
          <label className={css(styles.label)} htmlFor="email">
            Email
          </label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className={css(styles.field)}>
          <label className={css(styles.label)} htmlFor="password">
            Password
          </label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button className={css(styles.button)} type="submit">
          OK
        </button>
      </div>
    </>
  );
}

export default Login;
