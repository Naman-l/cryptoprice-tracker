import React from 'react'

const Footer=(price)=> {

    if (price!=="0.00"){
        return<div className="footer">Designed and Developed by pekkacodes
        <div  >
            <span  >
              <a className="links"
                href="https://www.linkedin.com/in/naman-sharma-dev98"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn
                </span>
              </a>
            </span>
            <span className="links" >
              <a className="links"
                href="https://twitter.com/the_growing_up"
                target="_blank"
                rel="noreferrer"
              >
                <span > Twitter
                </span>
              </a>
            </span>

            <span className="links">
              <a className="links"
                href="https://github.com/Naman-l"
                target="_blank"
                rel="noreferrer"
              >
                <span >GitHub
                </span>
              </a>
            </span>

            <span className="links">
              <a className="links"
                href="https://pekkacodesportfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span >Portfolio
                </span>
              </a>
            </span>
          </div>
</div>    
    }
}

export default Footer
