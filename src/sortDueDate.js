import { getAllProjectTasks } from "./util.js";
import { projects } from "./projects.js";
import { format, formatDistance, formatRelative, subDays, formatDistanceToNowStrict, isPast, isToday, isYesterday } from 'date-fns'

const mainMenu = document.querySelector('.main-menu');
const overdueMenuItem = mainMenu.querySelector('.overdue');
const yesterdayMenuItem = mainMenu.querySelector('.yesterday');
const todayMenuItem = mainMenu.querySelector('.today');
const tomorrowMenuItem = mainMenu.querySelector('.tomorrow');
const upcomingMenuItem = mainMenu.querySelector('.upcoming');
const anytimeMenuItem = mainMenu.querySelector('.anytime');
const menuItems = [overdueMenuItem, yesterdayMenuItem, todayMenuItem, tomorrowMenuItem, upcomingMenuItem, anytimeMenuItem];

function sortTasksOnDueDate(e) {
    const allTasks = getAllProjectTasks(projects);
    const selectedMenuItem = e.currentTarget.textContent;

    switch (selectedMenuItem) {
        case 'Overdue':
            console.log('overdue');
            const overdueTasks = allTasks.filter(task => {
                const taskDueDate = new Date(task.dueDate);
                if (!isToday(taskDueDate) && isPast(taskDueDate)) return task;
            });
            return overdueTasks;
        case 'Yesterday': 
            const yesterdayTasks = allTasks.filter(task => {
                const taskDueDate = new Date(task.dueDate);
                if (isYesterday(taskDueDate)) return task;
            });
            return yesterdayTasks;
        default:
            console.log('something is not right');
    }
}

function handleMenuSelect(e) {
    const selectedMenuItem = e.currentTarget.textContent;
    
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', sortTasksOnDueDate);
})