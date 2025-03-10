import EqualifyLogo from '../assets/equalify.svg'
const LoadingSpinner = () => {
    return (
      <div className="loading-spinner-scrim">
         <img src={EqualifyLogo} className='equalify-logo'/>
        <p>Loading</p>
        <div className="loader"></div>
      </div>
    );
  };
  
export default LoadingSpinner;