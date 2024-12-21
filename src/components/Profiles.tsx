import leetcodeLogo from './leetcode.jpeg';
import codeforcesLogo from './codeforces.png';
import codechefLogo from './codechef.png';

interface Profile {
  platform: string;
  description: string;
  image: string;
  profileLink: string;
}

const profiles: Profile[] = [
  {
    platform: "LeetCode",
    description: "Achieved Knight badge with a rating of 1880+ and solved over 900 problems. Specialized in algorithms, data structures, and competitive programming.",
    image: leetcodeLogo,
    profileLink: "https://leetcode.com/u/yogi_21"
  },
  {
    platform: "Codeforces",
    description: "Earned the Specialist rank with a rating of 1460+. Excelled in problem-solving and time-constrained challenges on this globally competitive platform.",
    image: codeforcesLogo,
    profileLink: "https://codeforces.com/profile/yogeswarreddyrachamallu"
  },
  {
    platform: "CodeChef",
    description: "Achieved a 4-star rating with a score of 1885. Demonstrated consistent performance in long challenges, cook-offs, and lunchtime contests.",
    image: codechefLogo,
    profileLink: "https://www.codechef.com/users/yogireddy"
  }
];

export default function Profiles() {
  return (
    <section id="profiles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            My Profiles
          </span>
        </h2>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={profile.platform}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
                <img
                  src={profile.image}
                  alt={profile.platform}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{profile.platform}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{profile.description}</p>
                <a
                  href={profile.profileLink}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                >
                  Visit Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
