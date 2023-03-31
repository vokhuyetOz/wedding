import FlipCountdown from "@rumess/react-flip-countdown";
import { usePlatform } from "../../hooks/usePlatform";
import styles from "./Countdown.module.scss";

export const Countdown = () => {
  const { isMobile } = usePlatform();
  return (
    <div className={styles.container} id="countdown">
      <FlipCountdown
        endAt={"2023-04-09T18:30:00-03:00"} // Date/Time
        theme="dark" // light
        // titlePosition="bottom" // Options (Default: top): top, bottom.
        // size="large" // Options (Default: medium): large, medium, small, extra-small.
        yearTitle="Years"
        monthTitle="Months"
        dayTitle="days"
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        onTimeUp={() => console.log("Time's up ⏳")}
        endAtZero
        hideYear
        size={isMobile ? "small" : "medium"}
      />
    </div>
  );
};
