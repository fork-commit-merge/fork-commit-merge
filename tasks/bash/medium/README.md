
```markdown
# Disk Space Monitoring Script

This Bash script monitors the disk space usage on a Linux machine and sends an email alert if the available space falls below a specified threshold.

## Features

- Configurable threshold for low disk space.
- Sends an email alert with detailed information about the disk space status when the threshold is crossed.
- Utilizes the `df` command to monitor disk space.
- Uses the `mail` command to send email alerts.

## Prerequisites

- A Linux system with `bash`, `df`, and `mail` commands available.
- An email system configured to send emails from the command line.

## Installation

1. **Download the Script:** Download the script to your preferred directory.

2. **Make the Script Executable:**
    ```bash
    chmod +x disk_monitor.sh
    ```

3. **Install and Configure the Mail Command:**
    - Depending on your Linux distribution, install `mail` using the appropriate package manager. For example, on Ubuntu/Debian:
        ```bash
        sudo apt-get install mailutils
        ```
    - Configure your mail server (like Postfix) to send emails.

## Configuration

- **Threshold:** The threshold for disk space usage is set by the `THRESHOLD` variable within the script. Change this value to your preferred threshold percentage.
- **Email Address:** Set the `EMAIL` variable to the email address where alerts should be sent.

## Usage

To run the script manually:

```bash
./disk_monitor.sh
```

## Automating the Script

To automate the monitoring process, set up a cron job:

1. Edit the crontab file:
    ```bash
    crontab -e
    ```

2. Add a line to run the script at your desired frequency. For example, to run it every day at midnight:
    ```
    0 0 * * * /path/to/disk_monitor.sh
    ```



## Author

- **Manish Soni** - *Initial Work* - [mani1soni](https://github.com/mani1soni)

```