import * as Yup from 'yup';
import styles from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import Button from '../../Button/Button';
import { useAppDispatch } from '../../../redux/store/hooks';
import { loginUser } from '../../../redux/auth/operations';
import { ModalPropsInterface } from '../../../types/ModalPropsInterface';
import { toast } from 'react-hot-toast';

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

const LoginForm = ({ setIsOpen }: ModalPropsInterface) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    values: { email: '', password: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        toast.success('Successfully logged in', {
          duration: 2500,
        });
        setTimeout(() => {
          reset();
          setIsOpen(false);
        }, 2000);
      })
      .catch(() => {
        toast.error('Please, try again', {
          duration: 2000,
        });
      });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputEmailWrapper}>
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputPasswordWrapper}>
          <input
            type={visiblePassword ? 'text' : 'password'}
            {...register('password')}
            placeholder={'Password'}
            className={`${styles.input} ${errors.password ? styles.error : ''}`}
          ></input>
          <button
            className={styles.buttonEye}
            type="button"
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
