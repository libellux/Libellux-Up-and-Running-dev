(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{390:function(e,t,r){"use strict";r.r(t);var n=r(11),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called "),r("a",{attrs:{href:"https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zero Trust Network"),r("OutboundLink")],1),e._v(" using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://github.com/libellux/Libellux-Up-and-Running/workflows/ShiftLeft%20Scan/badge.svg",alt:"ShiftLeft Scan"}}),e._v(" "),r("a",{attrs:{href:"https://app.netlify.com/sites/nervous-jennings-d80639/deploys",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://api.netlify.com/api/v1/badges/c55fd474-8155-440c-971b-a9ccbaf2133c/deploy-status",alt:"Netlify Status"}}),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("DISCLAIMER")]),e._v(" "),r("p",[e._v('It is understood that this documentation, and any configurations may contain errors and are provided for education purposes only. The documentation, and any configurations are provided "as is" without warranty of any kind, whether express, implied, statutory, or otherwise.')])]),e._v(" "),r("h2",{attrs:{id:"credits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Role")]),e._v(" "),r("th",[e._v("Names")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Lead Authors:")]),e._v(" "),r("td",[e._v("Fredrik Hilmersson "),r("a",{attrs:{href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"}},[e._v("@libellux"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Contributors:")]),e._v(" "),r("td",[e._v("Damir Kucic "),r("a",{attrs:{href:"https://github.com/dkucic",target:"_blank",rel:"noopener noreferrer"}},[e._v("@dkucic"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Reviewers:")]),e._v(" "),r("td",[e._v("Scott Shinn "),r("a",{attrs:{href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"}},[e._v("@atomicturtle"),r("OutboundLink")],1),e._v(", Adam Hilmersson "),r("a",{attrs:{href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"}},[e._v("@cnsta"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Supporters:")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HyperQube"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://atomisystems.com/activepresenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atomi Systems"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://mullvad.net/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mullvad VPN"),r("OutboundLink")],1)])])])]),e._v(" "),r("h2",{attrs:{id:"environments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#environments"}},[e._v("#")]),e._v(" Environments")]),e._v(" "),r("ul",[r("li",[e._v("Ubuntu 20.04 LTS (Focal Fossa)")]),e._v(" "),r("li",[e._v("Ubuntu 18.04 LTS (Bionic Beaver)")]),e._v(" "),r("li",[e._v("Ubuntu 16.04 LTS (Xenial Xerus)")]),e._v(" "),r("li",[e._v("VMware ESXi 6.7.0")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HyperQube"),r("OutboundLink")],1)])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Conventions")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Convention")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Environment")]),e._v(" "),r("td",[e._v("server@ubuntu")]),e._v(" "),r("td",[e._v("Suffix determine operating system")])]),e._v(" "),r("tr",[r("td",[e._v("Server CLI")]),e._v(" "),r("td",[e._v("server@centos")]),e._v(" "),r("td",[e._v("Commands executed from server command-line")])]),e._v(" "),r("tr",[r("td",[e._v("Client CLI")]),e._v(" "),r("td",[e._v("client@ubuntu")]),e._v(" "),r("td",[e._v("Commands executed from client command-line")])]),e._v(" "),r("tr",[r("td",[e._v("Server IP")]),e._v(" "),r("td",[e._v("192.168.0.1")]),e._v(" "),r("td",[e._v("Server IP address")])]),e._v(" "),r("tr",[r("td",[e._v("Client IP")]),e._v(" "),r("td",[e._v("192.168.0.2")]),e._v(" "),r("td",[e._v("Client IP address")])]),e._v(" "),r("tr",[r("td",[e._v("VPN server")]),e._v(" "),r("td",[e._v("192.168.8.1")]),e._v(" "),r("td",[e._v("WireGuard VPN server IP address")])]),e._v(" "),r("tr",[r("td",[e._v("VPN client")]),e._v(" "),r("td",[e._v("192.168.8.2")]),e._v(" "),r("td",[e._v("WireGuard VPN client IP address")])])])])]),e._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of contents")]),e._v(" "),r("h4",{attrs:{id:"part-1-zero-trust-network"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#part-1-zero-trust-network"}},[e._v("#")]),e._v(" PART 1: ZERO TRUST NETWORK")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/wireguard/"}},[e._v("1.0: WireGuard Secure VPN Tunnel")]),e._v(" "),r("Badge",{attrs:{text:"incomplete",type:"warning"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/privacyidea/"}},[e._v("1.1: Authentication w/ privacyIDEA and YubiKey")]),e._v(" "),r("Badge",{attrs:{text:"incomplete",type:"warning"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/u2f/"}},[e._v("1.2: Universal 2nd Factor with YubiKey")]),e._v(" "),r("Badge",{attrs:{text:"incomplete",type:"warning"}})],1)]),e._v(" "),r("h4",{attrs:{id:"part-2-intrustion-detection-and-prevention"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#part-2-intrustion-detection-and-prevention"}},[e._v("#")]),e._v(" PART 2: INTRUSTION DETECTION AND PREVENTION")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ossec/"}},[e._v("2.0: OSSEC Host Intrusion Detection System")]),e._v(" "),r("Badge",{attrs:{text:"stable",type:"default"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/psad/"}},[e._v("2.1: PSAD Intrusion Detection with Log Analysis")]),e._v(" "),r("Badge",{attrs:{text:"stable",type:"default"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/openvas/"}},[e._v("2.2: Greenbone Vulnerability Manager")]),e._v(" "),r("Badge",{attrs:{text:"stable",type:"default"}})],1),e._v(" "),r("li",[e._v("2.3: Snort Network Intrusion Detection & Prevention System "),r("Badge",{attrs:{text:"TBA",type:"warning"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/clamav/"}},[e._v("2.4: ClamAV Antivirus Server")]),e._v(" "),r("Badge",{attrs:{text:"incomplete",type:"warning"}})],1)]),e._v(" "),r("h4",{attrs:{id:"part-3-monitoring-and-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#part-3-monitoring-and-management"}},[e._v("#")]),e._v(" PART 3: MONITORING AND MANAGEMENT")]),e._v(" "),r("ul",[r("li",[e._v("3.0: AWX Ansible Tower "),r("Badge",{attrs:{text:"TBA",type:"warning"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/mmonit/"}},[e._v("3.1: M/Monit System Monitoring")]),e._v(" "),r("Badge",{attrs:{text:"stable",type:"default"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/pcp/"}},[e._v("3.2: Performance Co-Pilot Grafana")]),e._v(" "),r("Badge",{attrs:{text:"incomplete",type:"warning"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/rsyslog/"}},[e._v("3.3: Rsyslog Log Processing")]),e._v(" "),r("Badge",{attrs:{text:"incomplete",type:"warning"}})],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/graylog/"}},[e._v("3.4: Graylog Centralized Log Management")]),e._v(" "),r("Badge",{attrs:{text:"incomplete",type:"warning"}})],1)]),e._v(" "),r("h4",{attrs:{id:"part-4-miscellaneous"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#part-4-miscellaneous"}},[e._v("#")]),e._v(" PART 4: MISCELLANEOUS")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/jira/"}},[e._v("4.0: Jira Software")]),e._v(" "),r("Badge",{attrs:{text:"TBA",type:"warning"}})],1)]),e._v(" "),r("h2",{attrs:{id:"workspace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workspace"}},[e._v("#")]),e._v(" Workspace")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HyperQube"),r("OutboundLink")],1),e._v(" platform provides Libellux: Up and Running with the ability to replicate entire cloud networks with the click of a button. It reduces overall virtualization spend by up to 80% while eliminating the waste associated with replicating infrastructure. HyperQube is cloud-agnostic, with current API support for both VMWare and AWS. "),r("a",{attrs:{href:"https://atomisystems.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atomi Systems"),r("OutboundLink")],1),e._v(" supports Libellux with the screen recording tool "),r("a",{attrs:{href:"https://atomisystems.com/activepresenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ActivePresenter"),r("OutboundLink")],1),e._v(" which enables us to create interactive screencasts.")]),e._v(" "),r("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/network.png",alt:"network"}}),e._v(" "),r("h2",{attrs:{id:"feedback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#feedback"}},[e._v("#")]),e._v(" Feedback")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("Questions"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("comments"),r("OutboundLink")],1),e._v(", or "),r("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("problems"),r("OutboundLink")],1),e._v(" regarding this service? Create an issue "),r("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" or contact "),r("a",{attrs:{href:"mailto:webmaster@libellux.com"}},[e._v("webmaster@libellux.com")]),e._v(".")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"}}),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"road-map"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[e._v("#")]),e._v(" Road map")]),e._v(" "),r("p",[e._v("To follow the process and prioritization check out the project "),r("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/projects/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("road map"),r("OutboundLink")],1),e._v(". Feel free to create a "),r("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("feature request"),r("OutboundLink")],1),e._v(" if there's any documentation or software you would like us to cover.")]),e._v(" "),r("h2",{attrs:{id:"release-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#release-notes"}},[e._v("#")]),e._v(" Release notes")]),e._v(" "),r("p",[r("strong",[e._v("Libellux: Up and Running changelog (1.0.1) "),r("a",{attrs:{href:"mailto:fredrik@libellux.com"}},[e._v("fredrik@libellux.com")])])]),e._v(" "),r("p",[r("strong",[e._v("Release Maintainers")])]),e._v(" "),r("p",[e._v("Fredrik Hilmersson "),r("a",{attrs:{href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"}},[e._v("@libellux"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Contributors on this release")])]),e._v(" "),r("p",[e._v("Scott Shinn "),r("a",{attrs:{href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"}},[e._v("@atomicturtle"),r("OutboundLink")],1),r("br"),e._v("\nAdam Hilmersson "),r("a",{attrs:{href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"}},[e._v("@cnsta"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Release notes")])]),e._v(" "),r("p",[e._v("The second release of Libellux: Up and Running mostly contain updates to already existing chapters. There is a few new additions to each chapter e.g. Agentless monitoring and Windows Server 2019 agent installation for OSSEC. The OpenVAS chapter has also been revised and updated with new features such as basic vulnerability scans to give a first hands-on experience. We've also completed the first revision for M/Monit System Monitoring.")]),e._v(" "),r("p",[e._v("What's New:")]),e._v(" "),r("p",[e._v("M/Monit System Monitoring (3.7.5) with Monit (5.27.0)"),r("br"),e._v("\nAgentless monitoring chapter to OSSEC Host Intrusion Detection (3.6.0)"),r("br"),e._v("\nWindows Server 2019 agent installation (OSSEC 3.6.0)"),r("br"),e._v("\nBasic authenticated and unauthenticated scan to OpenVAS Vulnerability Scanner (OpenVAS 20.08)")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Prior releases")]),e._v(" "),r("p",[r("strong",[e._v("Libellux: Up and Running changelog (1.0.0) "),r("a",{attrs:{href:"mailto:fredrik@libellux.com"}},[e._v("fredrik@libellux.com")])])]),e._v(" "),r("p",[r("strong",[e._v("Release Maintainers")])]),e._v(" "),r("p",[e._v("Fredrik Hilmersson "),r("a",{attrs:{href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"}},[e._v("@libellux"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Contributors on this release")])]),e._v(" "),r("p",[e._v("Damir Kucic "),r("a",{attrs:{href:"https://github.com/dkucic",target:"_blank",rel:"noopener noreferrer"}},[e._v("@dkucic"),r("OutboundLink")],1),r("br"),e._v("\nScott Shinn "),r("a",{attrs:{href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"}},[e._v("@atomicturtle"),r("OutboundLink")],1),r("br"),e._v("\nAdam Hilmersson "),r("a",{attrs:{href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"}},[e._v("@cnsta"),r("OutboundLink")],1),r("br"),e._v("\nZeny Palac "),r("a",{attrs:{href:"https://twitter.com/doczenzen",target:"_blank",rel:"noopener noreferrer"}},[e._v("@doczenzen"),r("OutboundLink")],1),r("br"),e._v("\nFalk "),r("a",{attrs:{href:"https://github.com/falkowich",target:"_blank",rel:"noopener noreferrer"}},[e._v("@falkowich"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Release notes")])]),e._v(" "),r("p",[e._v("This is the first release of Libellux: Up and Running. The initial release contain documentation and configuration for the software specified below (see What's New). Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.")]),e._v(" "),r("p",[e._v("What's New:")]),e._v(" "),r("p",[e._v("OSSEC Host Intrusion Detection (3.6.0)"),r("br"),e._v("\nPSAD Intrusion Detection (2.4.6)"),r("br"),e._v("\nOpenVAS Vulnerability Scanner (OpenVAS 20.08, Atomicorp 20.08)")])]),e._v(" "),r("h2",{attrs:{id:"recommended-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recommended-reading"}},[e._v("#")]),e._v(" Recommended reading "),r("Badge",{attrs:{text:"affiliate links",type:"warning"}})],1),e._v(" "),r("p",[e._v("The books recommended throughout this website, have all been insightful and many times the core for documentation. They've also been helpful in understanding and chosing the correct approach when applying configurations for various open-source software. All the literature are personally recommended. Following the affiliated links is a way to support Libellux: Up and Running and the authors.")]),e._v(" "),r("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/books.png",alt:"Books"}}),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://amzn.to/2HLyLJ5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zero Trust Networks: Building Secure Systems in Untrusted Networks, Gilman Evan, 2017"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/2TGVusl",target:"_blank",rel:"noopener noreferrer"}},[e._v("UNIX and Linux System Administration Handbook (5th Edition), Evi Nemeth, 2017"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/3oDUDHm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Securing DevOps: Security in the Cloud, Julien Vehent, 2017"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/3oDUNys",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instant OSSEC Host-based Intrusion Detection, Lhotsky Brad, 2013"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/2TCKKLP",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSSEC Host-Based Intrusion Detection Guide, Rory Bray, 2008"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/3kDNaFK",target:"_blank",rel:"noopener noreferrer"}},[e._v("Systems Performance: Enterprise and the Cloud, Gregg Brendan, 2013"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/2JhvCSa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mastering Ansible: Effectively automate configuration management and deployment challenges with Ansible, Freeman James & Keating Jesse, 2019"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/3aXFTP4",target:"_blank",rel:"noopener noreferrer"}},[e._v("FreeRADIUS Beginner's Guide, van der Walt Dirk, 2011"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/2TGW8Gh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mastering OpenLDAP: Configuring, Securing and Integrating Directory, Butcher Matt, 2007"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/31PXy5N",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible Up and Running (2nd Edition), Hochstein Lorin & Moser Rene, 2017"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/31Urf5N",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jira 8 Administration Cookbook, Patrick Li, 2019"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/35OuPzP",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux Firewalls, Michael Rash, 2007"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/34DnAuS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux Firewalls, Steve Suehring, 2015"),r("OutboundLink")],1)])]),e._v(" "),r("social-share")],1)}),[],!1,null,null,null);t.default=a.exports}}]);