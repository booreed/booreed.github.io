const password = document.querySelector("[name = 'AdminPassword']");
const AdminPasswordSendBtn = document.querySelector("[name = 'AdminPasswordSendBtn']");
AdminPasswordSendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var adminCongr = document.getElementsByName('adminCongr')
    if (password.value == "After Dark") {
        adminCongr[0].style = "display: inline;"
    }
    else {
        adminCongr[0].style = "display: none;"
    }

})
