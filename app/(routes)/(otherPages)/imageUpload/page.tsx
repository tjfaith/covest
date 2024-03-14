import React from 'react'

const page = () => {
  return (
        <section className="hero is-fullheight">
          <div className="hero-body is-centered">
            <div className="container">
              <div className="columns is-centered is-vcentered">
                
                <div className="column is-6">
                                <p className="title is-size-1">Imgur image upload</p>
    
                                <form ref='uploadForm' id='uploadForm' action='/upload' method='post' encType="multipart/form-data">
    
                                    <div className="file">
                                        <label className="file-label">
                                            <input className="file-input" type="file" name="sampleFile"/>
    
                                            <span className="file-cta">
                                            <span className="file-label">
                                                Choose a file and upload it
                                            </span>
                                            </span>
                                        </label>
                                    </div>
                                    <input type='submit' value='Upload!' className="button is-link mt-3" />
    
                                </form>
                
                            </div>
    
              </div>
            </div>
          </div>
      </section>

  )
}

export default page