function addTask() {
  const taskInput = document.getElementById("taskInput");
  const timeInput = document.getElementById("timeInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  const taskTime = new Date(timeInput.value);

  if (!taskText || isNaN(taskTime)) {
    alert("Please enter a valid task and time.");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = `${taskText} (${taskTime.toLocaleString()})`;
  taskList.appendChild(li);

  // Calculate delay in milliseconds
  const now = new Date();
  const delay = taskTime - now;

  if (delay > 0) {
    setTimeout(() => {
      alert(`⏰ Reminder: ${taskText}`);
    }, delay);
  }

  // Clear input
  taskInput.value = "";
  timeInput.value = "";
}
