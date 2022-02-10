let st_list = document.querySelectorAll(".exercise ul li");
let arr_list = [...st_list];

for (let i = 0; i <= arr_list.length; i++) {
    if (i % 2 == 0) {
        arr_list[i].style.backgroundColor = "grey";
    }
};

arr_list.at(4).classList.add("big");

for (let i = 0; i <= arr_list.length; i++) {
    if (i % 3 == 0) {
        arr_list[i].style.textDecoration = "underline";
    }
};