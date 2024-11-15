import React from 'react'

const FooterSocialaMedier = () => {
  return (
    <>
          <section>
          <h2 className="font-slab">Sociala Medier</h2>
          <div className="flex flex-row justify-evenly py-2">
            <figure className="w-10">
              <img
                src="images/linkedin-rounded-border-svgrepo-com.svg"
                alt="linkedin"
              />
            </figure>
            <figure className="w-10">
              <img
                src="images/instagram-svgrepo-com.svg"
                alt="instagram"
              />
            </figure>
            <figure className="w-10">
              <img
                src="images/facebook-rounded-border-svgrepo-com.svg"
                alt="facebook"
              />
            </figure>
          </div>
        </section>
    </>
  )
}

export default FooterSocialaMedier