import { useEffect, useState } from "react";
import useThemeStyles from "../hooks/useThemeStyles";
import Tilt from 'react-parallax-tilt';
import { languageColors } from "../utils/languageColors";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_NAME;
const GITHUB_API = "https://api.github.com/graphql";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export default function GithubStatsCard() {
    const { cardBg, grayText, cyanText, border, color, shadow } = useThemeStyles();
    const [contributions, setContributions] = useState(0);
    const [streaks, setStreaks] = useState({ current: 0, longest: 0 });
    const [repos, setRepos] = useState([]);

    // getch github stats
    useEffect(() => {
        fetchGitHubStats();
    }, []);

    const fetchGitHubStats = async () => {
        try {
            const query = `
        query {
          user(login: "${GITHUB_USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
            repositories(first: 100, ownerAffiliations: OWNER) {
              nodes {
                name
                stargazerCount
                forkCount
                isFork
                languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      `;

            const res = await fetch(GITHUB_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({ query }),
            });

            const data = await res.json();
            const user = data.data.user;

            const flatDays = user.contributionsCollection.contributionCalendar.weeks
                .flatMap((w) => w.contributionDays)
                .map((d) => ({
                    date: new Date(d.date),
                    count: d.contributionCount,
                }))
                .sort((a, b) => a.date - b.date);

            const { currentStreak, longestStreak } = calculateStreaks(flatDays);

            setContributions(user.contributionsCollection.contributionCalendar.totalContributions);
            setStreaks({ current: currentStreak, longest: longestStreak });
            setRepos(user.repositories.nodes);
        } catch (error) {
            console.error("GitHub API error:", error);
        }
    };

    // Calculate streaks
    const calculateStreaks = (days) => {
        let longest = 0, current = 0, temp = 0;
        let prevDate = null;
        for (let i = 0; i < days.length; i++) {
            const { date, count } = days[i];
            if (count > 0) {
                if (prevDate && (date - prevDate) / (1000 * 3600 * 24) === 1) {
                    temp++;
                } else {
                    temp = 1;
                }
                if (temp > longest) longest = temp;
                current = temp;
                prevDate = date;
            } else {
                temp = 0;
                prevDate = null;
            }
        }
        return { longestStreak: longest, currentStreak: current };
    };

    // Calculate total stars, forks, and top languages
    const totalStars = repos.reduce((acc, r) => acc + r.stargazerCount, 0);
    const topLanguagesData = repos
        .flatMap((r) => r.languages.nodes.map((l) => l.name))
        .reduce((acc, lang) => {
            acc[lang] = (acc[lang] || 0) + 1;
            return acc;
        }, {});

    const totalLangCount = Object.values(topLanguagesData).reduce((a, b) => a + b, 0);
    const topLanguages = Object.entries(topLanguagesData)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([lang, count]) => ({
            lang,
            percent: ((count / totalLangCount) * 100).toFixed(2),
        }));

    const formatDate = (d) => d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    const flatDate = (date) => new Date(date).toISOString().split("T")[0];

    const startDate = flatDate(contributions > 0);
    const today = formatDate(new Date());
    const longestStart = formatDate(new Date("2024-11-19"));
    const longestEnd = formatDate(new Date("2024-11-24"));

    // Get bar color
    const getBarColor = (lang) => languageColors[lang] || languageColors.default;


    return (
        <section className={`px-4 sm:px-8 pt-20 pb-4 z-50`}>
            <h2 className={`text-3xl font-playfair mb-10 ${cyanText}`}>GitHub Activities</h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Summary Card */}
                <Tilt
                    glareEnable
                    glareMaxOpacity={0.04}
                    scale={1}
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={2}
                    transitionSpeed={1000}
                    className={`rounded-2xl overflow-hidden border ${border} shadow-lg ${shadow} hover:-translate-y-1 transition-all duration-[1.4s] ease-out`}
                >
                    <div className={`p-8 bg-gradient-to-br ${cardBg}`}>
                        <h2 className="font-semibold text-lg mb-2">{GITHUB_USERNAME}'s GitHub Stats</h2>
                        <div className="flex items-center justify-between">
                            <div className={`space-y-1 text-sm ${grayText} text-nowrap`}>
                                <p>Total Stars Earned: <span className={`${color} font-medium`}>{totalStars}</span></p>
                                <p>Total Commits: <span className={`${color} font-medium`}>{contributions}</span></p>
                                <p>Total PRs: <span className={`${color} font-medium`}>1</span></p>
                                <p>Total Forks: <span className={`${color} font-medium`}>1</span></p>
                                <p>Total Issues: <span className={`${color} font-medium`}>4</span></p>
                                <p>Contributed to (last year): <span className={`${color} font-medium`}>4</span></p>
                            </div>
                            <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-4 border-gray-600">
                                <span className={`text-3xl ${color} font-bold`}>C</span>
                            </div>
                        </div>
                    </div>
                </Tilt>

                {/* Contribution & Streaks */}
                <Tilt
                    glareEnable
                    glareMaxOpacity={0.04}
                    scale={1}
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={2}
                    transitionSpeed={1000}
                    className={`rounded-2xl overflow-hidden flex align-middle justify-center border ${border} shadow-lg ${shadow} bg-gradient-to-br ${cardBg} hover:-translate-y-1 transition-all duration-[1.4s] ease-out`}
                >
                    <div className={`grid md:grid-cols-3 max-md:grid-cols-2 gap-4 max-md:gap-10 p-8`}>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <p className="text-gray-400 text-sm">Total Contributions</p>
                            <p className={`text-2xl font-semibold ${color}`}>{contributions}</p>
                            <p className="text-xs text-gray-500">Jul 21, 2024 - Present</p>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-1 max-md:row-span-2">
                            <div className="w-16 h-16 max-md:w-full max-md:h-full rounded-full border-4 max-md:border-[6px] border-orange-500 flex items-center justify-center text-orange-500 text-xl max-md:text-3xl font-bold">
                                {streaks.current}
                            </div>
                            <p className={`text-sm ${color}`}>Current Streak</p>
                            <p className="text-xs text-gray-500">{today}</p>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-1">
                            <p className="text-gray-400 text-sm">Longest Streak</p>
                            <p className={`text-2xl font-semibold ${color}`}>{streaks.longest}</p>
                            <p className="text-xs text-gray-500">{longestStart} - {longestEnd}</p>
                        </div>
                    </div>
                </Tilt>

                {/* Language Usage */}
                <Tilt
                    glareEnable
                    glareMaxOpacity={0.04}
                    scale={1}
                    tiltMaxAngleX={1}
                    tiltMaxAngleY={1}
                    transitionSpeed={1000}
                    className={`lg:col-span-2 rounded-2xl overflow-hidden border ${border} shadow-lg ${shadow} hover:-translate-y-1 transition-all duration-[1.4s] ease-out`}
                >
                    <section className={`p-8 bg-gradient-to-br ${cardBg}`}>
                        <h2 className="font-semibold text-lg mb-2">Most Used Languages</h2>
                        <div className="space-y-2">
                            {topLanguages.map(({ lang, percent }, i) => (
                                <div key={i}>
                                    <div className={`flex justify-between text-sm ${color}`}>
                                        <span>{lang}</span>
                                        <span>{percent}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-2 rounded">
                                        <div
                                            className={`h-2 rounded ${getBarColor(lang)}`}
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </Tilt>
            </div>
        </section>
    );
}
