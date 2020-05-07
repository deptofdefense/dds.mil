---
type: post
title: "Code.mil: An Open Source Initiative at the Pentagon"
date: 2017-03-13T18:51:00.000Z
summary: Building bridges between the Department of Defense and the software
  development community, one pull request at a time
---
The Department of Defense (DoD) is a behemoth Federal agency built upon closed proprietary software and legacy systems that have been continually outpaced by modern technology and development standards. While the DoD has made strides towards modernization, one arena that has yet to be fully embraced and implemented is the practice of free and open source software. 

Our team at the Defense Digital Service (DDS) was formed by Secretary of Defense to bring in private sector best talent, practices and technology into the DoD. Most of us hail from companies such as Google and Amazon, and from environments where open source is commonplace. We at DDS deeply believe that code developed by Federal employees should be available for reuse and collaboration not only across the rest of government, but the public too.

As a result, we created [Code.mil](https://code.mil/), an initiative that allows developers around the world to reuse and contribute to unclassified code written by Federal employees in support of DoD programs, which in turn support services for millions of people around the globe.

**Open source in the Federal space** 

The concept of open source in government is not a brand new one: in fact, the White House launched [Code.gov](https://code.gov/) last November, which is the Federal government’s primary platform for code sharing and reuse. [Code.mil](https://code.mil/) is our direct implementation of this mission to “improve access to the Federal government’s custom developed software.” We want to promote the concept of open source across the vast DoD landscape, and demonstrate its utility by hosting projects developed by our own engineering talent. The many projects hosted on [Code.mil](https://code.mil/) will also be available on [Code.gov](https://code.gov/).

**How Code.mil is different**

The DoD is a policy driven organization, where many technology efforts and ideas spend years incubating in numerous meetings and briefings before resulting in any tangible output. By this point, the output (typically a policy) has since become outdated or too static and prescriptive, and arrests our capability to quickly adapt to the ever-changing technology landscape.

**Rather than going the traditional route, the [Code.mil](https://code.mil/) team decided to take an unconventional approach — at least by Pentagon standards.**

DDS General Counsel, Sharon Woods, and DDS engineers, Brandon Bouier and Tom Bereknyei, partnered together to create a developer-centric strategy that empowers individual contributors and creatively navigates the legal framework. DDS worked in consultation with organizations like the Open Source Initiative and Free Software Foundation for this first iteration.

We also decided to share a draft strategy on GitHub to actively engage in public discourse and crowdsource community input to codify a licensing pathway that makes the most sense for our unique situation. Through combining both legal and developer expertise, our metric for Code.mil’s success is defined by the level of active collaboration with the free and open source communities on DoD projects rather than written guidance or policy.

**Our new licensing strategy**

At the start of [Code.mil](https://code.mil/), our team wanted to experiment with using a legal avenue in contract law to create an arrangement similar to what is commonplace in the open source community. After soliciting feedback from the developer and legal communities across the Federal government and private sector, DDS settled on a simpler solution to reuse existing free and open source software licensing practices.

While all of the work done by Federal employees remains in the public domain with no restrictions, public contributors enjoy the protections of widely adopted free and open source licenses. As projects mature, the aggregate work — with all the patches, bug fixes, and additional features — will fall under the license associated with the project. To simplify the contribution process even further, DDS is releasing a GitHub webhook that will facilitate the verification of commits having followed the Developer Certificate of Origin process.

All of these elements collectively allow the DoD to tap into a vast pool of talent and creativity otherwise excluded from contributing to DoD efforts.

**What drives Code.mil**

There is a huge resource of developer talent within the DoD that would love to leverage some of the modern tools used in the tech industry to share code and ideas. Likewise, there are many skilled developers in private sector who would love to contribute to strengthening software developed within the government.

> *As Eric Raymond famously wrote, “given enough eyeballs, all bugs are shallow.”*

Opening up DoD codebases for the world to see allows code vulnerabilities to be identified and remediated more quickly than current internal methods. This crowdsourced concept is similar to how public bug bounties like Hack the Pentagon were successful in allowing the public to aid the DoD in identifying and fixing bugs faster and at a lower cost than the DoD could on its own.

Giving everyone the freedom to run, copy, distribute, study, change and improve software developed by DoD is a public good from which everyone should benefit. This is especially true considering that much of the code developed by the Federal government is funded by taxpayer dollars. This is one of the reasons why we are releasing our own custom-developed code on Code.mil.

**Our first release, eMCM**

Code.mil just released its first open source project, [eMCM](https://github.com/deptofdefense/eMCM): it’s a web-based viewer of the Manual for Courts-Martial (MCM). The MCM is the official guide to the conduct of Courts-martial in the U.S. military. The current process of updating the MCM is very manual and tedious, involving multiple trips across different military organizations and hours of looking for typos and inconsistencies. The MCM is republished only every several years, resulting in many out-of-date manuals in circulation.

Our team developed the [eMCM](https://github.com/deptofdefense/eMCM) to modernize this process by enabling the military to maintain a canonical “live” edition of the manual that is easily accessible, while also maintaining prior versions of the manual for legal purposes.

We chose to use the Affero General Public License (AGPL) for the [eMCM](https://github.com/deptofdefense/eMCM) because every military member has the right to know how the raw legal code (i.e., MCM) will be transformed or manipulated by the [eMCM](https://github.com/deptofdefense/eMCM). Applying the AGPL is a small but important way to help ensure the public has that freedom and transparency to the process. The [eMCM](https://github.com/deptofdefense/eMCM) is still in beta so we welcome any suggestions for the viewer.

**What’s next on Code.mil**

[Code.mil](https://code.mil/) will continue to iterate and expand as we gather more feedback from contributors and host more projects from across DoD on our platform. Future phases may include making [Code.mil](https://code.mil/) a full fledged website rather than just a redirect to the GitHub repository, expanding the repository to include projects from other DoD offices, tackling procured source code, and addressing how this strategy might facilitate technology transfer.

Our hope is that [Code.mil](https://code.mil/) will encourage conversation around these topics and allow anyone around the world to contribute knowledge and code for DoD projects. We invite everyone to open an issue or submit a pull request with your ideas on future directions for [Code.mil](https://code.mil/).

**Host your project on Code.mil**

[eMCM](https://github.com/deptofdefense/eMCM) is just the first of many projects we would love to host on [Code.mil](https://code.mil/). We hope that this effort will continue to encourage other components and offices within the DoD and Military Departments to benefit from releasing their code as open source too.

If you are a Federal employee and have a program or project you would like to share, start the conversation by connecting with us directly at code@dds.mil.

*\[this post has been migrated from an outdated Defense Digital Service Medium page]*