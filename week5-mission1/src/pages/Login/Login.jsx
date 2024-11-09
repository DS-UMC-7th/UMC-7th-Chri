import * as L from './LoginStyle';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string()
      .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
      .required('이메일을 반드시 입력해주세요.'),
    password: yup.string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
      .required('비밀번호를 반드시 입력해주세요.'),
  });

  const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('로그인 데이터:', data);
  };

  const email = watch('email');
  const password = watch('password');
  const isFormValid = !!(email && password && Object.keys(errors).length === 0);

  return (
    <L.StyledContainer>
      <L.StyledHeading>로그인</L.StyledHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <L.StyledInputContainer>
          <L.StyledInput 
            type='email' 
            placeholder='이메일을 입력해주세요!' 
            {...register('email', { onChange: () => trigger('email') })} 
            required
          />
          <L.ErrorMessage show={!!errors.email}>{errors.email?.message}</L.ErrorMessage>
        </L.StyledInputContainer>

        <L.StyledInputContainer>
          <L.StyledInput 
            type='password' 
            placeholder='비밀번호를 입력해주세요!' 
            {...register('password', { onChange: () => trigger('password') })} 
            required
          />
          <L.ErrorMessage show={!!errors.password}>{errors.password?.message}</L.ErrorMessage>
        </L.StyledInputContainer>

        <L.StyledButton 
          type='submit' 
          disabled={!isFormValid}
        >
          로그인
        </L.StyledButton>
      </form>
    </L.StyledContainer>
  );
};

export default Login;
