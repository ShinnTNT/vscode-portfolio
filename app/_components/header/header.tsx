import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.leftContainer}>
          <img width={20} height={20} src="/vscode_icon.svg" alt="vscode" />
          <div>
            <div>File</div>
            <div>Edit</div>
            <div>View</div>
            <div>Go</div>
            <div>Run</div>
            <div>Terminal</div>
            <div>Help</div>
          </div>
        </div>

        {/* Center */}
        <div className={styles.centerContainer}>
          Shinn Thant - Visual Studio Code
        </div>

        {/* Right */}
        <div className={styles.rightContainer}>
          <div className={styles.minimize} />
          <div className={styles.maximize} />
          <div className={styles.close} />
        </div>
      </div>
    </div>
  );
};

export default Header;