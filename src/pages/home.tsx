import openNotification from '../components/notify'

const HomePage = () => {
  openNotification('success', 'Welcome', 'You are on the home page')
  return (
    <div className="h-full w-full">
      <h1 className="text-2xl text-center mt-20">Home Page 24/11 9:27</h1>
    </div>
  )
}

export default HomePage
