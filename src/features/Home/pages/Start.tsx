import StartPage from 'features/Home/components/Start/StartPage'

const styles: any = {
  parent: {
    padding: '24px 32px 24px 32px',
    backgroundColor: '#33548A',
    height: '100%',
    zIndex: '999999999999999999',
  },
}

const Start = () => (
  <div className={styles.parent}>
    <StartPage />
  </div>
)

export default Start
