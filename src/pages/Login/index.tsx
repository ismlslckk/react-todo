import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InnerWrapper, Input, Wrapper } from '@/components/atoms';
import styles from './login.module.scss';
import Button from '@/components/atoms/Button';

const Form = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  /**
   *
   * @param e
   */
  const handleChange = (e:any) => {
    setLoginForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   *
   */
  const redirectHomePage = () => {
    const token = localStorage.getItem('token');
    if (token) { navigate('/'); }
  };

  /**
   *
   * @param e
   */
  const handleSubmit = (e:any) => {
    e.preventDefault();
    localStorage.setItem('token', 'default_login_token');
    redirectHomePage();
  };

  /**
   *
   */
  useEffect(() => {
    redirectHomePage();
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <h3>Login</h3>
          </div>
          <div className={styles.inputContainer}>
            <label>Username </label>
            <Input value={loginForm.username} onChange={handleChange} className={styles.loginInput} type="text" name="username" />
          </div>
          <div className={styles.inputContainer}>
            <label>Password </label>
            <Input value={loginForm.password} onChange={handleChange} className={styles.loginInput} type="password" name="password" />
          </div>
          <div className={styles.buttonContainer}>
            <Button className={styles.loginButton} type="submit">Login</Button>
          </div>
        </form>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Form;
