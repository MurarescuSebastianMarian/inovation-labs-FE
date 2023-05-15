import { RegisterPage } from 'features/Home/components/RegisterPage'

const styles: any = {
  parent: {
    padding: '24px 32px 24px 32px',
    backgroundColor: '#33548A',
    height: '100%',
    zIndex: '999999999999999999',
  },
}

const Register = () => (
  <div className={styles.parent}>
    <RegisterPage />
  </div>
)

export default Register
