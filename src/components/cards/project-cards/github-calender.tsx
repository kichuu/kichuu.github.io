import GitHubCalendar from 'react-github-calendar';

const GitHubCalendarComponent = () => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden">
      <GitHubCalendar
        username="kichuu"
        blockSize={10}  // Adjust block size for each day
        blockMargin={1} // Adjust margin between blocks
        fontSize={10}   // Adjust font size for the calendar
        style={{
          minWidth: "300px",  // Set a minimum width
          maxWidth: "100%",   // Ensure it adapts to the screen size
          height: "auto",     // Let the height adjust automatically
          margin: "0 auto",   // Center the calendar
        }}
      />
    </div>
  );
};

export default GitHubCalendarComponent;
