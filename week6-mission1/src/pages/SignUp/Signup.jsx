import * as S from './SignupStyle';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {axiosAuthInstance} from '../../apis/axios-instance';

const Signup = () => {
  const navigate = useNavigate();

  // 유효성 검사 스키마 정의
  const schema = yup.object().shape({
    email: yup.string()
      .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
      .required('이메일을 반드시 입력해주세요.'),
    password: yup.string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
      .required('비밀번호를 반드시 입력해주세요.'),
    passwordcheck: yup.string()
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 확인은 필수 입력 요소입니다.'),
  });

  const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      passwordcheck: '',
    },
  });


  const onSubmit = async (data) => {
    try {
      const response = await axiosAuthInstance.post('/auth/register', {
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordcheck, 
      });
    
      // 회원가입 성공
      console.log('회원가입 성공:', response.data);
      navigate('/login');
    } catch (error) {
      // 오류 처리
      console.error('회원가입 실패:', error.response?.data || error.message);
    }
  };

  const email = watch('email');
  const password = watch('password');
  const passwordcheck = watch('passwordcheck');
  const isFormValid = !!(email && password && passwordcheck && Object.keys(errors).length === 0);

  return (
    <S.StyledContainer>
      <S.StyledHeading>회원가입</S.StyledHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.StyledInputContainer>
          <S.StyledInput 
            type='email' 
            placeholder='이메일을 입력해주세요!' 
            {...register('email', { onChange: () => trigger('email') })} 
            required
          />
          <S.ErrorMessage $show={!!errors.email}>{errors.email?.message}</S.ErrorMessage>
        </S.StyledInputContainer>

        <S.StyledInputContainer>
          <S.StyledInput 
            type='password' 
            placeholder='비밀번호를 입력해주세요!' 
            {...register('password', { onChange: () => trigger('password') })} 
            required
          />
          <S.ErrorMessage $show={!!errors.password}>{errors.password?.message}</S.ErrorMessage>
        </S.StyledInputContainer>

        <S.StyledInputContainer>
          <S.StyledInput 
            type='password' 
            placeholder='비밀번호 확인을 입력해주세요!' 
            {...register('passwordcheck', { onChange: () => trigger('passwordcheck') })} 
            required
          />
          <S.ErrorMessage $show={!!errors.passwordcheck}>{errors.passwordcheck?.message}</S.ErrorMessage>
        </S.StyledInputContainer>

        <S.StyledButton 
          type='submit' 
          $disabled={!isFormValid}
        >
          제출
        </S.StyledButton>
      </form>
    </S.StyledContainer>
  );
};

export default Signup;
