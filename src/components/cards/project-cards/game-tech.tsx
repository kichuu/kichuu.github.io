import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import SendmessageIcon from "@/components/lottie-ui/send-message";
import GitHubIcon from "@/components/lottie-ui/github-icon";

const GameTech = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-full w-full aspect-[578/433] shadow-2xl rounded-lg">
            <Image
              src={"/projects/GameTech.png"}
              alt={"GameTech landing page example"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "8px"
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Personal Project</span>
            
          </h4>
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Game Tech
            </h1>
            <SendmessageIcon link="https://mygamingsite.vercel.app/" lottieName="GamingSite" />
            <GitHubIcon link={"https://github.com/kichuu/gaming-site"} lottieName={"GamingSite"}/>

          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Solo Developer
            </Badge>
            <Badge variant="default" className="text-xs">
              Nextjs
            </Badge>
            <Badge variant="default" className="text-xs">
              Typescript
            </Badge>
            <Badge variant="default" className="text-xs">
              Threejs
            </Badge>
            <Badge variant="default" className="text-xs">
              Tailwind
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default GameTech
