import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../../Button/Button';
import styles from './AppointmentForm.module.scss';
import { ModalPropsInterface } from '../../../types/ModalPropsInterface';
import toast from 'react-hot-toast';

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^\+380\d{9}$/, 'Phone must start with +380 and include 9 digits'),
  childAge: Yup.number()
    .typeError("Child's age must be a number")
    .required("Child's age is required")
    .min(1, "Child's age must be at least 1")
    .max(18, "Child's age must be under 18"),
  email: Yup.string()
    .required('Email is required')
    .email('Must be a valid email'),
  parentName: Yup.string().required("Father's or Mother's name is required"),
  comment: Yup.string().required('Comment is required'),
  meetingTime: Yup.date().nullable().required('Meeting time is required'),
});

type FormData = {
  address: string;
  phone: string;
  childAge: number;
  email: string;
  parentName: string;
  comment: string;
  meetingTime: Date;
};

const AppointmentForm = ({ setIsOpen }: ModalPropsInterface) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema), // Apply Yup resolver
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success('Successfully sent', {
      duration: 2500,
    });
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* Address */}
      <div className={styles.address}>
        <input
          {...register('address')}
          type="text"
          placeholder="Enter your address"
          className={styles.input}
        />
        {errors.address && (
          <p className={styles.error}>{errors.address.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className={styles.phone}>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+380"
          className={styles.input}
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      {/* Child's Age */}
      <div className={styles.child}>
        <input
          {...register('childAge')}
          type="text"
          placeholder="Child's age"
          className={styles.input}
        />
        {errors.childAge && (
          <p className={styles.error}>{errors.childAge.message}</p>
        )}
      </div>

      {/* Email */}
      <div className={styles.email}>
        <input
          {...register('email')}
          type="email"
          placeholder="Enter your email"
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      {/* Meeting Time */}
      <div className={`${styles.meeting} ${styles.input}`}>
        <Controller
          name="meetingTime"
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Meeting time"
              timeFormat="HH:mm"
              dateFormat="HH:mm"
              placeholderText="Select time"
            />
          )}
        />
        {errors.meetingTime && (
          <p className={styles.error}>{errors.meetingTime.message}</p>
        )}
      </div>

      {/* Parent's Name */}
      <div className={styles.parent}>
        <input
          className={styles.input}
          {...register('parentName')}
          type="text"
          placeholder="Enter your name"
        />
        {errors.parentName && (
          <p className={styles.error}>{errors.parentName.message}</p>
        )}
      </div>

      {/* Comment */}
      <div className={styles.comment}>
        <textarea
          {...register('comment')}
          placeholder="Enter your comment"
          className={styles.textarea}
        />
        {errors.comment && (
          <p className={styles.error}>{errors.comment.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className={styles.button}>
        <Button accent={true} formButton={true}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
