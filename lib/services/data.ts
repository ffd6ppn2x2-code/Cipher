import { ServiceCategory } from './types'

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'information-security-consulting',
    title: 'Information Security Consulting',
    shortTitle: 'InfoSec Consulting',
    tagline: 'Strategic security programs built for real-world risk.',
    icon: 'shield',
    description:
      "Cipher partners with organizations to design, assess, and strengthen information security programs. Our consultants help you manage cyber risk, meet regulatory expectations, and protect critical assets in an evolving threat landscape.",
    offerings: [
      {
        title: 'Security Risk Assessment',
        description: "Organizations often lack visibility into where their most critical risks exist.",
        whyItMatters: [
          "Over 70% of security incidents are linked to known but unaddressed risks",
          "Many organizations identify issues but lack prioritization based on business impact",
        ],
        cipherValue:
          "Cipher delivers risk assessments that translate technical findings into clear, ranked risks, helping leadership focus investment where it matters most.",
      },
      {
        title: 'Governance, Risk & Compliance (GRC)',
        description:
          "Develop and mature governance frameworks, security policies, and risk management processes aligned with industry standards and regulatory requirements.",
        whyItMatters: [
          "Regulatory scrutiny continues to increase across all industries",
          "Inconsistent policies and unclear ownership remain a leading cause of audit findings",
        ],
        cipherValue:
          "We help organizations establish practical governance frameworks that integrate policies, risk management, and compliance requirements -- reducing audit fatigue while strengthening security accountability.",
      },
      {
        title: 'Security Architecture & Design',
        description: "Security gaps are often introduced during system design and modernization.",
        whyItMatters: [
          "Cloud misconfigurations remain one of the top causes of data exposure",
          "Legacy architectures struggle to support modern security controls",
        ],
        cipherValue:
          "Cipher designs security architectures that are secure by design, scalable, and aligned with business goals -- supporting cloud adoption, zero trust initiatives, and long-term resilience.",
      },
      {
        title: 'Incident Readiness & Response Planning',
        description: "How an organization responds often determines the true impact of an incident.",
        whyItMatters: [
          "Organizations with tested response plans recover significantly faster",
          "Poor coordination during incidents leads to higher downtime and reputational damage",
        ],
        cipherValue:
          "We assess readiness, develop response playbooks, and conduct tabletop exercises so teams know exactly what to do when an incident occurs.",
      },
      {
        title: 'Third-Party & Vendor Risk',
        description:
          "Assess and manage risks introduced by vendors, partners, and service providers through structured evaluations and ongoing monitoring.",
        whyItMatters: [
          "Third-party incidents continue to rise year over year",
          "Many organizations lack consistent methods for evaluating vendor security",
        ],
        cipherValue:
          "Cipher helps organizations implement structured vendor risk programs, enabling consistent assessments, ongoing oversight, and risk-informed decision-making.",
      },
    ],
  },
  {
    slug: 'managed-security-operations-center',
    title: 'Managed Security Operations Center',
    shortTitle: 'MSOC',
    tagline: 'Continuous Protection. Advanced Detection. Swift Response.',
    icon: 'monitor',
    description:
      "In today's rapidly evolving threat landscape, cyber risks can emerge at any moment. Organizations require 24/7 vigilance, intelligence-driven monitoring, and rapid incident response to stay ahead of attackers. Cipher's Managed Security Operations Center (MSOC) delivers a fully managed, proactive security solution that safeguards your digital environment, detects anomalies, and mitigates threats before they escalate.",
    offerings: [
      {
        title: 'Intelligence-Driven Monitoring',
        description:
          "Cipher leverages SIEM, UEBA, and SOAR to continuously monitor your systems and networks. By correlating events, identifying anomalous behavior, and automating response workflows, our MSOC ensures threats are detected and neutralized in real time.",
        capabilities: [
          "SIEM-driven event correlation and log analysis",
          "UEBA for anomalous user and device behavior detection",
          "SOAR automation for accelerated incident response",
          "Real-time threat intelligence integration",
        ],
      },
      {
        title: 'Layered Security Architecture',
        description:
          "Our MSOC integrates multiple security technologies into a cohesive, resilient defense. This layered approach ensures comprehensive protection across endpoints, networks, cloud, and applications.",
        capabilities: [
          "Next-Generation Firewalls (NGFWs)",
          "Advanced Endpoint Protection (EDR/XDR)",
          "Intrusion Prevention & Detection (IPS/IDS)",
          "Cloud workload and API security monitoring",
        ],
      },
      {
        title: 'Advanced Threat Detection & Intelligence',
        description:
          "Cipher stays ahead of attackers by continuously analyzing emerging threats and attack patterns. Our experts map new attack vectors and proactively implement containment strategies to prevent lateral movement and minimize business impact.",
        capabilities: [
          "Continuous threat landscape analysis",
          "Attack vector mapping and TTP identification",
          "Proactive containment strategy development",
          "Threat intelligence feeds and dark web monitoring",
        ],
      },
      {
        title: 'Scalability & Adaptability',
        description:
          "Cipher's MSOC grows with your organization. Whether expanding cloud workloads, adding new offices, or increasing endpoints, our services scale seamlessly without requiring heavy investments in hardware, software, or personnel.",
        capabilities: [
          "Elastic monitoring capacity for cloud and on-prem",
          "Flexible deployment models tailored to your environment",
          "No upfront infrastructure investment required",
          "Seamless integration with existing security stacks",
        ],
      },
    ],
  },
  {
    slug: 'digital-forensics-incident-response',
    title: 'Digital Forensics & Incident Response',
    shortTitle: 'DFIR',
    tagline: 'Investigate, contain, and recover from cyber incidents with confidence.',
    icon: 'search',
    description:
      "In today's threat landscape, breaches can happen despite preventive measures. Fast, precise, and actionable incident response is critical to minimize damage, recover systems, and preserve business continuity. Cipher's DFIR services combine deep technical expertise, advanced forensic tools, and real-world threat intelligence to deliver rapid, effective, and defensible response capabilities.",
    offerings: [
      {
        title: 'Incident Response & Forensics',
        description:
          "Whether it's a targeted attack, ransomware outbreak, or suspicious system activity, Cipher helps organizations investigate incidents thoroughly, contain threats, and implement improvements to prevent recurrence.",
        capabilities: [
          "Rapid incident containment and lateral movement prevention",
          "Endpoint and network forensic analysis",
          "Malware and ransomware reverse engineering",
          "Root cause analysis and attack vector identification",
          "Regulatory and legal evidence preservation",
        ],
        benefits: [
          "Minimized business impact and reduced downtime",
          "Defensible forensic reports for auditors and regulators",
          "Actionable intelligence to prevent recurrence",
        ],
      },
      {
        title: 'Compromise Assessment',
        description:
          "Modern cyber threats often operate quietly, bypassing traditional defenses. Cipher's Compromise Assessment gives enterprises a clear view into latent threats across their digital environment, combining forensic analysis, behavioral monitoring, and intelligence-driven investigation.",
        capabilities: [
          "Intelligence-led anomaly and IOC discovery",
          "Deep forensic artifact and binary analysis",
          "Endpoint, network, and cloud telemetry correlation",
          "Prioritized remediation roadmap aligned to NIST and MITRE ATT&CK",
        ],
        benefits: [
          "Detect hidden threats that evade traditional scanning",
          "Reduce attacker dwell time",
          "Strengthen incident readiness and overall resilience",
        ],
      },
      {
        title: 'Incident Response Retainer',
        description:
          "Cipher offers an Incident Response Retainer to provide pre-contracted access to our DFIR experts in the event of a cyber incident. Retainer clients benefit from guaranteed response times, predictable budgeting, and proactive preparedness.",
        capabilities: [
          "Guaranteed response time from experienced responders",
          "Pre-defined retainer for cost certainty",
          "Readiness assessments and tabletop exercises included",
          "Ongoing threat intelligence and advisory services",
        ],
        benefits: [
          "Immediate access to elite DFIR expertise",
          "Cost predictability for emergency response",
          "Proactive planning reduces incident impact",
        ],
      },
      {
        title: 'Tabletop Exercise (TTX)',
        description:
          "Cipher's Tabletop Exercise service simulates high-stakes cyber incidents in a controlled, expert-led environment. By recreating realistic attack scenarios informed by current threat intelligence, our exercises test your teams' readiness, highlight gaps, and improve organizational resilience.",
        capabilities: [
          "Intelligence-driven scenario planning customized to your environment",
          "Interactive, role-based engagement across technical and executive teams",
          "Ransomware, insider threat, APT, and data breach scenarios",
          "Post-exercise analysis with prioritized improvement recommendations",
        ],
        benefits: [
          "Validated incident response readiness",
          "Enhanced cross-functional coordination",
          "Actionable intelligence to improve plans and playbooks",
          "Mapped to NIST, ISO 27001, and MITRE ATT&CK frameworks",
        ],
      },
    ],
  },
  {
    slug: 'offensive-security',
    title: 'Offensive Security',
    shortTitle: 'Offensive Security',
    tagline: 'Test your defenses before attackers do.',
    icon: 'target',
    description:
      "Cipher's offensive security services discover vulnerabilities in your systems through expert-led assessments, penetration testing, and secure development practices -- before threat actors can exploit them.",
    offerings: [
      {
        title: 'Vulnerability Assessment',
        description:
          "Every digital asset carries potential risk. Cipher's Vulnerability Assessment identifies weaknesses proactively, providing actionable insights to safeguard your enterprise.",
        capabilities: [
          "Comprehensive Asset Discovery across all environments",
          "Threat-Informed Analysis using current intelligence",
          "Actionable prioritized remediation recommendations",
        ],
        benefits: [
          "Proactive Risk Management",
          "Enhanced Compliance with ISO 27001, NIST, CIS Controls",
          "Reduced Attack Surface",
          "Strategic Guidance for long-term improvement",
        ],
      },
      {
        title: 'Mobile App Assessment',
        description:
          "Enterprise-grade protection for mobile applications in an AI-driven threat landscape. Aligned with OWASP MASVS, NIST, and ISO/IEC 27001.",
        capabilities: [
          "Advanced manual and automated testing",
          "Malware injection and code tampering analysis",
          "Insecure authentication mechanism review",
          "Encryption and key storage evaluation",
          "Jailbroken/rooted device exposure testing",
        ],
      },
      {
        title: 'Web Application Assessment',
        description:
          "Secure and maintain trust in your web applications. Cipher evaluates applications to identify security flaws covering application logic and technical controls.",
        capabilities: [
          "Injection vulnerabilities (SQL injection, etc.)",
          "Cross-site scripting (XSS)",
          "Authentication and access control weaknesses",
          "Application-layer denial-of-service conditions",
          "Misconfigurations and outdated components",
        ],
      },
      {
        title: 'Secure Software Development',
        description:
          "Reduce software risk before deployment. Cipher integrates security directly into the software lifecycle to identify and remediate vulnerabilities early.",
        capabilities: [
          "Source code review at key SDLC stages",
          "Authentication and authorization weakness detection",
          "Hardcoded credentials and secrets scanning",
          "Input validation and injection vulnerability analysis",
          "Standards-aligned reporting (OWASP, NIST, ISO)",
        ],
      },
      {
        title: 'Penetration Testing',
        description:
          "Test your digital defenses under realistic attack conditions. Cipher combines expert manual testing with advanced tooling to uncover vulnerabilities across your full environment.",
        capabilities: [
          "Advanced Threat Simulation (chained exploits, privilege escalation)",
          "Comprehensive Environment Coverage (cloud, on-prem, hybrid)",
          "Actionable Standards-Aligned Reporting (OWASP, NIST, ISO 27001)",
        ],
        benefits: [
          "Validated Security Posture",
          "Prioritized Remediation aligned with DevSecOps",
          "Sustained Resilience through embedded lifecycle insights",
        ],
      },
    ],
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security Services',
    shortTitle: 'Cloud Security',
    tagline: 'Secure your cloud from the ground up.',
    icon: 'cloud',
    description:
      "Cipher provides continuous visibility, threat-informed analysis, and expert guidance to ensure your cloud infrastructure remains resilient, compliant, and ready for business growth.",
    offerings: [
      {
        title: 'Cloud Security Monitoring',
        description:
          "Continuous visibility. Proactive defense. Informed decision-making. Cipher's Cloud Security Monitoring provides real-time oversight, deep analysis, and actionable intelligence.",
        capabilities: [
          "Real-Time Threat Detection using AI-driven analytics",
          "Event Correlation and Incident Response",
          "Policy Enforcement and Compliance Monitoring",
        ],
      },
      {
        title: 'Cloud Security Assessment',
        description:
          "Cipher evaluates your cloud environment from multiple angles: configuration, identity, network security, data protection, and application workloads.",
        capabilities: [
          "Comprehensive Risk Evaluation across all cloud dimensions",
          "Threat-Informed Recommendations based on global intelligence",
          "Continuous Improvement Roadmap for ongoing security maturity",
        ],
        benefits: [
          "Enhanced Visibility across every workload and identity",
          "Proactive Threat Mitigation before escalation",
          "Compliance Confidence with industry standards",
          "Actionable Insights with clear remediation guidance",
        ],
      },
      {
        title: 'Cloud Security Architecture & Design',
        description:
          "Build a secure foundation for your cloud environment. Cipher integrates security into your cloud strategy from the outset, designing architectures that minimize risk.",
        capabilities: [
          "Secure Network Architecture with zero-trust principles",
          "Identity and Access Management with least-privilege enforcement",
          "Data Protection and Encryption at rest and in transit",
          "DevSecOps Integration into CI/CD pipelines",
          "Risk Assessment & Remediation Guidance",
        ],
        benefits: [
          "Resilient Cloud Environments protected against breaches",
          "Business-Aligned Security supporting growth and agility",
          "Regulatory Confidence achieving compliance standards",
          "Proactive Threat Reduction through intelligence-informed architecture",
        ],
      },
    ],
  },
]

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug)
}
