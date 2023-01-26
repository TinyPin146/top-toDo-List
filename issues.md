1. Adding task when in any sorted task menu
2. Can delete and mod completed task
3. Event listeners are attached twice - SOLVED // Problem was that when loaded from local storage, the cards were created without delay, meaning they got the same ID using miliseconds - SOLUTION: Math.random() * Date.now()