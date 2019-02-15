$(document).ready(function () {

    const tableFunctions = new TableFunctions();

    $(document).on("click", ".editBtn", function () {
        let uuid = this.closest("tr")["id"];
        location.href = `/updateItems/${uuid}`;
    });

    $(document).on("click", ".deleteBtn", function () {

        let uuid = this.closest("tr")["id"];
        tableFunctions.deleteRecord(uuid);
    });
});