import {useState} from 'react'

import {
  BgContainer,
  Card,
  Heading,
  Caption,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <BgContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Caption>Check how strong and secure is your password</Caption>
        <Input type="password" onChange={onChangePassword} value={password} />
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </Card>
    </BgContainer>
  )
}

export default PasswordValidator
