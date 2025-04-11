"use client"
import {
  Download,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {useState} from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = form;
    const mailtoLink = `mailto:laluprasath.dev.in@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[60%] w-[100%] h-[100%] rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/5 blur-3xl" />
        <div className="absolute -bottom-[40%] -left-[60%] w-[100%] h-[100%] rounded-full bg-gradient-to-tr from-purple-500/20 to-indigo-500/5 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl flex items-center">
            <span className="text-emerald-600 dark:text-emerald-400">Lalu</span>
            <span>prasath</span>
            <span className="ml-1 inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button
            asChild
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </header>

      <main className="container py-8 space-y-24">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-emerald-500/30 to-teal-500/10 rounded-full blur-3xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
                NodeJS Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Laluprasath{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  G
                </span>
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-[600px]">
                Experienced NodeJS developer crafting robust web applications
                and user-friendly websites with a focus on scalable solutions
                and performance optimization.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a
                 href="https://github.com/laluprasath-dev" target="_blank"
                  className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lalu-fintan?"
                  target="_blank"
                  className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 rotate-6"></div>
                <div className="absolute inset-[3px] rounded-3xl bg-white dark:bg-zinc-900 overflow-hidden">
                  <Image
                    src="/profile.png?height=320&width=320"
                    alt="Laluprasath G"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[20%] -left-[30%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/5 blur-3xl" />
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl">Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Experienced NodeJS developer with a proven track record of
                  creating robust web applications and user-friendly websites
                  over the past 2 years. Well-versed in both front-end and
                  back-end technologies, specializing in the design and
                  implementation of scalable solutions. Demonstrates a keen
                  ability to adapt to emerging web development trends, ensuring
                  the delivery of high-quality, performance-driven applications.
                  Committed to excellence and staying at the forefront of the
                  rapidly evolving tech landscape.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Phone
                    </p>
                    <p className="font-medium">9025198004</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Email
                    </p>
                    <p className="font-medium">laluprasath.dev.in@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Location
                    </p>
                    <p className="font-medium">Karur, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3 rounded-lg">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Website
                    </p>
                    <p className="font-medium">laluprasath.app</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -bottom-[20%] -right-[30%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 blur-3xl" />
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
              My Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Technical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              title="Front-End"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3v4c0 2-2 4-4 4s-4-2-4-4V3" />
                  <path d="M18 13v4c0 2-2 4-4 4s-4-2-4-4v-4" />
                  <path d="M10 3v4c0 2-2 4-4 4S2 9 2 7V3" />
                  <path d="M10 13v4c0 2-2 4-4 4s-4-2-4-4v-4" />
                </svg>
              }
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
              ]}
            />
            <SkillCard
              title="Back-End"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                  <line x1="8" y1="16" x2="8.01" y2="16" />
                  <line x1="8" y1="20" x2="8.01" y2="20" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                  <line x1="12" y1="22" x2="12.01" y2="22" />
                  <line x1="16" y1="16" x2="16.01" y2="16" />
                  <line x1="16" y1="20" x2="16.01" y2="20" />
                </svg>
              }
              skills={[
                "Node.js",
                "Express.js",
                "RESTful APIs",
                "SwaggerUI",
                "GraphQL",
              ]}
            />
            <SkillCard
              title="Database"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              }
              skills={["MongoDB", "Mongoose", "PostgreSQL", "Sequelize"]}
            />
            <SkillCard
              title="Tools & Deployment"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              }
              skills={[
                "Git",
                "GitHub",
                "GitLab",
                "Firebase",
                "GCP",
                "VS Code",
                "Postman",
              ]}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[20%] -left-[30%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/5 blur-3xl" />
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
              Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Work History</h2>
          </div>

          <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle className="text-2xl">NodeJs Developer</CardTitle>
                  <CardDescription className="text-lg">
                    Foss Freaks
                  </CardDescription>
                </div>
                <Badge className="w-fit bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border-0">
                  2022-Current
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Developed and maintained server-side applications using Node.js, Express.js, and related technologies, achieving a 20% improvement in application performance through strategic code optimizations.",
                  "Collaborated seamlessly with front-end developers to design and implement RESTful APIs for web and mobile applications, resulting in a 15% reduction in API response times and enhancing overall user experience.",
                  "Implemented stringent security measures, leading to a 30% decrease in security vulnerabilities and ensuring the scalability of applications to accommodate a 50% increase in user traffic.",
                  "Managed version control efficiently using Git, facilitating streamlined team collaboration and reducing code integration time by 25%.",
                  "Distinguished for rapid troubleshooting and debugging of complex issues in production environments, maintaining a 99.9% system reliability rate and minimizing downtime.",
                ].map((item, index) => (
                  <li key={index} className="pl-6 relative">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                    <p className="text-zinc-600 dark:text-zinc-400">{item}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -bottom-[20%] -right-[30%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 blur-3xl" />
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
              Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">My Work</h2>
          </div>

          <Tabs defaultValue="oym" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-xl">
              {[
                { value: "oym", label: "Optimise Your Marketing (OYM)" },
                { value: "blink", label: "Blink Time" },
                { value: "oma", label: "OMA" },
                { value: "roc", label: "ROC Jersey" },
                { value: "orrekie", label: "Orrekie" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 data-[state=active]:shadow-sm rounded-lg"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="oym">
              <ProjectCard
                title="Optimise Your Marketing (OYM)"
                link="https://app.optimiseyourmarketing.co.uk/"
                tech={["Node.Js", "Javascript", "MongoDB", "GCP", "Stripe"]}
                description="Developed an application under the TATA Group, designed specifically to showcase comprehensive details of Medical Oxygen Plants established throughout India. The application serves as an informative platform, highlighting key information about these essential facilities, contributing to increased awareness and accessibility of critical medical resources."
              />
            </TabsContent>
            <TabsContent value="blink">
              <ProjectCard
                title="Blink Time"
                link="https://app.blinktime.io/"
                tech={[
                  "Node.Js",
                  "Javascript",
                  "PostgreSQL",
                  "Sequelize",
                  "GCP",
                  "Firebase",
                ]}
                description="Contributed to the development of Blink Time, a UK-based Time Management Project catering to companies. Key responsibilities included integrating Google and Outlook calendars, enhancing functionality by implementing full calendar event management. Successfully streamlined time management processes, optimizing efficiency and user experience for clients."
              />
            </TabsContent>
            <TabsContent value="oma">
              <ProjectCard
                title="OMA (oliviermythodrama)"
                link="https://app.archetypesatwork.com"
                adminLink="https://admin.archetypesatwork.com"
                tech={["Node.Js", "Typescript", "MongoDB", "GCP", "Firebase"]}
                description="Contributed to pioneering OMA Archetypes, a groundbreaking method for assessing and enhancing individuals and organizations for future fitness. Leveraged expertise in developing and refining the Archetypes framework, translating fundamental patterns of human nature into practical applications. Committed to staying at the forefront of transformative methodologies for impactful change."
              />
            </TabsContent>
            <TabsContent value="roc">
              <ProjectCard
                title="ROC- Jersey Island"
                link="https://www.roc.je/"
                tech={["Node.Js", "Javascript", "MongoDB", "GCP"]}
                description="Developed a comprehensive digital platform connecting users to events, activities, and local businesses across Jersey, enhancing community engagement and accessibility. Integrated user-friendly features that allow seamless exploration of island life, providing a centralized hub for discovering everything Jersey has to offer. Collaborated with local enterprises to promote their services through the platform, fostering economic growth and strengthening local partnerships."
              />
            </TabsContent>
            <TabsContent value="orrekie">
              <ProjectCard
                title="Orrekie"
                link="https://amazing-insight-415210-staging.web.app/"
                tech={["Node.JS", "MongoDB", "Typescript", "Stripe"]}
                description="A smart and intuitive tool that helps businesses track and resolve project issues efficiently, from start to finish. Ensures no task or issue is overlooked, helping teams stay on top of every detail. Acts as a digital compass, guiding teams through daily operations and ensuring no issue—big or small—is lost or forgotten. Transforms every memo, document, and communication into a clear step toward project success, promoting clarity, collaboration, and quality assurance."
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[20%] -left-[30%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/5 blur-3xl" />
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
              Education
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Academic Background
            </h2>
          </div>

          <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle className="text-2xl">
                    B.Sc Computer Science
                  </CardTitle>
                  <CardDescription className="text-lg">
                    PGP College of Arts and Science
                  </CardDescription>
                </div>
                <Badge className="w-fit bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border-0">
                  2018-2021
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Participated in Expos and PPT Presentations",
                  "Collaborated with a team to build a web application presentation",
                ].map((item, index) => (
                  <li key={index} className="pl-6 relative">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                    <p className="text-zinc-600 dark:text-zinc-400">{item}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -bottom-[20%] -right-[30%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 blur-3xl" />
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
              Contact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>

          <div className="grid m:grid-cols-2 gap-8">
            <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4"  onSubmit={handleSubmit} >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
          onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            {/* <div className="space-y-8">
              <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3 rounded-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Phone
                      </p>
                      <p className="font-medium">9025198004</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3 rounded-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Email
                      </p>
                      <p className="font-medium">
                        laluprasath.dev.in@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3 rounded-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Location
                      </p>
                      <p className="font-medium">Karur, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3 rounded-lg">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Website
                      </p>
                      <p className="font-medium">laluprasath.app</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                <CardHeader>
                  <CardTitle className="text-2xl">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Tamil</span>
                        <span>Native</span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 h-2 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">English</span>
                        <span>Fluent</span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </section>

        {/* Hobbies Section */}
        {/* <section id="hobbies" className="scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[20%] -left-[30%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/5 blur-3xl" />
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
              Hobbies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What I Enjoy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Avid Reader",
                description:
                  "Enthusiastic about exploring diverse genres and authors, with a passion for gaining knowledge and insights through literature.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
              },
              {
                title: "Tennis Enthusiast",
                description:
                  "Actively engage in the sport of tennis, fostering physical fitness, strategic thinking, and a love for friendly competition.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7" />
                  </svg>
                ),
              },
              {
                title: "Fitness Enthusiast",
                description:
                  "Regularly attend the gym, maintaining a healthy and active lifestyle while exploring various fitness routines and exercises.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                ),
              },
              {
                title: "Travel Enthusiast",
                description:
                  "Embrace a love for exploration and cultural immersion through frequent travel, seeking new experiences and broadening perspectives.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
              },
            ].map((hobby, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {hobby.icon}
                  </div>
                  <CardTitle>{hobby.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {hobby.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md py-8">
        <div className="container text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://github.com/laluprasath-dev"
               target="_blank"
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
            target="_blank"
              href="https://www.linkedin.com/in/lalu-fintan?"
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Laluprasath G. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon, skills }) {
  return (
    <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden group hover:shadow-lg transition-all">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 border-0"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ title, link, adminLink, tech, description }) {
  return (
    <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {link && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </Button>
          )}
          {adminLink && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <a
                href={adminLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Admin Panel
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
