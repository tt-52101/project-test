function Error(){
    return(
        <>
       
        <div id="huro-app" className="app-wrapper">
  <div className="minimal-wrapper darker">
    <div className="error-container">
      <div className="error-wrapper">
        <div className="error-inner has-text-centered">
          <div className="bg-number dark-inverted">404</div>
          <img
            className="light-image"
            src="assets/img/illustrations/placeholders/error-1.svg"
            alt
          />
          <img
            className="dark-image"
            src="assets/img/illustrations/placeholders/error-1-dark.svg"
            alt
          />
          <h3 className="dark-inverted">We couldn't find that page</h3>
          <p>
            Looks like we couldn't find that page. Please try again or contact
            an administrator if the problem persists.
          </p>
          <div className="button-wrap">
            <a
              className="button h-button is-primary is-elevated"
              onclick="goBack()"
            >
              Take me Back
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
        </>
    )
}
export default Error;