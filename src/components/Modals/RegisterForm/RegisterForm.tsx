import * as Yup from 'yup';
import styles from './RegisterForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import Button from '../../Button/Button';
import { useAppDispatch } from '../../../redux/store/hooks';
import { registerUser } from '../../../redux/auth/operations';
import { ModalPropsInterface } from '../../../types/ModalPropsInterface';
import toast from 'react-hot-toast';

interface IForm {
  userName: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Name should be at list 3 signs long')
    .max(15, 'Name should be no more than 15 signs long')
    .required('Name is required'),

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

const RegisterForm = ({ setIsOpen }: ModalPropsInterface) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    values: { userName: '', email: '', password: '' },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: IForm) => {
    const { userName, email, password } = data;
    dispatch(registerUser({ email, password, name: userName }))
      .unwrap()
      .then(() => {
        toast.success('Successfully registered', {
          duration: 2500,
        });
        setTimeout(() => {
          reset();
          setIsOpen(false);
        }, 2500);
      })
      .catch(() => {
        toast.error('Please, try again', {
          duration: 2500,
        });
      });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="userName"
          placeholder="Name"
          {...register('userName')}
          className={`${styles.input} ${errors.userName ? styles.error : ''}`}
        />
        {errors.userName && (
          <p className={styles.errorMessage}>{errors.userName.message}</p>
        )}
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
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
