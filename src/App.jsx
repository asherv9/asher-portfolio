import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import { Mail, ArrowDown, Code2, Rocket, GraduationCap, Trophy } from 'lucide-react'
import './App.css'
import { useEffect } from 'react'
import { initAnimations } from './animations'


function SpaceObject() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial
          color="#7955ff"
          metalness={0.7}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      <mesh scale={1.7}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#9b7bff"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[5, 5, 5]} intensity={40} color="#8b5cf6" />
          <pointLight position={[-5, -5, 2]} intensity={20} color="#2563eb" />
          <Stars radius={100} depth={50} count={3000} factor={4} fade />
          <SpaceObject />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="hero-content">
        <p className="eyebrow">✦ WELCOME TO MY UNIVERSE</p>

        <h1>
          I'M <span>ASHER</span>
        </h1>

        <h2>Student. Developer. Dreamer.</h2>

        <p className="hero-description">
          Exploring the world of technology, building creative solutions
          and turning ideas into reality.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <ArrowDown size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE ↓
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <p className="section-label">01 / ABOUT ME</p>

      <h2 className="section-title">
        The person behind <span>the code.</span>
      </h2>

      <p className="about-text">
        Hey! I'm Asher Vidukumar, a third-year Computer Science and
        Engineering student specializing in Data Science.

        I'm passionate about technology, programming and building
        practical projects that solve real-world problems.

        Currently exploring Python, IoT and innovative technology.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <GraduationCap />
          <h3>Education</h3>
          <p>CSE – Data Science</p>
          <span>3rd Year | 5th Semester</span>
        </div>

        <div className="info-card">
          <Code2 />
          <h3>Programming</h3>
          <p>Python</p>
          <span>Always learning</span>
        </div>

        <div className="info-card">
          <Trophy />
          <h3>Beyond Coding</h3>
          <p>Football</p>
          <span>Passion outside technology</span>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    number: '01',
    title: 'Motion Detection Sensor',
    category: 'INTERNET OF THINGS',
    description: 'An IoT project based on motion detection using sensors.',
    icon: '◉',
  },
  {
    number: '02',
    title: 'Smart Dustbin',
    category: 'INTERNET OF THINGS',
    description: 'An IoT-based smart dustbin designed to make waste management smarter.',
    icon: '♻',
  },
  {
    number: '03',
    title: 'Rock Paper Scissors',
    category: 'PYTHON DEVELOPMENT',
    description: 'A Python-based implementation of the classic Rock Paper Scissors game.',
    icon: '✊',
  },
  {
    number: '04',
    title: 'IV Drip Safety System',
    category: 'ONGOING SIP PROJECT',
    description: 'Real-Time IoT Based IV Drip Safety System for Patients. A project currently under development.',
    icon: '✚',
  },
]

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <p className="section-label">02 / MY WORK</p>

      <h2 className="section-title">
        Things I've <span>created.</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>
              <span className="project-icon">{project.icon}</span>
            </div>

            <p className="project-category">{project.category}</p>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-footer">
              <span>PROJECT / ASHER</span>
              <Rocket size={18} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label">03 / MY TOOLKIT</p>

      <h2 className="section-title">
        Learning. Building. <span>Growing.</span>
      </h2>

      <div className="skills-container">
        <div className="skill-pill">Python</div>
        <div className="skill-pill">IoT</div>
        <div className="skill-pill">Problem Solving</div>
        <div className="skill-pill">Data Science</div>
        <div className="skill-pill">Creative Thinking</div>
      </div>
    </section>
  )
}
function BeyondCoding() {
  return (
    <section className="section football-section" id="football">
      <p className="section-label">04 / BEYOND TECHNOLOGY</p>

      <h2 className="section-title">
        More than just <span>code.</span>
      </h2>

      <div className="football-card">
        <div className="football-icon">⚽</div>

        <div>
          <h3>Football Is My Passion</h3>

          <p>
            Beyond programming and technology, football is something
            I genuinely enjoy. It teaches me teamwork, discipline,
            determination and the importance of never giving up.
          </p>

          <span>PASSION • TEAMWORK • DETERMINATION</span>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <p className="section-label">04 / GET IN TOUCH</p>

      <h2 className="section-title">
        Let's create something <span>amazing.</span>
      </h2>

      <p className="about-text">
        Interested in technology, innovative projects or just want
        to connect? I'd love to hear from you.
      </p>

      <a href="mailto:YOUR_EMAIL_HERE" className="primary-btn">
        <Mail size={18} /> Say Hello
      </a>
    </section>
  )
}

function App() {
  useEffect(() => {
  const cleanup = initAnimations()

  return () => cleanup()
}, [])

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="brand">ASHER<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#football">Football</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <BeyondCoding />
      <Contact />


      <footer>
        <p>© 2026 ASHER VIDUKUMAR</p>
        <p>DESIGNED WITH CURIOSITY ✦ BUILT WITH PASSION</p>
      </footer>
    </main>
  )
}

export default App
