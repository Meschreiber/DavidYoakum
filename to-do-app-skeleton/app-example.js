(function () {

    var toDoForm = document.getElementById("toDoForm");
    var inputField = document.getElementById("todoInput");
    var toDoList = document.getElementById("toDoList");

    function addToDoItems(e) {
        e.preventDefault();
        if (inputField.value) {
            var newItem = document.createElement('li');
            newItem.innerHTML = '<span>' + inputField.value + '</span><button>Close</button>';
            toDoList.appendChild(newItem);
        };
        inputField.value = "";
        var toDoListItems = Array.prototype.slice.call(document.querySelectorAll(".todo-list-js li"));
        checkChildren(toDoListItems);
        hideList(toDoListItems);
    }

    function removeToDoItem(e) {
        if (e.target.nodeName.toLowerCase() === "button") {
            e.target.parentNode.remove();
        }
    }

    function checkChildren(toDoListItems) {
        toDoListItems.forEach(function (el) {
            if (el.children[0].textContent === "shopping") {
                el.classList.add("red-font");
            }
        });
    }

    function hideList(toDoListItems) {
        if (toDoListItems.length > 5) {
            toDoList.classList.add("fade-out");
            setTimeout(function () {
                toDoListItems.forEach(function (el) {
                    el.remove();
                });
                toDoList.classList.remove("fade-out");
            }, 600);
        }
    }

    toDoForm.addEventListener("submit", addToDoItems);
    toDoList.addEventListener("click", removeToDoItem);

})();