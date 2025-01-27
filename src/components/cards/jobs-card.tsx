import CardWrapper from "@/components/cards/card-wrapper";
import classNames from "classnames";
import GitHubStats from "./github-stats";
import GitHubCalendarComponent from "./project-cards/github-calender";

const jobsData = [
  {
    role: "Web Developer Intern",
    company: "Masai School",
    date: "2024 - Present",
  },
  // {
  //   role: "Software Engineer",
  //   company: "Verb Inc.",
  //   date: "2019 - 2022",
  // },
  // {
  //   role: "Jr. Front-End Engineer",
  //   company: "PNI Digital Media",
  //   date: "2019 - 2019",
  // },
  // {
  //   role: "Software Engineer",
  //   company: "Factom Inc.",
  //   date: "2018 - 2019",
  // },
];

const JobItem = ({
  job,
  active
}: {
  job: any;
  active?: boolean;
}) => {
  const { role, company, date} = job;

  return (
    <div
      className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2"
    >
      <div className="flex flex-col gap-1">
        <h5 className={classNames(
          "block text-xs md:text-md md:hidden font-medium dark:text-white text-black",
          { 'opacity-35': !active, 'opacity-65': active }
        )}>
          {date}
        </h5>
        <h1 className={classNames(
          "text-3xl md:text-4xl font-medium dark:text-white text-black text-left w-fit",
          { 'line-through opacity-55': !active, 'opacity-100': active }
        )}>
          {role}
        </h1>
      </div>
      <div className="flex flex-col md:items-end md:text-right">
        <h3 className={classNames(
          "text-sm lg:text-lg font-medium dark:text-white text-black",
          { 'opacity-65': !active, 'opacity-80': active }
        )}>
          {company}
        </h3>
        <h5 className={classNames(
          "hidden md:block text-xs lg:text-md font-medium dark:text-white text-black",
          { 'opacity-35': !active, 'opacity-65': active }
        )}>
          {date}
        </h5>
      </div>
    </div>
  );
};

const JobsCard = () => {
  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-6 p-4 justify-start">
        {/* GitHub Stats Section */}
        <div className="mt-4">
          <h2 className="text-xl font-medium dark:text-white text-black text-center mb-4">
            My GitHub Stats
          </h2>
          <GitHubStats />
        </div>

        {/* GitHub Calendar Section */}
        <div className="mt-2 ">
          <h2 className="text-xl font-medium dark:text-white text-black text-center mb-4">
            My GitHub Contributions
          </h2>
          <GitHubCalendarComponent />
        </div>
      </div>
    </CardWrapper>
  );
};



export default JobsCard;
