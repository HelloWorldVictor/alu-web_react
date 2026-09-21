import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    marginTop: '16px',
  },

  label: {
    marginRight: '8px',
  },

  input: {
    marginRight: '16px',
  },
});

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.login)}>
        <label className={css(styles.label)} htmlFor="email">
          Email
        </label>
        <input
          className={css(styles.input)}
          type="email"
          id="email"
          name="email"
        />
        <label className={css(styles.label)} htmlFor="password">
          Password
        </label>
        <input
          className={css(styles.input)}
          type="password"
          id="password"
          name="password"
        />
        <button type="submit">OK</button>
      </div>
    </>
  );
}

export default Login;
