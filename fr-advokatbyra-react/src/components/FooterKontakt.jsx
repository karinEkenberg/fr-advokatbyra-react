import React from 'react'

const FooterKontakt = () => {
  return (
    <>
         <section>
          <h2 className="font-slab">Kontakt</h2>
          <div className="flex flex-row items-center">
            <figure className="w-5">
              <img src="images/phone-svgrepo-com.svg" alt="phone" />
            </figure>
            <a className="underline pl-1" href="tel:+08000000">
              08 000 000
            </a>
          </div>

          <div className="flex flex-row items-center">
            <figure className="w-5">
              <img src="images/mail-svgrepo-com.svg" alt="phone" />
            </figure>
            <a className="underline pl-1" href="mailto:info@fradvokatbyra.se">
              info@fradvokatbyra.se
            </a>
          </div>
        </section>
    </>
  )
}

export default FooterKontakt