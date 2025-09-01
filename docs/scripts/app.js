const employees = [
  {
    id: 1,
    name: "احمد رضایی",
    image: "/docs/images/user1.jpg",
    code: "cu009",
    number: "09223150000",
    email: "ahmad@gmail.com",
    age: 38,
  },
  {
    id: 2,
    name: "بابک رجایی",
    image: "/docs/images/user2.jpg",
    code: "zz50",
    number: "09183600000",
    email: "babak@gmail.com",
    age: 30,
  },
  {
    id: 3,
    name: "امیر شکوهی",
    image: "/docs/images/user3.jpg",
    code: "wu001",
    number: "09108070707",
    email: "amir@gmail.com",
    age: 28,
  },
  {
    id: 4,
    name: "مجتبی سروش",
    image: "/docs/images/user4.jpg",
    code: "qa80",
    number: "09213499999",
    email: "mojtaba@gmail.com",
    age: 35,
  },
  {
    id: 5,
    name: "کوروش جهانبخش",
    image: "/docs/images/user5.jpg",
    code: "jj50",
    number: "09033100000",
    email: "korosh@gmail.com",
    age: 29,
  },
];

const employeesWrapper = document.querySelector(".employees-wrapper");
const modalScreen = document.querySelector(".modal-screen");
const nameInput = document.querySelector("#name");
const codeInput = document.querySelector("#code");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const imageInput = document.querySelector("#imageInput");
const toastBox = document.querySelector(".toast-box");
const processBar = document.querySelector(".process-bar");
const toastMessage = document.querySelector(".toast-message");

const saveEmployeesInLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
};
const loadEmployeesFromLocakStorage = () => {
  const storedData = localStorage.getItem("employees");
  if (storedData) {
    employees.splice(0, employees.length, ...JSON.parse(storedData));
  }
};
const mainPage = () => {
  employeesWrapper.innerHTML = "";
  employees.forEach((employee, index) => {
    employeesWrapper.insertAdjacentHTML(
      "beforeend",
      `   
                <div class="bg-white dark:bg-gray-300 shadow-md rounded-xl px-6 py-7 grid grid-cols-6 items-center">
                        <!-- نام و نام خانوادگی -->
                        <div class="flex items-center col-span-1">
                            <span class="text-sm text-gray-500">${
                              index + 1
                            }</span>
                            <div class="pr-7 flex items-center gap-3">
                                <img src="${
                                  employee.image
                                }" alt="user" id="image-e" class="w-9 h-9 object-cover rounded-full">
                                <p class="text-sm text-gray-800" id="name-e">${
                                  employee.name
                                }</p>
                            </div>
                        </div>
                        <!-- کد کارمند -->
                        <div class="col-span-1 text-center">
                            <span class="text-sm text-gray-500" id="code-e">${
                              employee.code
                            }</span>
                        </div>
                        <!-- شماره تماس -->
                        <div class="col-span-1 text-center">
                            <span class="text-sm text-gray-500" id="number-e">${
                              employee.number
                            }</span>
                        </div>
                        <!-- ایمیل -->
                        <div class="col-span-1 text-center">
                            <span class="text-sm text-gray-500" id="email-e">${
                              employee.email
                            }</span>
                        </div>
                        <!-- سن -->
                        <div class="col-span-1 text-center">
                            <span class="text-sm text-gray-500" id="age-e">${
                              employee.age
                            }</span>
                        </div>
                        <!-- دکمه حذف وادیت -->
                        <div class="col-span-1 text-center text-white">
                            <button  class="bg-red-700 dark:bg-gradient-to-r from-red-700 to-red-500 py-2.5 px-[30px] rounded-[10px]" onclick = "showRemoveModal(${
                              employee.id
                            })">
                                <svg class="w-4 h-4">
                                    <use href="#trash"></use>
                                </svg>
                            </button>
                            <button class="bg-amber-400 dark:bg-gradient-to-r from-amber-400 to-amber-300 py-2.5 px-[30px] rounded-[10px]" onclick = "showEditModal(${
                              employee.id
                            })">
                                <svg class="w-4 h-4">
                                    <use href="#edit"></use>
                                </svg>
                            </button>
                        </div>
    
                    </div>
            `
    );
  });
};
const showAddModal = () => {
  modalScreen.classList.remove("hidden");
  modalScreen.innerHTML = "";
  modalScreen.insertAdjacentHTML(
    "beforeend",
    `
     <div class="overlay fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div class="modal bg-zinc-300 dark:bg-gray-800 p-8 rounded-lg w-96">
              <div class="modal-header flex justify-between items-center mb-6">
                  <h2 class="dark:text-white text-black text-lg">ایجاد کاربر</h2>
                   <button class="close-btn"  onclick = "closeModal()">
                      <svg class="w-5 h-5 dark:text-white text-black">
                          <use href="#x"></use>
                      </svg>
                   </button>
                  </div>
                   <form>
                      <input type="text" id="name" placeholder="نام کاربر را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                      <input type="text" id="code" placeholder="کد کارمندی را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                      <input type="number" id="number" placeholder="شماره تماس کاربر را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                      <input type="text" id="email" placeholder="ایمیل کاربر را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                      <input type="number" id="age" placeholder="سن کاربر را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                      <input type="file" id="imageInput" accept="image/*"  class="hidden">
                      <button type="button" onclick="document.getElementById('imageInput').click()" class="bg-zinc-100 hover:bg-zinc-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-md">انتخاب عکس</button>
                      <div id="preview" class="mt-4 text-center text-gray-400 text-sm">
                      </div>
                      <div class="btn-group flex justify-between">
                          <button type="button" class="btn-confirm bg-lime-700 text-lime-500 px-4 py-2 rounded-md" onclick = "addNewEmployee()">تایید</button>
                           <button type="button" class="btn-cancel  bg-rose-950 text-rose-600 px-4 py-2 rounded-md"  onclick = "closeModal()">انصراف</button>
                      </div>
                  </form>
              </div>
          </div> 
    `
  );
};
const closeModal = () => {
  modalScreen.classList.add("hidden");
};
const showRemoveModal = (employeeId) => {
  modalScreen.classList.remove("hidden");
  modalScreen.innerHTML = `
    <div class="overlay fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div class="modal bg-zinc-300 dark:bg-gray-800 p-8 rounded-lg w-96">
            <div class="text-center mb-6">
                <button class="close-btn flex items-center" onclick = "closeModal()">
                    <svg class="w-5 h-5 dark:text-white text-black">
                        <use href="#x"></use>
                    </svg>
                </button>
                <h2 class="dark:text-white text-black text-lg">ایا از حذف این کاربر اطمینان دارید؟</h2>   
            </div>
                <div class="btn-group flex justify-between">
                    <button type="button" class="btn-cancel  bg-rose-950 text-rose-600 px-4 py-2 rounded-md" onclick = "closeModal()">انصراف</button>
                    <button type="submit" class="btn-confirm bg-lime-700 text-lime-500 px-4 py-2 rounded-md" onClick = "removeEmployee(${employeeId})">تایید</button>
                </div>
            </div>
        </div> 
    `;
};
const showEditModal = (employeeId) => {
  const employee = employees.find((emp) => emp.id === employeeId);
  modalScreen.classList.remove("hidden");
  modalScreen.innerHTML = `
    <div class="overlay fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div class="modal bg-zinc-300 dark:bg-gray-800 p-8 rounded-lg w-96">
            <div class="modal-header flex justify-between items-center mb-6">
                <h2 class="dark:text-white text-black text-lg">ویرایش کاربر</h2>
                 <button class="close-btn" onclick ="closeModal()">
                    <svg class="w-5 h-5 dark:text-white text-black">
                        <use href="#x"></use>
                    </svg>
                 </button>
            </div>
                <form>
                    <input value="${employee.name}" type="text" id="name" placeholder="نام کاربری جدید را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                    <input value="${employee.code}" type="text" id="code" placeholder="کد کارمندی جدید را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                    <input value="${employee.number}" type="number" id="number" placeholder="شماره تماس جدید را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                    <input value="${employee.email}" type="text" id="email" placeholder="ایمیل جدید را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                    <input value="${employee.age}" type="number" id="age" placeholder="سن جدید را وارد نمایید..." class="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-700 text-black dark:text-white rounded-md mb-4">
                    <input type="file" id="imageInput" accept="image/*"  class="hidden">
                    <button type="button" onclick="document.getElementById('imageInput').click()" class="bg-zinc-100 hover:bg-zinc-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-md">انتخاب عکس</button>
                    <div id="preview" class="mt-4 text-center text-gray-400 text-sm">
                    </div>
                    <div class="btn-group flex justify-between">
                        <button type="button" class="btn-cancel  bg-rose-950 text-rose-600 px-4 py-2 rounded-md" onclick ="closeModal()">انصراف</button>
                        <button type="button" class="btn-confirm bg-lime-700 text-lime-500 px-4 py-2 rounded-md" onclick = "editEmployee(${employeeId})">تغییر</button>
                    </div>
                </form>
        </div>
    </div> 
    `;
};
const removeEmployee = (employeeId) => {
  const employeeIndex = employees.findIndex((em) => {
    return em.id === employeeId;
  });

  if (employeeIndex !== -1) {
    employees.splice(employeeIndex, 1);
  }

  saveEmployeesInLocalStorage();
  mainPage();
  closeModal();
  showToastBar("کاربر با موفقیت حذف شد");
};
const addNewEmployee = () => {
  const nameInput = document.querySelector("#name");
  const codeInput = document.querySelector("#code");
  const numberInput = document.querySelector("#number");
  const emailInput = document.querySelector("#email");
  const ageInput = document.querySelector("#age");
  const imageInput = document.querySelector("#imageInput");

  let newEmployee = {
    id: employees.length + 1,
    name: nameInput.value,
    code: codeInput.value,
    number: numberInput.value,
    email: emailInput.value,
    age: ageInput.value,
    image: null,
  };
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      newEmployee.image = e.target.result;
      employees.push(newEmployee);
      employeesWrapper.insertAdjacentHTML(
        "beforeend",
        `
                    <div class="bg-white dark:bg-gray-300 shadow-md rounded-xl px-6 py-7 grid grid-cols-6 items-center">
                                <!-- نام و نام خانوادگی -->
                                <div class="flex items-center col-span-1">
                                    <span class="text-sm text-gray-500">${newEmployee.id}</span>
                                    <div class="pr-7 flex items-center gap-3">
                                        <img src="${newEmployee.image}" alt="user" class="w-9 h-9 object-cover rounded-full">
                                        <p class="text-sm text-gray-800">${newEmployee.name}</p>
                                    </div>
                                </div>
                                <!-- کد کارمند -->
                                <div class="col-span-1 text-center">
                                    <span class="text-sm text-gray-500">${newEmployee.code}</span>
                                </div>
                                <!-- شماره تماس -->
                                <div class="col-span-1 text-center">
                                    <span class="text-sm text-gray-500">${newEmployee.number}</span>
                                </div>
                                <!-- ایمیل -->
                                <div class="col-span-1 text-center">
                                    <span class="text-sm text-gray-500">${newEmployee.email}</span>
                                </div>
                                <!-- سن -->
                                <div class="col-span-1 text-center">
                                    <span class="text-sm text-gray-500">${newEmployee.age}</span>
                                </div>
                                <!-- دکمه حذف وادیت -->
                                <div class="col-span-1 text-center text-white">
                                    <button class="bg-red-700 dark:bg-gradient-to-r from-red-700 to-red-500 py-2.5 px-[30px] rounded-[10px] " >
                                        <svg class="w-4 h-4">
                                            <use href="#trash"></use>
                                        </svg>
                                    </button>
                                    <button class="bg-amber-400 dark:bg-gradient-to-r from-amber-400 to-amber-300 py-2.5 px-[30px] rounded-[10px]">
                                        <svg class="w-4 h-4">
                                            <use href="#edit"></use>
                                        </svg>
                                    </button>
                                </div>
            
                            </div>
                `
      );
      saveEmployeesInLocalStorage();
      mainPage();
    };
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = `<p class="text-red-800">لطفا تصویری انتخاب کنید</p>`;
  }

  if (
    nameInput.value === "" ||
    codeInput.value === "" ||
    numberInput.value === "" ||
    emailInput.value === "" ||
    ageInput.value === "" ||
    imageInput.value === ""
  ) {
    modalScreen.classList.remove("hidden");
  } else {
    emptyInputs();
    closeModal();
    showToastBar("کاربر با موفقیت اضافه شد");
  }
};
const editEmployee = (employeeId) => {
  const nameInput = document.querySelector("#name").value;
  const codeInput = document.querySelector("#code").value;
  const numberInput = document.querySelector("#number").value;
  const emailInput = document.querySelector("#email").value;
  const ageInput = document.querySelector("#age").value;
  const imageInput = document.querySelector("#imageInput");

  const employeeIndex = employees.findIndex((em) => {
    return em.id === employeeId;
  });

  if (employeeIndex !== -1) {
    if (imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        employees[employeeIndex] = {
          id: employeeId,
          name: nameInput,
          code: codeInput,
          number: numberInput,
          email: emailInput,
          age: ageInput,
          image: e.target.result,
        };
        saveEmployeesInLocalStorage();
        mainPage();
        closeModal();
        showToastBar("کاربر با موفقیت تغییر یافت");
      };
    } else {
      employees[employeeIndex] = {
        id: employeeId,
        name: nameInput,
        code: codeInput,
        number: numberInput,
        email: emailInput,
        age: ageInput,
        image: employees[employeeIndex].image,
      };
      saveEmployeesInLocalStorage();
      mainPage();
      closeModal();
      showToastBar("کاربر با موفقیت تغییر یافت");
    }
  }
};
const emptyInputs = () => {
  nameInput.value = "";
  codeInput.value = "";
  numberInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  imageInput.value = "";
  preview.innerHTML = "";
};
const showToastBar = (message) => {
  toastBox.classList.remove("hidden");
  toastMessage.innerHTML = message;
  let progressSteps = 0;

  const timer = setInterval(function () {
    progressSteps++;
    processBar.style.width = `${progressSteps}%`;
    if (progressSteps > 100) {
      processBar.style.width = `0%`;
      toastBox.classList.add("hidden");
      clearInterval(timer);
    }
  }, 20);
};
window.addEventListener("load", () => {
  loadEmployeesFromLocakStorage();
  mainPage();
});
//////////////////////////tailwind change theme ///////////////////////////////

const changeTheme = document.querySelector(".change-theme");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

changeTheme.addEventListener("click", function () {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
  }
});
