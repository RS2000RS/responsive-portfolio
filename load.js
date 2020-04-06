$(document).ready(function(){
    let projnames = document.getElementsByClassName('proj-name');

    $('.panel-start').on('click', clearAllProjects);
    $(projnames).hover(hoverProjectName);
    $(projnames).click(clickProjectName);
    
    

    function clickProjectName(e) {
        event.stopPropagation(); 

        let projNumber = this.getAttribute('toggles'),
            projText = document.getElementsByClassName(projNumber)[0],
            projectNames = document.getElementsByClassName('proj-name');

        for (let i = 0 ; i < projectNames.length; i++) {
                projectNames[i].style.color = "black";
            }
            
        if (!projText.classList.contains('hidden')){
            projText.classList.add('hidden');
            this.style.color = "black";
        }
        else {    
            this.style.color = "blue";
            let projects = document.getElementsByClassName('project-text');
            for (let i = 0 ; i < projects.length; i++) {
                    if (projText != projects[i]) {
                        projects[i].classList.add('hidden');
                        projects[i].nextElementSibling.classList.add('hidden');
                    }             
                }
            projText.classList.remove('hidden');
        }
    }

    function hoverProjectName(e) {
        let projNumber = this.getAttribute('toggles'),
            projText = document.getElementsByClassName(projNumber)[0],
            projImage = document.getElementsByClassName(projNumber)[1];

        if (projText.classList.contains('hidden')){
            projImage.classList.toggle('hidden');
        }
    }

    function clearAllProjects(e) {
        let projectText = document.getElementsByClassName('projects')[0].getElementsByTagName("div"),
            projectImg = document.getElementsByClassName('projects')[0].getElementsByTagName("img"),
            projectNames = document.getElementsByClassName('proj-name');

        for (let i = 0 ; i < projectText.length; i++) {
            projectText[i].classList.add('hidden');
            projectImg[i].classList.add('hidden');
        }
        for (let i = 0 ; i < projectNames.length; i++) {
            projectNames[i].style.color = "black";
        }

    }
    

});