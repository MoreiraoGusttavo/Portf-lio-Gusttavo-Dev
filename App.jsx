import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <>
      <div className="brand">GusttavoDev</div>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? (
          <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
      <section id="center">
        <div className="hero">
          <h1>Portfólio</h1>
        </div>
        <div>
          <h1>Gusttavo Sacco Moreirão</h1>
          <p>
            Desenvolvedor Full Stack
          </p>
        </div>
        <h2>Sobre mim</h2>
        <p>
          Meu nome é Gusttavo, tenho 22 anos, moro em São Paulo, faço faculdade de Ciência da Computação pela UNIP SP e estou no último ano.
           Sou um desenvolvedor júnior em formação que almejo a área full stack e em constante evolução com 9 meses de experiência em Suporte Técnico de TI na 2wl solution. Sou apaixonado por criar soluções inovadoras e eficientes. Com diversos cursos e experiências de projetos pessoais em diversas tecnologias, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos impactantes.
           Procuro atuar como Desenvolvedor Front-end ou Back-end seja como estágio/trainee ou como júnior.
Busco uma oportunidade na área de Desenvolvimento de Software. Tenho facilidade de aprendizado, perfil colaborativo e estou comprometido em contribuir com soluções eficientes e de qualidade.
        </p>
        <div className="skills-section">
          <h2>Hard Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>C#</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
            <li>PHP</li>
            <li>MySql/PostgreSql</li>
            <li>Git e Github</li>
            <li>Docker</li>
            <li>Visual Studio</li>
            <li>Github Actions e Copilot</li>
            <li>Cursor e Gemini Code</li>

          </ul>
        </div>
        <div className="skills-section">
          <h2>Soft Skills</h2>
          <ul>
            <li>Comunicação</li>
            <li>Observador e Minucioso</li>
            <li>Trabalho em equipe</li>
            <li>Resolução de problemas</li>
            <li>Adaptação a novas tecnologias</li>
          </ul>
        </div>
      <h2>Projetos Pessoais</h2>         
      <div className="projects-container">
        <div className="project-card">
          <h3>Projeto GSM Auto Help Desk</h3>
          <p>Desenvolvi um sistema/SaaS de auto help desk utilizando Cursor e linguagens como HTML,
             CSS, JavaScript no Front e SQLite para o Back End, e uma API para fazer a ponte e conseguir
             conectar e buscar informações do front/back end. Feito para problemas serem resolvidos (tanto
             de hardware quanto de software). Para com que os usuários consigam resolver os seus
             problemas de forma autônoma e que se mesmo assim não conseguirem, possui uma opcão de
             enviar um email com todas as informações necessárias utilizando tickets (em evolução).</p>
          <div className="project-social">
            <a href="https://github.com/MoreiraoGusttavo/ProjetoAutoHelpDesk" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg className="project-icon">
                <use href="icons.svg#github-icon"></use>
              </svg>
            </a>
            <a href="https://linkedin.com/in/gusttavomoreirao/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg className="project-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:moreirao.gusttavo@gmail.com" title="Email">
              <svg className="project-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 8.818h-18.895l5.629-8.813zm9.201-1.259l4.623-3.746v9.458l-4.623-5.712z"/>
              </svg>
            </a>
          </div>
          <a href="#" className="view-more"></a>
        </div>
        <div className="project-card">
          <h3>Projeto To Do List</h3>
          <p>Site Web para definição de tarefas do dia a dia com barra de pesquisa para adicionar uma
             tarefa, checkbox da tarefa, Botão de remover tarefa, Green Line após marcar a finalização da
             tarefa utilizando VSCODE e linguagens como: React (Jsx) para o front end, C# para o back end
             e PostgreSQL (docker) para o banco de dados. Aprendizado principalmente do início dos meus
             estudos com React e com o Docker (em evolução).</p>
          <div className="project-social">
            <a href="https://github.com/MoreiraoGusttavo/To-Do-List-Web-App" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg className="project-icon">
                <use href="icons.svg#github-icon"></use>
              </svg>
            </a>
            <a href="https://linkedin.com/in/gusttavomoreirao/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg className="project-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:moreirao.gusttavo@gmail.com" title="Email">
              <svg className="project-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 8.818h-18.895l5.629-8.813zm9.201-1.259l4.623-3.746v9.458l-4.623-5.712z"/>
              </svg>
            </a>
          </div>
          <a href="#" className="view-more"></a>
        </div>
        <div className="project-card">
          <h3>Projeto Portfólio</h3>
          <p>Projeto que fala sobre mim, mostra meus projetos e habilidades. Utilizando principalmente React.js, Vite, CSS, PHP e Gemini Code (em evolução).</p>
          <div className="project-social">
            <a href="https://github.com/MoreiraoGusttavo" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg className="project-icon">
                <use href="icons.svg#github-icon"></use>
              </svg>
            </a>
            <a href="https://linkedin.com/in/gusttavomoreirao/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg className="project-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:moreirao.gusttavo@gmail.com" title="Email">
              <svg className="project-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 8.818h-18.895l5.629-8.813zm9.201-1.259l4.623-3.746v9.458l-4.623-5.712z"/>
              </svg>
            </a>
          </div>
          <a href="#" className="view-more"></a>
        </div>
      </div>
      
      <div className="contact-section">
        <h2>Vamos Conversar?</h2>
        <p>Estou sempre aberto a propostas de trabalho e à novos projetos interessantes</p>
        <div className="contact-buttons">
          <a href="https://linkedin.com/in/gusttavomoreirao/" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">
            LinkedIn
          </a>
          <a href="mailto:moreirao.gusttavo@gmail.com" className="btn btn-email">
            Enviar Email
          </a>
        </div>
      </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      <footer className="footer">
        <p>Copyright 2026 (Gusttavo Sacco Moreirão) Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
