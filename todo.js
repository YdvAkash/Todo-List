/**
 * Add a task to one of the weekly task lists.
 * Kept as a classic script so existing inline onclick handlers remain compatible.
 */
function addTodo(day) {
    const input = document.getElementById(`${day}-input`);
    const list = document.getElementById(`${day}-todos`);

    if (!(input instanceof HTMLInputElement) || !(list instanceof HTMLUListElement)) {
        return;
    }

    const task = input.value.trim();
    if (!task) {
        input.focus();
        return;
    }

    const item = document.createElement("li");
    item.textContent = task;
    list.appendChild(item);

    input.value = "";
    input.focus();
}
