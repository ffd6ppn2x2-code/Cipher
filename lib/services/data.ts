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
      {
        title: 'Managed Security Operations Center (MSOC)',
        description:
          "Continuous Protection. Advanced Detection. Swift Response. In today's rapidly evolving threat landscape, Cipher's MSOC delivers fully managed, proactive security that safeguards your digital environment 24/7.",
        capabilities: [
          "24/7 Threat Monitoring & Response",
          "Automated Threat Response via SOAR",
          "Behavioral Analytics with UEBA",
          "Incident Investigation & Forensics",
          "Proactive Threat Hunting",
          "Reporting & Intelligence Sharing",
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
    slug: 'digital-forensics-incident-response',
    title: 'Digital Forensics & Incident Response',
    shortTitle: 'DFIR',
    tagline: 'Investigate, contain, and recover with confidence.',
    icon: 'search',
    description:
      "Cipher's DFIR services combine deep technical expertise, advanced forensic tools, and real-world threat intelligence to deliver rapid, effective, and defensible incident response capabilities.",
    offerings: [
      {
        title: 'Compromise Assessment',
        description:
          "Detect hidden threats before they disrupt your business. Cipher's Compromise Assessment gives enterprises a clear view into latent threats, combining forensic analysis and intelligence-driven investigation.",
        capabilities: [
          "Intelligence-Led Discovery using advanced threat intelligence",
          "Deep Forensic Analysis including artifact and binary review",
          "Integrated Risk Insights with prioritized remediation roadmap",
        ],
      },
      {
        title: 'Incident Response Retainer',
        description:
          "Rapid Access to Expert Responders. Cipher's IR Retainer provides pre-contracted access to DFIR experts with guaranteed response times and predictable budgeting.",
        benefits: [
          "Guaranteed Response Time with immediate expert engagement",
          "Predictable Budgeting with pre-defined retainer costs",
          "Proactive Preparedness through tabletop exercises",
          "Continuous Threat Insights and advisory services",
        ],
      },
      {
        title: 'Tabletop Exercise (TTX)',
        description:
          "Build confidence. Sharpen decisions. Strengthen resilience. Cipher's TTX service simulates high-stakes cyber incidents to test your teams' readiness.",
        capabilities: [
          "Intelligence-Driven Scenario Planning (ransomware, APT, insider threat)",
          "Interactive, Role-Based Engagement for all teams",
          "Continuous Learning and post-exercise improvement guidance",
        ],
        benefits: [
          "Validated Readiness under realistic pressure",
          "Enhanced Cross-Functional Coordination",
          "Actionable Intelligence for IR plan improvement",
          "Regulatory and Compliance Support (NIST, ISO, MITRE ATT&CK)",
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
