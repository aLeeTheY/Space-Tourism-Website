window.onpageshow = function (event) {
    if (event.persisted) {
        // Сбрасываем стили или перезагружаем, если страница из кэша
        window.location.reload();
    }
};
