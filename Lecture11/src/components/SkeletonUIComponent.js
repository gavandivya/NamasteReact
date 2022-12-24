import { useContext } from 'react';
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import ThemeContext from "../context/ThemeContext";

const SkeletonUIComponent = () => {
    const { themeContext } = useContext(ThemeContext);
    let rows = [];
    for (let index = 0; index < 10; index++) {
        rows.push(
            <div className="m-5" key={index} >
                <div className="item card rounded-lg" style={{ backgroundColor: themeContext === "dark" ? "#0f172a" : "#ffffff", width: "11rem" }} >
                    <div className="item-img">
                        <Skeleton width={170} height={180} />
                    </div>
                    <h6 className="item-title">
                        <Skeleton count={5} width={170} />
                    </h6>
                </div>
            </div>
        );
    }
    return (
        <SkeletonTheme highlightColor={`${themeContext === "dark" ? "#0f172a" : "#ffffff"}`} baseColor={`${themeContext === "dark" ? "#1e293b" : "#e2dfdf"}`}>
            <div className="flex flex-wrap justify-evenly" style={{ textAlign: "center" }}>
                {rows}
            </div>
        </SkeletonTheme>
    );
}

export default SkeletonUIComponent;


