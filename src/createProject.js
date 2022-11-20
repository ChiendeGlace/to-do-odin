export const createProject = (name) => {
    const projectArray = [];
    const projectName = name;
    localStorage.setItem(`${projectName}`, JSON.stringify(projectArray));
}
