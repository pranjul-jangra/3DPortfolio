import { Download, MapPin, SquareChartGantt } from "lucide-react";
import useThemeStyles from "../hooks/useThemeStyles";

export default function HeroCards({title, value}) {
    const { border, cyanText, cardStyle } = useThemeStyles();

    return (
        <div className={`cursor-default border ${border} backdrop-blur-sm bg-gradient-to-br py-2 px-[0.7rem] w-[12.5rem] rounded-xl shadow-lg ${cardStyle}`}>
            <p className={`flex align-middle gap-1 ${cyanText}`}>
                {title === "Location" && <MapPin className="w-5" />}
                {title === "Expertise" && <SquareChartGantt className="w-5" />}
                {title === "Resume" && <Download className="w-5"/>}
                {title}
            </p>
            <p className="text-sm">{value}</p>
        </div>
    )
}
