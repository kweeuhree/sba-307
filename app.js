// on click on the sidebar button open a 'display: none' div 


function openSidebar() {
    const sidebarIcon = document.getElementById('sidebar-icon');
    const mainNavigationBar = document.querySelector('.main-navigation-bar');
    const mainTag = document.querySelector('main');
    const footer = document.querySelector('footer');

    const computedStyle = window.getComputedStyle(mainNavigationBar);
 
    if(computedStyle.display==='none') {

        mainTag.style.display = 'none'; 
        footer.style.display = 'none';
        mainNavigationBar.style.display = 'flex';
        sidebarIcon.src = 'https://logowik.com/content/uploads/images/close1437.jpg';
    } else {
        mainTag.style.display = 'block'; 
        footer.style.display = 'flex'; 
        mainNavigationBar.style.display = 'none';
        sidebarIcon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZCzgqnZxPhuFIcoKaatzy6sAMDuF-bXkkQ&usqp=CAU";
    }
    
}
