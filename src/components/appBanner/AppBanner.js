import './AppBanner.scss'
import avengers from '../../resources/img/Avengers.png'
import avengers_logo from '../../resources/img/Avengers_logo.png'


const AppBanner = () => {
  return (
    <div className="banner">
      <img className='banner-img' src={avengers} alt="avengers" />
      <div className='text-div'>
        <p className='text'>New comics every week!</p>
        <p className='text'>Stay turned!</p>
      </div>
      <img className='banner-img' src={avengers_logo} alt="avengers-logo" />
    </div>
  )
}

export default AppBanner