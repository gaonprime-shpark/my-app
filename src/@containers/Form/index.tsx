import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  gender: string;
  test: number;
  주소: string;
};

const FormPrac = () => {
  const { register, handleSubmit, watch, setValue } = useForm<FormData>();
  const onSubmit = (data: any) => {
    console.log('data');
    console.log(data);
  };

  //useForm prop
  // watch: UseFormWatch<TFieldValues>;
  // getValues: UseFormGetValues<TFieldValues>;
  // getFieldState: UseFormGetFieldState<TFieldValues>;
  // setError: UseFormSetError<TFieldValues>;
  // clearErrors: UseFormClearErrors<TFieldValues>;
  // setValue: UseFormSetValue<TFieldValues>;
  // trigger: UseFormTrigger<TFieldValues>;
  // formState: FormState<TFieldValues>;
  // resetField: UseFormResetField<TFieldValues>;
  // reset: UseFormReset<TFieldValues>;
  // handleSubmit: UseFormHandleSubmit<TFieldValues>;
  // unregister: UseFormUnregister<TFieldValues>;
  // control: Control<TFieldValues, TContext>;
  // register: UseFormRegister<TFieldValues>;
  // setFocus: UseFormSetFocus<TFieldValues>;

  useEffect(() => {
    console.log(register);
  }, []);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...(register('firstName'), { minLength: 5, maxLength: 10 })} />
          <select {...register('gender')}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input {...register('주소')} />
          <input type="submit" />
          <input
            type="number"
            {...register('test', {
              max: 3,
            })}
          />
        </form>

        <button
          onClick={() => {
            // setValue('firstName', 1);
          }}
        ></button>
      </div>
    </>
  );
};
export { FormPrac };
