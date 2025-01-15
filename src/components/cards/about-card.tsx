import Image from "next/image"
import CardWrapper from "@/components/cards/card-wrapper"

const AboutCard = () => {
  return (
    <CardWrapper>
      <div className="static flex flex-col items-center  justify-center px-6 py-5 sm:px-8 sm:py-6 gap-6">
        <div className="flex gap-2 sm:gap-6 flex-col items-center  justify-center">
          <div className="flex flex-col text-center justify-center">
            <h1 className="font-silka text-2xl sm:text-4xl leading-tight font-medium text-slate-900 dark:text-white">
              Krishnadev R
            </h1>
          </div>
        </div>

        <p className="dark:text-white text-slate-900 tracking-wide leading-6 text-xs sm:text-sm">
          I am a passionate and versatile Full-Stack Developer with experience
          in building and maintaining dynamic web applications.
          <br />
        </p>
      </div>
    </CardWrapper>
  )
}

export default AboutCard
