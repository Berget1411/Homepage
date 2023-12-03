import './styles/main.scss';

const projects = document.querySelectorAll('.project');
const links = document.querySelectorAll('.project .links img');

const showProject = (e) => {
  projects.forEach((project) => {
    if (project.contains(e.target)) return;
    if (project !== e.target) project.classList.add('hide-project');
  });
};

projects.forEach((project) =>
  project.addEventListener('mouseover', showProject),
);

const showAllProjects = () => {
  projects.forEach((project) => project.classList.remove('hide-project'));
};

projects.forEach((project) =>
  project.addEventListener('mouseleave', showAllProjects),
);
