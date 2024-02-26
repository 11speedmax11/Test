let resultData = "";

document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("popupBackground").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popupBackground").style.display = "none";
});

document.getElementById("popupBackground").addEventListener("click", function (event) {
    if (event.target === document.getElementById("popupBackground")) {
        document.getElementById("popupBackground").style.display = "none";
    }
});

document.getElementById("submitBtn").addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    const jsonData = {
        Имя: firstName,
        Фамилия: lastName,
        Email: email,
        Телефон: phone,
        Сообщение: message,
    };

    const outputDiv = document.getElementById("output");
    resultData = resultData + JSON.stringify(jsonData, null, 2);
    outputDiv.innerHTML = "<h2>Текущие данные:</h2><pre>" + JSON.stringify(jsonData, null, 2) + "</pre>" + "<h2>Данные:</h2><pre>" + resultData + "</pre>";

    document.getElementById("popupBackground").style.display = "none";
});
