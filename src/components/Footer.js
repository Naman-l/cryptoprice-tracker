import React from 'react'

const Footer=(price)=> {

    if (price!=="0.00"){
        return<div className="footer">Designed and Developed by Naman Sharma
        <div  >
            <span className="links" >
              <a
                href="https://www.linkedin.com/in/naman-sharma-dev98"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn
                </span>
              </a>
            </span>
            <span className="links" >
              <a
                href="https://twitter.com/the_growing_up"
                target="_blank"
                rel="noreferrer"
              >
                <span > Twitter
                </span>
              </a>
            </span>

            <span className="links">
              <a
                href="https://github.com/Naman-l"
                target="_blank"
                rel="noreferrer"
              >
                <span >GitHub
                </span>
              </a>
            </span>
          </div>
</div>    
    }
}

export default Footer
