import * as Yup from 'yup';
import styles from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import Button from '../../Button/Button';

interface IForm {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required')
    .matches(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      'Please enter valid email',
    ),
  password: Yup.string()
    .min(10, 'Password should be at list 10 signs long ')
    .required('Password is required'),
});

const LoginForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    values: { email: '', password: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className={`${styles.input} ${errors.email ? styles.error : ''}`}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
        <div className={styles.inputWrapper}>
          <input
            type={visiblePassword ? 'text' : 'password'}
            {...register('password')}
            placeholder={'Password'}
            className={`${styles.input} ${errors.password ? styles.error : ''}`}
          ></input>
          <button
            className={styles.buttonEye}
            onClick={() => setVisiblePassword(!visiblePassword)}
          >
            <svg className={styles.iconEye} width={20} height={20}>
              <use
                href={`${sprite}#${
                  visiblePassword ? 'icon-eye' : 'icon-eye-off'
                }`}
              />
            </svg>
          </button>
          {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>
          )}
        </div>
        <Button accent={true} formButton={true}>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
