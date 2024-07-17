import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 100vh;
`

const LogoContainer = styled.img`
  width: 304.12px;
  height: 91.78px;
  margin: 50px 0 70px 0;
`

const InputField = styled.input`
  width: 350px;
  height: 56px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #E6E6FA;
  margin-bottom: 12px;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`

const SubmitButton = styled.button`
  width: 280px;
  height: 56px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #6A0DAD;
  margin: 26.5px 35px 18px 35px;
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
`

const JoinLink = styled.span`
  font-size: 20px;
  font-weight: 400;
`

const Login = () => {
  const navigate = useNavigate();

  const [member_id, setMember_id] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!member_id) {
      alert('ID를 입력해야 합니다.');
    } else if (!password) {
      alert('비밀번호를 입력해야 합니다.');
    } else if (member_id !== 'member_id') {
      alert('회원이 아닙니다.');
    } else if (password !== 'password') {
      alert('비밀번호가 틀렸습니다.');
    } else {
      navigate('/main');
    }
  };

  const handleMemberIdChange = (e) => {
    setMember_id(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const navigateToJoin = () => {
    navigate('./join');
  }

  return (
    <Container className='LoginContainer'>
      <div className='LogoContainer'>
        <LogoContainer src={process.env.PUBLIC_URL + '/images/mealdangLogo.png'} alt="mealdang" className="Logo" />
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='member_id' />
          <InputField
            type='text'
            id='member_id'
            value={member_id}
            onChange={handleMemberIdChange}
            placeholder='아이디'
            required />
        </div>
        <div>
          <label htmlFor='password' />
          <InputField className='LoginItem'
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='비밀번호'
            required />
        </div>
        <SubmitButton type='submit'>로그인하기</SubmitButton>
      </form>
      <JoinLink onClick={navigateToJoin} className='GoToJoin'>회원가입</JoinLink>
    </Container >
  )
}

export default Login;
