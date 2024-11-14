import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------left section ----- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eius veritatis rem? Laudantium, dolor? Assumenda tempora ad voluptate facilis temporibus!</p>
        </div>
        {/* -----center section------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* -------right section------ */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-9067543295</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------bottom section ------ */}
       <div>
        <hr />
         <p className="py-5 text:sm text-center">�� 2024 prescripto. All rights reserved.</p>
         </div>
    </div>
  )
}

export default Footer