import profileImage from "../../assets/images/profile.png";


function HeroImage() {
  return (
    <div className="flex justify-center">

      <div className="relative">

        {/* Soft glow effect */}
        <div className="absolute inset-0 rounded-full bg-teal-400 blur-3xl opacity-30"></div>


        {/* Profile image container */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl">

          <img
            src={profileImage}
            alt="Rosemary Mtape"
            className="w-full h-full object-cover object-top"
          />

        </div>

      </div>

    </div>
  );
}


export default HeroImage;