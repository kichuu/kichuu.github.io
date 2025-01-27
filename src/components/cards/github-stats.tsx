const GitHubStats = () => {
    return (
      <div className="flex justify-center items-center gap-6">
        {/* GitHub Stats Image */}
        <img 
          src="https://github-readme-stats.vercel.app/api?username=kichuu&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
          alt="GitHub Stats"
          className="rounded-lg shadow-lg"
          style={{ width: "48%" }}
        />
        
        {/* Top Languages Image */}
        <img 
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=kichuu&theme=vue-dark&show_icons=true&hide_border=true&layout=compact"
          alt="Top Languages"
          className="rounded-lg shadow-lg"
          style={{ width: "48%" }}
        />
      </div>
    );
  };
  
  export default GitHubStats
