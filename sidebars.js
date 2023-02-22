module.exports = {
  mySidebar: [
    "index",
    "release-notes",
    {
      type: "category",
      label: "Concepts",
      collapsed: true,
      items: [
        "components",
        "file-locations",
        {
          type: "category",
          label: "Automation Concepts",
          collapsed: true,
          items: [
            "automation-concepts/master-vs-daily",
            "automation-concepts/editing-master-vs-daily",
            "automation-concepts/named-schedule-instances",
            "automation-concepts/frequencies",
            "automation-concepts/property-expressions",
            "automation-concepts/time-zones",
            "automation-concepts/machine-groups",
            "automation-concepts/null-jobs",
            "automation-concepts/file-transfer-jobs",
            "automation-concepts/job-tracking",
            "automation-concepts/embedded-scripts",
          ],
        },
        "administration/server-options",
        {
          type: "category",
          label: "Users and Roles",
          collapsed: true,
          items: [
            "administration/user-accounts",
            "administration/roles",
            "administration/privileges",
          ],
        },
        {
          type: "category",
          label: "OpCon Objects",
          collapsed: true,
          items: [
            "objects/schedules",
            "objects/jobs",
            "objects/machines",
            "objects/machine-groups",
            "objects/remote-instances",
            {
              type: "category",
              label: "Properties",
              collapsed: false,
              items: [
                "objects/properties",
                "objects/defining-properties",
                "objects/using-properties",
              ],
            },
            "objects/thresholds",
            "objects/resources",
            "objects/calendars",
            "objects/access-codes",
            "objects/departments",
          ],
        },
        {
          type: "category",
          label: "Job Components",
          collapsed: true,
          items: [
            "job-components/overview",
            "job-components/instances",
            "job-components/frequency",
            "job-components/events",
            "job-components/threshold-resource-updates",
            "job-components/job-dependencies",
            "job-components/threshold-resource-dependencies",
            "job-components/expression-dependencies",
            "job-components/documentation",
            "job-components/tags",
          ],
        },
        {
          type: "category",
          label: "Job Types",
          collapsed: true,
          items: [
            "job-types/bis",
            "job-types/container",
            "job-types/file-transfer",
            "job-types/ibm-i",
            "job-types/java",
            "job-types/mcp",
            "job-types/null",
            "job-types/os-2200",
            "job-types/sap-bw",
            "job-types/sap",
            "job-types/sql",
            "job-types/tuxedo-art",
            "job-types/unix",
            "job-types/windows",
            "job-types/zos",
          ],
        },
        {
          type: "category",
          label: "Operations",
          collapsed: true,
          items: [
            "operations/schedule-dates",
            "operations/schedule-names",
            "operations/job-names",
            "operations/status-descriptions",
            "operations/status-change-commands",
            "operations/building-schedules",
            "operations/checking-schedules",
            "operations/deleting-schedules",
            "operations/editing-schedules",
            "operations/adding-jobs",
            "operations/containers",
            "operations/job-output",
            "operations/window-to-host",
            "operations/SAP-Job-Menu-Options",
          ],
        },
        {
          type: "category",
          label: "Event Notification",
          collapsed: true,
          items: [
            "notifications/Components",
            "notifications/Escalation",
            "notifications/Notification-Triggers",
            "notifications/Notification-Configuration",
          ],
        },
        // {
        //   type: 'category',
        //   label: 'Reference Information',
        //   collapsed: true,
        //   items: [
        //     'reference/Operations-Machine-Messages',
        //     'reference/Operations-File-Transfer-Messages',
        //     'reference/Windows-System-Errors',
        //     'reference/best-practices',
        //     'reference/property-expressions-syntax',
        //   ],
        // },
      ],
    },
    {
      type: "category",
      label: "Installation",
      collapsed: true,
      items: [
        "installation/whats-new",
        "installation/breaking-changes",
        "installation/system-requirements",
        "installation/install",
        "installation/upgrade",
        "installation/configuration",
        "installation/components",
        "installation/docker",
        "installation/database-scripts",
      ],
    },
    {
      type: "category",
      label: "Database",
      collapsed: true,
      items: [
        "Files/Database-Information/Failover-Scenarios",
        "Files/Database-Information/Manual-Setup-for-Microsoft-SQL-Replication",
        "Files/Database-Information/Setup-for-Automatic-Microsoft-SQL-Replication",
        "Files/Database-Information/Failover-and-Recovery-with-Replication",
        "Files/Database-Information/Setup-for-Automatic-Microsoft-SQL-Mirroring",
        "Files/Database-Information/Manual-Database-Backups-and-Restoration",
        "Files/Database-Information/OpCon-Data-Maintenance",
        {
          type: "category",
          label: "Reference Information",
          collapsed: true,
          items: [
            "Files/Database-Information/Database-Mirroring-Checklist",
            "Files/Database-Information/Database-Replication-Checklist",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "OpCon Events",
      collapsed: true,
      items: ["events/introduction", "events/defining", "events/types"],
    },
    {
      type: "category",
      label: "Reports",
      collapsed: true,
      items: ["reports/overview", "reports/predefined", "reports/custom"],
    },
    {
      type: "category",
      label: "Server Programs",
      collapsed: true,
      items: [
        "server-programs/introduction",
        "server-programs/licensing",
        "server-programs/service-manager",
        "server-programs/schedule-activity-monitor",
        "server-programs/network-communications",
        "server-programs/notify-handler",
        "server-programs/request-router",
        "server-programs/start-time-calculator",
        "server-programs/optional",
        "server-programs/configuration",
        "server-programs/logging",
      ],
    },
    {
      type: "category",
      label: "User Interfaces",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Enterprise Manager",
          collapsed: true,
          items: [
            "Files/UI/Enterprise-Manager/Logging-In",
            {
              type: "category",
              label: "Understanding the Layout",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/EM-UI-Layout",
                "Files/UI/Enterprise-Manager/Menus",
                "Files/UI/Enterprise-Manager/Navigation-Panel",
                "Files/UI/Enterprise-Manager/Information-Bar",
                "Files/UI/Enterprise-Manager/Keyboard-Shortcuts",
              ],
            },
            {
              type: "category",
              label: "Getting Started",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Managing-Connection-Profiles",
                "Files/UI/Enterprise-Manager/Setting-Preferences",
                "Files/UI/Enterprise-Manager/Setting-Language",
                "Files/UI/Enterprise-Manager/Receiving-Installation-Details",
              ],
            },
            {
              type: "category",
              label: "Solution Manager",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-Solution-Manager",
                "Files/UI/Enterprise-Manager/Using-Home",
                "Files/UI/Enterprise-Manager/Using-Operations",
                "Files/UI/Enterprise-Manager/Using-Vision",
                "Files/UI/Enterprise-Manager/Using-Self-Service",
                "Files/UI/Enterprise-Manager/Using-Profile",
              ],
            },
            {
              type: "category",
              label: "Administration",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-Administration",
                "Files/UI/Enterprise-Manager/Using-Quick-Search",
                "Files/UI/Enterprise-Manager/Using-Schedule-Master",
                "Files/UI/Enterprise-Manager/Using-Job-Master",
                "Files/UI/Enterprise-Manager/Using-Workflow-Designer",
                "Files/UI/Enterprise-Manager/Managing-Calendars",
                "Files/UI/Enterprise-Manager/Managing-Global-Properties",
                "Files/UI/Enterprise-Manager/Managing-Thresholds",
                "Files/UI/Enterprise-Manager/Managing-Resources",
                "Files/UI/Enterprise-Manager/Managing-Machines",
                "Files/UI/Enterprise-Manager/Managing-Machine-Groups",
                "Files/UI/Enterprise-Manager/Managing-Remote-Instances",
                "Files/UI/Enterprise-Manager/Managing-Server-Options",
                "Files/UI/Enterprise-Manager/Using-Administration-Tools",
              ],
            },
            {
              type: "category",
              label: "Operation",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-Operation",
                "Files/UI/Enterprise-Manager/Using-List-View",
                "Files/UI/Enterprise-Manager/Using-Matrix-View",
                "Files/UI/Enterprise-Manager/Using-Gantt-View",
                "Files/UI/Enterprise-Manager/Using-PERT-View",
                "Files/UI/Enterprise-Manager/Using-Bar-Chart-View",
                "Files/UI/Enterprise-Manager/Using-Pie-Chart-View",
                "Files/UI/Enterprise-Manager/Using-Workload-Chart-View",
                "Files/UI/Enterprise-Manager/Using-Machines-Status-View",
                "Files/UI/Enterprise-Manager/Using-Daily-Maintenance-View",
                "Files/UI/Enterprise-Manager/Using-Schedule-Build",
                "Files/UI/Enterprise-Manager/Using-Escalation-Acknowlegement",
                "Files/UI/Enterprise-Manager/Using-Secondary-Windows",
                "Files/UI/Enterprise-Manager/Using-Operation-Tools",
              ],
            },
            {
              type: "category",
              label: "Security",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-Security",
                "Files/UI/Enterprise-Manager/Managing-Roles",
                "Files/UI/Enterprise-Manager/Managing-User-Accounts",
                "Files/UI/Enterprise-Manager/Managing-Batch-Users",
                "Files/UI/Enterprise-Manager/Managing-Departments",
                "Files/UI/Enterprise-Manager/Managing-Access-Codes",
                "Files/UI/Enterprise-Manager/Managing-Privileges",
                "Files/UI/Enterprise-Manager/Using-Security-Tools",
              ],
            },
            {
              type: "category",
              label: "Management",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-Management",
                "Files/UI/Enterprise-Manager/Using-Audit-Management",
                "Files/UI/Enterprise-Manager/Using-History-Management",
                "Files/UI/Enterprise-Manager/Using-Notification-Manager",
                "Files/UI/Enterprise-Manager/Using-Escalation-Manager",
                "Files/UI/Enterprise-Manager/Using-Schedule-Extract",
                "Files/UI/Enterprise-Manager/Using-Tag-Manager",
                "Files/UI/Enterprise-Manager/Using-Frequency-Manager",
                "Files/UI/Enterprise-Manager/Using-Management-Tools",
              ],
            },
            {
              type: "category",
              label: "External Tools",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-External-Tools",
                "Files/UI/Enterprise-Manager/Configuring-the-Installation-Directory",
                "Files/UI/Enterprise-Manager/Opening-Import-Export",
                "Files/UI/Enterprise-Manager/Opening-Windows-Tools",
                "Files/UI/Enterprise-Manager/Adding-External-Tools",
              ],
            },
            {
              type: "category",
              label: "Enterprise Information",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-Enterprise-Information",
                "Files/UI/Enterprise-Manager/Using-Reports",
                "Files/UI/Enterprise-Manager/Using-Logs",
                "Files/UI/Enterprise-Manager/Using-Information-Tools",
              ],
            },
            {
              type: "category",
              label: "Scripts",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-Scripts",
                "Files/UI/Enterprise-Manager/Using-Script-Repository",
                "Files/UI/Enterprise-Manager/Managing-Script-Runners",
                "Files/UI/Enterprise-Manager/Managing-Script-Types",
                "Files/UI/Enterprise-Manager/Using-Scripts-Tools",
              ],
            },
            {
              type: "category",
              label: "Enterprise Support",
              collapsed: true,
              items: [
                "Files/UI/Enterprise-Manager/Working-with-Enterprise-Support",
                "Files/UI/Enterprise-Manager/Getting-Support-Information",
                "Files/UI/Enterprise-Manager/Reporting-Problems",
                "Files/UI/Enterprise-Manager/Accessing-Application-Logs",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Solution Manager",
          collapsed: true,
          items: [
            "Files/UI/Solution-Manager/Getting-Started",
            "Files/UI/Solution-Manager/Application-Help",
            "Files/UI/Solution-Manager/Logging-In",
            "Files/UI/Solution-Manager/Migrating-Data",
            {
              type: "category",
              label: "Understanding the Layout",
              collapsed: true,
              items: [
                "Files/UI/Solution-Manager/SM-UI-Layout",
                "Files/UI/Solution-Manager/URL-Shortcuts",
                "Files/UI/Solution-Manager/Keyboard-Shortcuts",
                "Files/UI/Solution-Manager/Responsive-Platform",
                "Files/UI/Solution-Manager/Viewing-Notification-Acknowledgement",
              ],
            },
            {
              type: "category",
              label: "Profile Settings",
              collapsed: true,
              items: [
                "Files/UI/Solution-Manager/Accessing-and-Updating-Profile-Settings",
                "Files/UI/Solution-Manager/Configuring-Account-Settings",
                "Files/UI/Solution-Manager/Generating-External-Tokens",
                "Files/UI/Solution-Manager/Configuring-Settings",
                "Files/UI/Solution-Manager/Configuring-Application-Settings",
              ],
            },
            {
              type: "category",
              label: "Self Service",
              collapsed: true,
              items: [
                //'Files/UI/Solution-Manager/Working-with-Self-Service',
                "Files/UI/Solution-Manager/Working-in-Admin-Mode",
                "Files/UI/Solution-Manager/Working-in-User-Mode",
                "Files/UI/Solution-Manager/Filtering-Service-Requests",
                "Files/UI/Solution-Manager/Viewing-Service-Request-Process-Indicators",
              ],
            },
            {
              type: "category",
              label: "Library",
              collapsed: true,
              items: [
                "Files/UI/Solution-Manager/Library/Resources/Resources",
                "Files/UI/Solution-Manager/Library/Thresholds/Thresholds",
                "Files/UI/Solution-Manager/Library/AccessCodes/AccessCodes",
                "Files/UI/Solution-Manager/Library/MachineGroups/MachineGroups",
                {
                  type: "category",
                  label: "Master Jobs",
                  collapsed: true,
                  items: [
                    "Files/UI/Solution-Manager/Library/MasterJobs/Adding-Master-Jobs",
                    "Files/UI/Solution-Manager/Library/MasterJobs/Copying-Master-Jobs",
                    "Files/UI/Solution-Manager/Library/MasterJobs/Moving-Master-Jobs",
                    "Files/UI/Solution-Manager/Library/MasterJobs/Deleting-Master-Jobs",
                    "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-Master-Jobs-Cross-References",
                    {
                      type: "category",
                      label: "Viewing and Updating Master Jobs",
                      collapsed: true,
                      items: [
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Accessing-Master-Jobs",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-General-Info",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Documentation",
                        {
                          type: "category",
                          label: "Job Task Details",
                          collapsed: true,
                          items: [
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/Container-Job-Details",
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/File-Transfer-Job-Details",
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/IBMi-Job-Details",
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/Null-Job-Details",
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/SAP-BW-Job-Details",
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/SAP-R3-Job-Details",
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/SQL-Job-Details",
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/Unix-Job-Details",
                            "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/JobTaskDetails/Windows-Job-Details",
                          ],
                        },
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Accessing-Master-Jobs",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-General-Info",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Documentation",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Tags",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Frequencies",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Events",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Instance-Properties",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Job-Dependencies",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Expression-Dependencies",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Resource-Dependencies",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Threshold-Dependencies",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Resource-Updates",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Threshold-Updates",
                        "Files/UI/Solution-Manager/Library/MasterJobs/Viewing-And-Updating-Master-Jobs/Viewing-And-Updating-Notification-Triggers",
                      ],
                    },
                  ],
                },
                "Files/UI/Solution-Manager/Library/NotificationGroups/NotificationGroups",
                "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTriggers",
                {
                  type: "category",
                  label: "Notification Types",
                  collapsed: true,
                  items: [
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/Copy-Notification-Trigger",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/Look-up-Notification-Sources",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/Email",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/Text-Message",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/OpCon-Events",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/Windows-Event-Log",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/Network-Message",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/SNMP-Trap",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/Run-Command",
                    "Files/UI/Solution-Manager/Library/NotificationTriggers/NotificationTypes/SPO-Event-Report",
                  ],
                },
                "Files/UI/Solution-Manager/Library/NotificationCategories/NotificationCategories",
                {
                  type: "category",
                  label: "Escalation Manager",
                  collapsed: true,
                  items: [
                    "Files/UI/Solution-Manager/Library/EscalationManager/Managing-Escalation-Rules",
                    "Files/UI/Solution-Manager/Library/EscalationManager/Managing-Escalation-Groups",
                  ],
                },
                {
                  type: "category",
                  label: "Scripts",
                  collapsed: true,
                  items: [
                    "Files/UI/Solution-Manager/Library/Scripts/Managing-Scripts",
                    "Files/UI/Solution-Manager/Library/Scripts/Managing-Script-Versions",
                    "Files/UI/Solution-Manager/Library/Scripts/Managing-Script-Types",
                    "Files/UI/Solution-Manager/Library/Scripts/Managing-Script-Runners",
                  ],
                },
                {
                  type: "category",
                  label: "Server Options",
                  collapsed: true,
                  items: [
                    "Files/UI/Solution-Manager/Library/ServerOptions/Managing-SSO-Configurations",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Studio",
              collapsed: true,
              items: [
                {
                  type: "category",
                  label: "Canvas",
                  collapsed: true,
                  items: [
                    "Files/UI/Solution-Manager/Studio/Canvas/Adding-Master-Schedules",
                    "Files/UI/Solution-Manager/Studio/Canvas/Copying-Master-Schedules",
                    "Files/UI/Solution-Manager/Studio/Canvas/Deleting-Master-Schedules",
                    "Files/UI/Solution-Manager/Studio/Canvas/Editing-Master-Schedules",
                    "Files/UI/Solution-Manager/Studio/Canvas/Viewing-Master-Schedules/Viewing-Master-Schedules",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Vision",
              collapsed: true,
              items: [
                "Files/UI/Solution-Manager/Working-with-Vision",
                {
                  type: "category",
                  label: "Live",
                  collapsed: true,
                  items: [
                    {
                      type: "category",
                      label: "Admin Mode",
                      collapsed: true,
                      items: [
                        "Files/UI/Solution-Manager/Working-in-Admin-Mode_Vision",
                        "Files/UI/Solution-Manager/Enabling-Admin-Mode-Editing_Vision",
                        "Files/UI/Solution-Manager/Managing-Vision-Settings",
                        "Files/UI/Solution-Manager/Managing-Vision-Frequencies",
                        "Files/UI/Solution-Manager/Managing-Vision-Actions",
                        "Files/UI/Solution-Manager/Managing-Vision-Remote-Instances",
                      ],
                    },
                    {
                      type: "category",
                      label: "User Mode",
                      collapsed: true,
                      items: [
                        "Files/UI/Solution-Manager/Working-in-User-Mode_Vision",
                        "Files/UI/Solution-Manager/Viewing-Cards-in-Vision-Live",
                      ],
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Health",
                  collapsed: true,
                  items: ["Files/UI/Solution-Manager/Viewing-Vision-Health"],
                },
              ],
            },
            {
              type: "category",
              label: "Operations",
              collapsed: true,
              items: [
                "Files/UI/Solution-Manager/Working-with-Operations",
                "Files/UI/Solution-Manager/Performing-Schedule-Status-Changes",
                "Files/UI/Solution-Manager/Performing-Job-Status-Changes",
                "Files/UI/Solution-Manager/Performing-Bulk-Job-Status-Updates-Schedule-Level",
                "Files/UI/Solution-Manager/Performing-Bulk-Job-Status-Updates-Date-Level",
                "Files/UI/Solution-Manager/Performing-Agent-Status-Updates",
                "Files/UI/Solution-Manager/Viewing-Job-Output",
                "Files/UI/Solution-Manager/Accessing-Job-Summary",
                "Files/UI/Solution-Manager/Accessing-Job-Executions-History",
                {
                  type: "category",
                  label: "Daily Job Definition",
                  collapsed: true,
                  items: [
                    "Files/UI/Solution-Manager/Accessing-Daily-Job-Definition",
                    "Files/UI/Solution-Manager/Viewing-and-Updating-General-Info",
                    "Files/UI/Solution-Manager/Viewing-and-Updating-Documentation",
                    {
                      type: "category",
                      label: "Job Task Details",
                      collapsed: true,
                      items: [
                        "Files/UI/Solution-Manager/Viewing-and-Updating-Job-Task-Details",
                        "Files/UI/Solution-Manager/Viewing-Null-Job-Details",
                        "Files/UI/Solution-Manager/Updating-IBMi-Job-Details",
                        "Files/UI/Solution-Manager/Updating-SAP-BW-Job-Details",
                        "Files/UI/Solution-Manager/Updating-SAP-R3-Job-Details",
                        "Files/UI/Solution-Manager/Viewing-Container-Job-Details",
                        "Files/UI/Solution-Manager/Updating-Windows-Job-Details",
                        "Files/UI/Solution-Manager/Updating-UNIX-Job-Details",
                        "Files/UI/Solution-Manager/Updating-File-Transfer-Job-Details",
                      ],
                    },
                    "Files/UI/Solution-Manager/Viewing-and-Updating-Job-Frequencies",
                    "Files/UI/Solution-Manager/Viewing-and-Updating-Instance-Properties",
                    //'Files/UI/Solution-Manager/Viewing-and-Updating-Job-Dependencies',
                    "Files/UI/Solution-Manager/Viewing-and-Updating-Expression-Dependencies",
                    "Files/UI/Solution-Manager/Viewing-and-Updating-Resource-Dependencies",
                    "Files/UI/Solution-Manager/Viewing-and-Updating-Threshold-Dependencies",
                    "Files/UI/Solution-Manager/Viewing-and-Updating-Resource-Updates",
                    "Files/UI/Solution-Manager/Viewing-and-Updating-Threshold-Updates",
                  ],
                },
                {
                  type: "category",
                  label: "Daily Maintenance",
                  collapsed: true,
                  items: [
                    "Files/UI/Solution-Manager/Performing-Schedule-Checks",
                    "Files/UI/Solution-Manager/Deleting-Schedules-and-Jobs",
                    "Files/UI/Solution-Manager/Adding-Jobs-to-Daily-Schedules",
                  ],
                },
              ],
            },
            "Files/UI/Solution-Manager/Using-PERT-View",
            "Files/UI/Solution-Manager/Managing-Daily-Processes",
            "Files/UI/Solution-Manager/Using-Schedule-Build",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Utilities",
      collapsed: true,
      items: [
        "utilities/overview",
        {
          type: "category",
          label: "Command-line Utilities",
          collapsed: true,
          items: [
            "utilities/Command-line-Utilities/Introduction",
            "utilities/Command-line-Utilities/Adminstrative-Stored-Procedures",
            "utilities/Command-line-Utilities/Audit-History-Cleanup",
            "utilities/Command-line-Utilities/BIRT-Report-Generator",
            "utilities/Command-line-Utilities/Check-Job-Termination",
            "utilities/Command-line-Utilities/Check-Schedule-and-Job-Status",
            "utilities/Command-line-Utilities/Chronoman",
            "utilities/Command-line-Utilities/DoBatch",
            "utilities/Command-line-Utilities/Job-History-Cleanup",
            "utilities/Command-line-Utilities/Pingman",
            "utilities/Command-line-Utilities/Schedule-Extract-Command-line-Interface",
            "utilities/Command-line-Utilities/SMA-Evaluate-Expression",
            "utilities/Command-line-Utilities/SMADirectory",
            "utilities/Command-line-Utilities/SMAGetServiceStatus",
            "utilities/Command-line-Utilities/SMAHoliday",
            "utilities/Command-line-Utilities/SMALogEvent",
            "utilities/Command-line-Utilities/SMASetRMFileName",
            "utilities/Command-line-Utilities/Synch-SAP",
          ],
        },
        {
          type: "category",
          label: "Graphical Utilities",
          collapsed: true,
          items: [
            "utilities/Graphical-Utilities/Introduction",
            "utilities/Graphical-Utilities/Legacy-Audit-Management",
            "utilities/Graphical-Utilities/Schedule-Import_Export",
            "utilities/Graphical-Utilities/SMA-OpCon-Configuration-Utility",
          ],
        },
        {
          type: "category",
          label: "SMA Dynamic Data Input",
          collapsed: true,
          items: [
            "utilities/SMA-Dynamic-Data-Input/Introduction",
            "utilities/SMA-Dynamic-Data-Input/Configuration",
            "utilities/SMA-Dynamic-Data-Input/Creating-Data-Input-Files",
            "utilities/SMA-Dynamic-Data-Input/SMADDI-Message-Types",
            "utilities/SMA-Dynamic-Data-Input/Data-Input-Message-Elements",
            "utilities/SMA-Dynamic-Data-Input/jobdata-Platform-specific-Elements",
          ],
        },
        {
          type: "category",
          label: "SMA Resource Monitor",
          collapsed: true,
          items: [
            "utilities/SMA-Resource-Monitor/Introduction",
            "utilities/SMA-Resource-Monitor/Summary-Information",
            "utilities/SMA-Resource-Monitor/Wizards",
            "utilities/SMA-Resource-Monitor/Tools",
            "utilities/SMA-Resource-Monitor/Service",
          ],
        },
      ],
    },
    {
      type: "link",
      label: "REST API Docs",
      href: "https://help.smatechnologies.com/opcon/core/api/22-0.html",
    },
  ],
};
